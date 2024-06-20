require "rails_helper"

RSpec.describe ErrorsController, type: :request do
  describe "GET #not_found" do
    it "renders the 404 page with status not_found" do
      get "/404"
      expect(response).to have_http_status(:not_found)
      expect(response.body).to include("The page you were looking for does not exist.")
    end
  end

  describe "GET #internal_server_error" do
    it "renders the 500 page with status internal_server_error" do
      get "/500"
      expect(response).to have_http_status(:internal_server_error)
      expect(response.body).to include('We\'re sorry, but something went wrong.')
    end
  end

  describe "GET #unprocessable_entity" do
    it "renders the 422 page with status unprocessable_entity" do
      get "/422"
      expect(response).to have_http_status(:unprocessable_entity)
      expect(response.body).to include("The change you wanted was rejected.")
    end
  end
end
