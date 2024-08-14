source "https://rubygems.org"

ruby "3.0.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.4"

# Use sqlite3 as the database for Active Record
gem "sqlite3", "~> 1.4"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 5.0"

#Pg is the Ruby interface to the PostgreSQL RDBMS. It works with PostgreSQL 9.3 and later.
gem 'pg', '~> 1.5', '>= 1.5.6'

# Autoload dotenv in Rails.
gem "dotenv-rails", "~> 2.1", ">= 2.1.1"

# Middleware that will make Rack-based apps CORS compatible. Fork the project here: https://github.com/cyu/rack-cors
gem "rack-cors"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mswin mswin64 mingw x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin Ajax possible
# gem "rack-cors"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mswin mswin64 mingw x64_mingw ]
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

group :test do
  # Use system testing [https://guides.rubyonrails.org/testing.html#system-testing]
  gem "capybara"
  gem "selenium-webdriver"

  # Code coverage for Ruby with a powerful configuration library and automatic merging of coverage across test suites
  gem "simplecov", "~> 0.22.0"
  gem "simplecov-rcov", "~> 0.2.3"

  # RuboCop is a Ruby code style checking and code formatting tool
  gem "rubocop", "~> 1.26", require: false
  gem "rubocop-checkstyle_formatter", require: false
  gem "rubocop-rails", "~> 2.14.0", require: false

  # factory_bot_rails provides integration between factory_bot and rails 5.0 or newer
  gem "factory_bot_rails"

  # Extracting `assigns` and `assert_template` from ActionDispatch.
  gem "rails-controller-testing"

  # rspec-rails is a testing framework for Rails 5+.
  gem "rspec-rails", "~> 6.0.0"
  gem "rspec-core"
end
