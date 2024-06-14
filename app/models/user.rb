class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  validates :name, presence: true,
         length: { minimum: 5 },
         format: { with: /\A[a-zA-Z\s]+\z/, message: I18n.t('activerecord.errors.messages.invalid') }

  validate :email_domain_must_be_gmail

  private

  def email_domain_must_be_gmail
    return if email.blank?

    domain = email.split('@').last
    unless domain == "gmail.com"
      errors.add(:email, I18n.t('pages.registrations.errors.messages.email'))
    end
  end
end
