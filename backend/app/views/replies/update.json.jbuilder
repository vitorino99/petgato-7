json.id @reply.id
json.user_id @reply.user.id
json.photo rails_blob_url(@reply.user.photo) if @reply.user.photo.attached?
json.name @reply.user.name
json.description @reply.description
json.created_at @reply.created_at
json.updated_at @reply.updated_at