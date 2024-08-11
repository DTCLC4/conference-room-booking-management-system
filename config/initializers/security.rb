# config/initializers/security.rb
Rails.application.config.action_dispatch.default_headers.merge!(
  'Cross-Origin-Opener-Policy' => 'same-origin'
)
