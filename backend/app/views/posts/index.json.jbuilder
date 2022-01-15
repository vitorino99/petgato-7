json.array! @posts do |post|
  json.id post.id
  json.name post.name
  json.views post.views
  json.content post.content.body
  json.banner_image rails_blob_url(post.banner_image) if post.banner_image.attached?
  json.created_at post.created_at
  json.likes post.likes
  json.comments post.comments.count
  json.tags post.tags
  json.updated_at post.updated_at

end