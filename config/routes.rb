Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/tests', to: 'tests#index'
    get '/users/profile/:id', to: 'users#usersprofile'
    resources :users do
      resources :posts
    end
  end
end
