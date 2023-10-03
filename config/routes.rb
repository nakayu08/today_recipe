Rails.application.routes.draw do
  get 'ingredient/show'
  devise_for :users
  root 'top#index'
  resources :top, only: [ :show]
  resources :ingredient, only: [ :show,:create]
  resources :users, only: :show

  namespace 'api' do
    namespace 'v1' do
      get "/search", to: "recipe#search"
    end
  end
end
