# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include RackSessionFix
  respond_to: json

  private

  def respond_with(resource, _opts = {})
    if request.method == 'POST' && resource.persisted?
      render json: {
       , message: "Signed up sucessfully.",
        data: resource
      }, status: :ok
    elsif request.method == "DELETE"
      render json: {
       message: "Account deleted successfully."
      }, status: :ok
    else
      render json: {
        message: "User couldn't be created successfully."
      }, status: :unprocessable_entity
    end
  end
end
