class UserMailer < ApplicationMailer
  def recover_password(user)
    @user = user
    mail(to: @user.email, subject: "[ALTERAR MINHA SENHA]")
  end
  def reset_password_email(user)
    @user = user
    mail(to: @user.email, subject: "[NOVA SENHA]")
  end
end