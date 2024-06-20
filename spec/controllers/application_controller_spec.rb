require "rails_helper"

RSpec.describe ApplicationController, type: :controller do
  controller do
    def resource_name
      :user
    end

    def index
      render plain: "index"
    end
  end

  describe "#set_locale" do
    it "sets the locale based on params[:locale]" do
      get :index, params: { locale: "vi" }
      expect(I18n.locale).to eq(:vi)
    end

    it "defaults to the default_locale when params[:locale] is not present" do
      get :index
      expect(I18n.locale).to eq(I18n.default_locale)
    end
  end

  describe "default_url_options" do
    it "returns a hash with locale set to current locale" do
      expect(controller.send(:default_url_options)).to eq({ locale: I18n.locale })
    end
  end

  describe "#layout_by_resource" do
    context "when not a user-related devise controller action" do
      before { allow(controller).to receive(:devise_controller?).and_return(false) }

      it "returns 'application' layout" do
        expect(controller.send(:layout_by_resource)).to eq("application")
      end
    end

    context "when a user-related devise controller action" do
      before do
        allow(controller).to receive(:devise_controller?).and_return(true)
        allow(controller).to receive(:resource_name).and_return(:user)
      end

      it "returns 'login' layout for new action" do
        allow(controller).to receive(:action_name).and_return("new")
        expect(controller.send(:layout_by_resource)).to eq("login")
      end

      it "returns 'login' layout for create action" do
        allow(controller).to receive(:action_name).and_return("create")
        expect(controller.send(:layout_by_resource)).to eq("login")
      end

      it "returns 'login' layout for edit action" do
        allow(controller).to receive(:action_name).and_return("edit")
        expect(controller.send(:layout_by_resource)).to eq("login")
      end

      it "returns 'login' layout for update action" do
        allow(controller).to receive(:action_name).and_return("update")
        expect(controller.send(:layout_by_resource)).to eq("login")
      end

      it "returns 'application' layout for other actions" do
        allow(controller).to receive(:action_name).and_return("show")
        expect(controller.send(:layout_by_resource)).to eq("application")
      end
    end
  end
end
