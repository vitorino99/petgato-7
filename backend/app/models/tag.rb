class Tag < ApplicationRecord
    has_many :tagposts, dependent: :delete_all

    validates :name, presence: true
    validates :description, presence: true
end
