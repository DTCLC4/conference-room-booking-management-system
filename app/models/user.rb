class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable, :omniauthable, omniauth_providers: [:google_oauth2]

  validates :name, presence: true,
                   length: { minimum: 5 },
                   format: { with: /\A[\p{L}\s]+\z/, message: I18n.t("activerecord.errors.messages.invalid") }

  validate :email_domain_must_be_gmail

  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.name = auth.info.name
    end
  end

  private

  def email_domain_must_be_gmail
    return if email.blank?

    domain = email.split("@").last
    errors.add(:email, I18n.t("activerecord.errors.messages.email")) unless domain == "gmail.com"
  end
end
