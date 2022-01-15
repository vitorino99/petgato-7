class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  has_many :replies, dependent: :destroy
  has_many :reports, dependent: :destroy

  validates :description, presence: true
end
