class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :ingredient

  validates_uniqueness_of :ingredient_id, scope: :user_id    # バリデーション（ユーザーと食材の組み合わせは一意）
end
