class UsersController < ApplicationController
  before_action :is_matching_login_user

  def show
      @nickname = current_user.nickname

      favorites = Favorite.where(user_id: current_user.id).pluck(:ingredient_id)  # ログイン中のユーザーのお気に入りのingredientカラムを取得
      @favorite_list =Ingredient.find(favorites)
  end

  private

  def is_matching_login_user
    user = User.find(params[:id])
    unless user.id == current_user.id
      redirect_to root_path
    end
  end
end
