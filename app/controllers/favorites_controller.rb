class FavoritesController < ApplicationController
  def create
    favorite = current_user.favorites.build(ingredient_id: params[:ingredient_id])
    favorite.save
    redirect_to user_path(current_user.id)
  end

  def destroy
    favorite = Favorite.find_by(ingredient_id: params[:ingredient_id], user_id: current_user.id)
    favorite.destroy
    redirect_to user_path(current_user.id)
  end
end
