require 'rails_helper'

RSpec.describe "Hellos", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/hello/index"
      expect(response).to have_http_status(:success)
    end
  end

end
