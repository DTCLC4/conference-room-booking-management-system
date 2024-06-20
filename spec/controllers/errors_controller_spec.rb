require "rails_helper"

RSpec.describe ErrorsController, type: :controller do
  describe "GET #not_found" do
    it "renders the 404 error page" do
      get :not_found
      expect(response).to have_http_status(:not_found)
      expect(response).to render_template(layout: false)
    end
  end

  describe "GET #internal_server_error" do
    it "renders the 500 error page" do
      get :internal_server_error
      expect(response).to have_http_status(:internal_server_error)
      expect(response).to render_template(layout: false)
    end
  end

  describe "GET #unprocessable_entity" do
    it "renders the 422 error page" do
      get :unprocessable_entity
      expect(response).to have_http_status(:unprocessable_entity)
      expect(response).to render_template(layout: false)
    end
  end
end
