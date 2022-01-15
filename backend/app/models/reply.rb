class Reply < ApplicationRecord
  belongs_to :user
  belongs_to :comment

  has_many :reports, dependent: :destroy

  validates :description, presence: true
end
