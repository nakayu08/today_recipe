class Ingredient < ApplicationRecord
  has_many :favorites
  def full_category
    self.parentCategoryId.to_s + "-" + self.categoryId.to_s
  end
end
