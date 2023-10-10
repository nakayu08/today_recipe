FactoryBot.define do
  factory :ingredient do
    name {Faker::Lorem.sentence}
    categoryId {Faker::Number.number(3)}
    parentCategoryId {Faker::Number.number(2)}
    categoryUrl {Faker::Internet.url }
  end
end