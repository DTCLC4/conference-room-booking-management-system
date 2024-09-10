source 'https://rubygems.org'

ruby '3.0.2'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 7.1.4'

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '>= 5.0'

# ActiveModel::Serializers allows you to generate your JSON in an object-oriented and convention-driven manner.
gem 'active_model_serializers', '~> 0.10.14'

# Middleware that will make Rack-based apps CORS compatible. Fork the project here: https://github.com/cyu/rack-cors
gem 'rack-cors', '~> 2.0', '>= 2.0.2'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Faker, a port of Data::Faker from Perl, is used to easily generate fake data: names, addresses, phone numbers, etc.
gem 'faker', '~> 3.2'

# Autoload dotenv in Rails.
gem 'dotenv-rails', '~> 2.1', '>= 2.1.1'

# Byebug is a Ruby debugger.
gem 'byebug', '~> 11.1', '>= 11.1.3'

# Flexible authentication solution for Rails with Warden
gem 'devise'

gem 'devise-jwt'

gem 'jsonapi-serializer'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '>= 4.0.1'

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem 'kredis'

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem 'bcrypt', '~> 3.1.7'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[ mswin mswin64 mingw x64_mingw jruby ]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem 'image_processing', '~> 1.2'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin Ajax possible
# gem 'rack-cors'

group :development, :test do
  gem 'rubocop', '~> 1.26', require: false
  gem 'rubocop-checkstyle_formatter', require: false
  gem 'rubocop-rails', '~> 2.14.0', require: false
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: [:mri, :mswin, :mswin64, :mingw, :x64_mingw]

   # For writing and running tests
   gem 'rspec-rails', '~> 5.0'

   # For creating test data
   gem 'factory_bot_rails'

   # For cleaning the database between tests
   gem 'database_cleaner-active_record'

   # For easier model testing
   gem 'shoulda-matchers', '~> 5.0'

   # Rcov style formatter for SimpleCov
   gem 'simplecov-rcov'
   gem 'simplecov'
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem 'spring'
end
