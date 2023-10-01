class IngredientController < ApplicationController
  def create
    @ingredient=Ingredient.new(ingredient_params)
    if @ingredient.save
      render :show
    else
      render :show
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
