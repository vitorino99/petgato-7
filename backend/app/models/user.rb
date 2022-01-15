class User < ApplicationRecord
  
  has_many :replies, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy

  has_secure_password
  
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, 
    format: { with: URI::MailTo::EMAIL_REGEXP, message: 'inválido' }
  validates :password, 
    length: { minimum: 8, message: 'precisa ser maior ou igual à 8 caracteres' }, 
    if: -> { new_record? || !password.nil? }
  
  validates_inclusion_of :is_admin, in: [true, false]
  
  has_one_attached :photo

  def generate_password_token!
    self.reset_password_token = generate_token
    self.reset_password_sent_at = Time.now.utc
    save!
  end

  def password_token_valid?
    (self.reset_password_sent_at + 4.hours) > Time.now.utc
  end

  def reset_password!(password)
    self.reset_password_token = nil
    self.password = password
    save!
  end

  private

  def generate_token
    SecureRandom.hex(10)
  end
end
