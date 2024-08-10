class ApplicationController < ActionController::Base
  # Override the method provided by Devise
  def authenticate_user!(options = {})
    if user_signed_in?
      super
    else
      store_location_for(:user, request.fullpath) # Lưu URL hiện tại
      redirect_to login_path, alert: 'You need to sign in or sign up before continuing.' # Chuyển hướng đến URL tùy chỉnh
    end
  end
end
