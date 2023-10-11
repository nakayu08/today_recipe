FactoryBot.define do
  factory :ingredient do
    name {Faker::Lorem.word}
    categoryId {Faker::Number.between(to: 200)}
    parentCategoryId {Faker::Number.between(to: 20)}
    categoryUrl {Faker::Internet.url }
  end
end