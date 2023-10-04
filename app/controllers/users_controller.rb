class UsersController < ApplicationController
  def show
    @nickname = current_user.nickname

    favorites = Favorite.where(user_id: current_user.id).pluck(:ingredient_id)  # ログイン中のユーザーのお気に入りのingredientカラムを取得
    @favorite_list =Ingredient.find(favorites)
  end
end
