class AddOmniauthToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :uid, :string
    add_column :users, :avatar_url, :string
    add_column :users, :full_name, :string
    add_column :users, :provider, :string
  end
end
