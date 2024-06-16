Rails.application.routes.draw do
  scope "(:locale)", locale: /en|vi|ja/ do
    root "static_pages#home"
    get "help", to: "static_pages#help"

    devise_for :users, controllers: {
                         sessions: "users/sessions",
                         registrations: "users/registrations",
                         passwords: "users/passwords",
                         confirmations: "users/confirmations",
                         unlocks: "users/unlocks",
                       }

    get "dashboard", to: "dashboard#index"
  end

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
