Rails.application.routes.draw do
  devise_for :users
  root "react_app#home"
  namespace :api do
    resources :sessions
  end
  resources :posts
  get "*path", to: "react_app#home"
end
