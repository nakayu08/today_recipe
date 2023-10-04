class IngredientController < ApplicationController
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
end
