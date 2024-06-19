FactoryBot.define do
  factory :user do
    name { "John Doe" }
    email { "john.doe@gmail.com" }
    password { "password123" }
    password_confirmation { "password123" }
    confirmed_at { Time.now }

    trait :unconfirmed do
      confirmed_at { nil }
    end

    trait :with_invalid_email do
      email { "john.doe@example.com" }
    end
  end
end
