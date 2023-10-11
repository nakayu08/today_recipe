require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  before do
    @ingredient = FactoryBot.build(:ingredient)
  end


  describe '食材の新規登録' do
    context '新規登録できるとき' do
      it '食材名、categoryId、parentCategoryIdとcategoryUrlが存在すれば登録できる' do
        expect(@ingredient).to be_valid
      end
    end

    context '新規登録できないとき' do
      it '食材名が空では登録できない' do
        @ingredient.name = ''  # nameの値を空にする
        @ingredient.valid?
        expect(@ingredient.errors.full_messages).to include "食材名を入力してください"
      end

      it '重複した食材名が存在する場合は登録できない' do
        @ingredient.save
        another_ingredient = FactoryBot.build(:ingredient)
        another_ingredient.name = @ingredient.name
        another_ingredient.valid?
        expect(another_ingredient.errors.full_messages).to include('食材名はすでに存在します')
      end

      it 'カテゴリーが空では登録できない' do
        @ingredient.categoryId = ''  # categoryId の値を空にする
        @ingredient.valid?
        expect(@ingredient.errors.full_messages).to include "カテゴリーを入力してください"
      end

      it '親カテゴリーが空では登録できない' do
        @ingredient.parentCategoryId = ''  # parentCategoryIdの値を空にする
        @ingredient.valid?
        expect(@ingredient.errors.full_messages).to include "親カテゴリーを入力してください"
      end

      it '食材URLでは登録できない' do
        @ingredient.categoryUrl = ''  # categoryUrlの値を空にする
        @ingredient.valid?
        expect(@ingredient.errors.full_messages).to include "食材URLを入力してください"
      end
      
    end
  end
end