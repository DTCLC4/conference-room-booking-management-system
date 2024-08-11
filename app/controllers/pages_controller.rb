class PagesController < ApplicationController
  before_action :authenticate_user!, only: [:home, :about, :contact] # Chỉ bảo vệ các action này

  def home
    render 'layouts/application'
  end

  def login
    render 'layouts/application'
  end

  def about
    render 'layouts/application'
  end

  def contact
    render 'layouts/application'
  end

  def not_found
    render file: "#{Rails.root}/public/404.html", layout: false, status: :not_found
  end
end
