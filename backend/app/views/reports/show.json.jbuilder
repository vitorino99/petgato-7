json.id @report.id
json.created_at @report.created_at
json.updated_at @report.updated_at
if @report.comment
    json.comment do 
        json.comment_id @report.comment.id
        json.comment_user @report.comment.user.name
        json.comment_description @report.comment.description
        json.comment_post @report.comment.post.name
    end
end
if @report.reply
    json.reply do
        json.reply_id @report.reply.id
        json.reply_user @report.reply.user.name
        json.reply_description @report.reply.description
        json.reply_post @report.reply.comment.post.name
    end
end