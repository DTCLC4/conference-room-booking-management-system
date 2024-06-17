# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    build_resource(sign_up_params)

    if save_resource
      handle_successful_signup
    else
      handle_failed_signup
    end
  end

  private

  def save_resource
    resource.save
  end

  def handle_successful_signup
    if resource.active_for_authentication?
      flash[:success] = I18n.t("pages.registrations.functions.signed_up_successfully")
      sign_out(resource)
    else
      flash[:warning] = I18n.t("pages.registrations.functions.inactive_signed_up")
      expire_data_after_sign_in!
    end

    sign_out(resource) if resource.active_for_authentication?
    redirect_to root_path
  end

  def handle_failed_signup
    clean_up_passwords(resource)
    set_minimum_password_length
    respond_with resource
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # def cancel
  #   super
  # end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :username])
  end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:name, :username])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   new_user_session_path
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   new_user_session_path
  # end
end
