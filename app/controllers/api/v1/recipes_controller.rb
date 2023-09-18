class Api::V1::RecipesController < ApplicationController
  def search
    @recipes = RakutenWebService::Recipes::Recipe.search(categoryType: "small")
     render json: { status: 'success', data: @recipes }  
end
end
