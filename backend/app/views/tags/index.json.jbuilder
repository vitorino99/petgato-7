json.array! @tags do |tag|
  json.id tag.id
  json.name tag.name
  json.description tag.description
  json.posts tag.tagposts.count
  json.created_at tag.created_at
  json.updated_at tag.updated_at
end
