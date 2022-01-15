class ContactMailer < ApplicationMailer

    def send_contact(contact)
        @contact = contact;
        mail(to: @contact.email, subject: 'PetGatö7 - Mensagem recebida').deliver!
    end

end