source "https://rubygems.org"

ruby "3.0.2"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.2"

# Autoload dotenv in Rails.
gem "dotenv-rails", "~> 2.1", ">= 2.1.1"

# Use webpack to manage app-like JavaScript modules in Rails
gem "webpacker"

# Provides the generator settings required for Rails to use Slim
gem "slim", "~> 5.2", ">= 5.2.1"
gem "slim-rails", "~> 3.6", ">= 3.6.3"

# A normaliser/beautifier for HTML that also understands embedded Ruby.
gem "htmlbeautifier", "~> 1.3", ">= 1.3.1"

# IDE tools for code analysis and autocompletion
gem "solargraph"

# Flexible authentication solution for Rails with Warden
gem "devise", "~> 4.9", ">= 4.9.4"

# A set of common locale data and translations to internationalize and/or localize your Rails applications.
gem "rails-i18n", "~> 7.0", ">= 7.0.8"

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem "sprockets-rails"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"

# Use the Puma web server [https://github.com/puma/puma]
gem "puma", ">= 5.0"

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem "importmap-rails"

# Hotwire"s SPA-like page accelerator [https://turbo.hotwired.dev]
gem "turbo-rails"

# Hotwire"s modest JavaScript framework [https://stimulus.hotwired.dev]
gem "stimulus-rails"

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem "jbuilder"

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mswin, :mswin64, :mingw, :x64_mingw, :jruby]

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: [:mswin, :mswin64, :mingw, :x64_mingw, :jruby]
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem "web-console"
  # Guard is a command line tool to easily handle events on file system modifications
  gem "guard"
  gem "guard-livereload", require: false
  gem "rack-livereload"
  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"

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
  gem "rspec-rails", "~> 4.0.1"
end
