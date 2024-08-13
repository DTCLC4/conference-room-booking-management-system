class Api::V1::AuthController < ApplicationController
  before_action :authenticate_user!, only: [:logout]
  skip_before_action :verify_authenticity_token

  def login
    user = User.find_for_database_authentication(email: params[:user][:email])
    if user&.valid_password?(params[:user][:password])
      render json: { token: user.authentication_token, user: user }
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def register
    user = User.new(user_params)
    if user.save
      render json: { token: user.authentication_token, user: user }, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def logout
    current_user.update(authentication_token: nil)
    render json: { message: 'Logged out successfully' }, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
