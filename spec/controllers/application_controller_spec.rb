require "rails_helper"

RSpec.describe ApplicationController, type: :controller do
  describe "before_action :set_locale" do
    it "sets the locale from params" do
      allow(I18n).to receive(:default_locale).and_return(:en)
      get :index, params: { locale: "ja" }
      expect(I18n.locale).to eq(:ja)
    end

    it "sets the locale to default if no params provided" do
      allow(I18n).to receive(:default_locale).and_return(:en)
      get :index
      expect(I18n.locale).to eq(:en)
    end
  end

  describe "default_url_options" do
    it "includes the locale" do
      allow(I18n).to receive(:locale).and_return(:vi)
      expect(controller.default_url_options).to eq({ locale: :vi })
    end
  end
end
