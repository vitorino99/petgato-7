json.array! @tagposts do |tagpost|
  json.id tagpost.id
  json.postId tagpost.post_id
  json.tagId tagpost.tag_id
  json.tagName tagpost.tag.name
  json.tagDesc tagpost.tag.description
end