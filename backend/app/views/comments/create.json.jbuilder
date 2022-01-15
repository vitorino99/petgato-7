json.id @comment.id
json.photo rails_blob_url(@comment.user.photo) if @comment.user.photo.attached?
json.name @comment.user.name
json.user_id @comment.user.id
json.description @comment.description
json.created_at @comment.created_at
json.updated_at @comment.updated_at
json.replies @comment.replies do |reply|
  json.id reply.id
  json.photo rails_blob_url(reply.user.photo) if reply.user.photo.attached?
  json.name reply.user.name
  json.user_id @reply.user.id
  json.description reply.description
  json.created_at reply.created_at
  json.updated_at reply.updated_at
end
