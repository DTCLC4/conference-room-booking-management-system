class User < ApplicationRecord
        # Include default devise modules.
        devise :database_authenticatable, :registerable,
               :recoverable, :rememberable, :trackable, :validatable,
               :confirmable, :omniauthable

        # Include DeviseTokenAuth modules
        include DeviseTokenAuth::Concerns::User

  # Optional: Callback to generate token before saving if it doesn't exist
  before_save :generate_authentication_token, if: -> { authentication_token.blank? }

  # Method to generate a unique token
  def generate_authentication_token
    self.authentication_token = loop do
      token = SecureRandom.hex(10)
      break token unless User.exists?(authentication_token: token)
    end
  end

  # Validations
  validates :authentication_token, uniqueness: true
end
