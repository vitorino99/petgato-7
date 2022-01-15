class Report < ApplicationRecord
  belongs_to :reply, optional: true
  belongs_to :comment
end
