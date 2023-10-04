class Ingredient < ApplicationRecord
  validates :name, uniqueness: true
  has_many :favorites
  def full_category
    self.parentCategoryId.to_s + "-" + self.categoryId.to_s
  end

  def favorites_by?(user)
    favorites.where(user_id: user.id).exists?
  end
end
