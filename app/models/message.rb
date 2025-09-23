class Message < ApplicationRecord
  belongs_to :user
  validates :body, presence: true, length: { maximum: 500 }

  scope :custtom_display, -> { order(:created_at).limit(20) }
end
