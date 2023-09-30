class Ingredient < ApplicationRecord
  def full_category
    self.parentCategoryId.to_s + "-" + self.categoryId.to_s
  end
end
