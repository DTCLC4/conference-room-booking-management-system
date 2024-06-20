require "rails_helper"

RSpec.describe ApplicationHelper, type: :helper do
  describe "#toastr_flash" do
    it "returns a success toastr message for notice" do
      flash[:notice] = "This is a notice message"
      result = helper.toastr_flash
      expect(result).to include("toastr.success('This is a notice message'")
    end

    it "returns an error toastr message for alert" do
      flash[:alert] = "This is an alert message"
      result = helper.toastr_flash
      expect(result).to include("toastr.error('This is an alert message'")
    end

    it "does not return a message for other types" do
      flash[:other] = "This is an other message"
      result = helper.toastr_flash
      expect(result).not_to include("toastr.")
    end
  end

  describe "#company_active?" do
    before do
      allow(helper).to receive(:current_page?).and_return(false)
    end

    it "returns true if current_page? is action_path" do
      allow(helper).to receive(:current_page?).with(action_path).and_return(true)
      expect(helper.company_active?).to be true
    end

    it "returns true if current_page? is product_path" do
      allow(helper).to receive(:current_page?).with(product_path).and_return(true)
      expect(helper.company_active?).to be true
    end

    it "returns true if current_page? is service_path" do
      allow(helper).to receive(:current_page?).with(service_path).and_return(true)
      expect(helper.company_active?).to be true
    end

    it "returns true if current_page? is new_feed_path" do
      allow(helper).to receive(:current_page?).with(new_feed_path).and_return(true)
      expect(helper.company_active?).to be true
    end

    it "returns false if none of the paths match" do
      expect(helper.company_active?).to be false
    end
  end
end
