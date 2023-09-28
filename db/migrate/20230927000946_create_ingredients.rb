class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name, null: false
      t.integer :categoryId, null: false
      t.integer :parentCategoryId, null: false
      t.string :categoryUrl, null: false
      t.timestamps
    end
  end
end
