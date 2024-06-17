class ApplicationController < ActionController::Base
  before_action :set_locale
  layout :layout_by_resource

  protected

  def layout_by_resource
    return "application" unless devise_controller? &&
                                resource_name == :user && %w(new create edit update).include?(action_name)

    "login"
  end

  private

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end

  def default_url_options
    { locale: I18n.locale }
  end
end
