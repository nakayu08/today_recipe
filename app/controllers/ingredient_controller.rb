class IngredientController < ApplicationController
  before_action :move_to_top, except: [:create, :show]

  def create
    @ingredient=Ingredient.new(ingredient_params)
    if @ingredient.save
      render :show
    else
      ingredient =Ingredient.find_by(name: params[:name])
      redirect_to ingredient_path(ingredient.id)
    end
  end

  def show
    @ingredient=Ingredient.find(params[:id])
  end

  private
    def ingredient_params
        params.permit(:name,:categoryId , :categoryUrl,:parentCategoryId)
    end

    def move_to_top
      unless user_signed_in?
        redirect_to root_path
      end
    end
end
