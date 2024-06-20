require "rails_helper"

RSpec.describe User, type: :model do
  describe "validations" do
    it "is valid with valid attributes" do
      user = build(:user)
      expect(user).to be_valid
    end

    it "is not valid without a name" do
      user = build(:user, name: nil)
      expect(user).not_to be_valid
    end

    it "is not valid with a short name" do
      user = build(:user, name: "John")
      expect(user).not_to be_valid
    end

    it "is not valid with a name containing invalid characters" do
      user = build(:user, name: "John123")
      expect(user).not_to be_valid
    end

    it "is not valid without an email" do
      user = build(:user, email: nil)
      expect(user).not_to be_valid
    end

    it "is not valid with a non-Gmail email" do
      user = build(:user, email: "john.doe@example.com")
      expect(user).not_to be_valid
    end

    it "is valid with a Gmail email" do
      user = build(:user, email: "john.doe@gmail.com")
      expect(user).to be_valid
    end
  end

  describe "devise modules" do
    it "confirms user" do
      user = create(:user, :unconfirmed)
      user.confirm
      expect(user.confirmed?).to be_truthy
    end

    it "remembers user" do
      user = create(:user)
      user.remember_me!
      user.save
      expect(user.remember_created_at).not_to be_nil
    end
  end

  describe "custom methods" do
    it "creates user from omniauth" do
      auth = OmniAuth::AuthHash.new(
        provider: "google_oauth2",
        uid: "123456789",
        info: {
          email: "john.doe@gmail.com",
          name: "John Doe",
        },
      )
      user = User.from_omniauth(auth)
      expect(user.email).to eq("john.doe@gmail.com")
      expect(user.name).to eq("John Doe")
      expect(user.persisted?).to be_truthy
    end

    it "does not create user from omniauth with existing email" do
      create(:user, email: "john.doe@gmail.com")
      auth = OmniAuth::AuthHash.new(
        provider: "google_oauth2",
        uid: "123456789",
        info: {
          email: "john.doe@gmail.com",
          name: "John Doe",
        },
      )
      user = User.from_omniauth(auth)
      expect(User.where(email: "john.doe@gmail.com").count).to eq(1)
    end
  end
end
