json.name @post.name
json.views @post.views
json.content @post.content.body
json.banner_image rails_blob_url(@post.banner_image) if @post.banner_image.attached?
json.created_at @post.created_at
json.updated_at @post.updated_at