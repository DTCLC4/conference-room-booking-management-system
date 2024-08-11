Rails.application.routes.draw do
  # Devise routes for omniauth callbacks should be defined outside the locale scope
  devise_for :users, only: :omniauth_callbacks, controllers: { omniauth_callbacks: "users/omniauth_callbacks",
                                                               confirmations: "users/confirmations" }

  # Root route requiring login
  root "pages#home"

  # Devise routes, excluding omniauth callbacks
  devise_for :users, skip: :omniauth_callbacks, controllers: {
                         sessions: 'users/sessions',
                         registrations: 'users/registrations',
                         passwords: 'users/passwords',
                         confirmations: 'users/confirmations',
                         unlocks: 'users/unlocks',
                       }

  # Custom route for React components
  get '/login', to: 'pages#login'
  get '/register', to: 'pages#register'
  get '/contact', to: 'pages#contact'
  get '/about', to: 'pages#about'
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Các route của React nên được đặt sau route của Devise

  # Defines the root path route ("/")
  # root "posts#index"
end
