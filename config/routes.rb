Rails.application.routes.draw do
  devise_for :users
  root 'top#index'

  namespace 'api' do
    namespace 'v1' do
      get "/search", to: "recipe#search"
    end
  end
end
