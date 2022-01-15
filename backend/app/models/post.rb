class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
    has_many :tagposts, dependent: :destroy
    has_many :tags, through: :tagposts
    has_many :likes, dependent: :destroy
    
    validates :name, presence: true
    validates :views, presence: true

    has_one_attached :banner_image
    
    has_one :action_text_rich_text, class_name: 'ActionText::RichText', as: :record
    has_rich_text :content

end
