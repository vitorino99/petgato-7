json.name @user.name
json.email @user.email
json.password @user.password_digest
json.is_admin @user.is_admin
json.photo rails_blob_url(@user.photo) if @user.photo.attached?
json.created_at @user.created_at
json.updated_at @user.updated_at