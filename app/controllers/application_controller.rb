# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
        include DeviseTokenAuth::Concerns::SetUserByToken

        # Bỏ qua xác thực CSRF nếu cần
        skip_before_action :verify_authenticity_token, only: [:render_app]

        def render_app
          render 'layouts/application'
        end
end
