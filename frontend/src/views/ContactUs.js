import { React, useState } from 'react';
import { Button as ModalButton, Modal } from 'react-bootstrap';

import contactUsImg from '../assets/images/contact-us-img.jpg';

import api from '../services/api';
import Form from '../components/Form';
import Input from '../components/Input';
import TextArea from '../components/TextArea';

import { ContactUsStyled } from './ContactUsStyle';

const ContactUs = props => {

    const [errorMsgs, setErrorMsgs] = useState([]);
    const [emptyFields, setEmptyFields] = useState(true);
    const [wrongEmail, setWrongEmail] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        description: ""
    });

    const handleFieldsChange = async e => {
        
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (e.target.getAttribute('name') === "name") {
            if (!e.target.value) {
                setEmptyFields(true);
                return;
            } else {
                setContactInfo({ ...contactInfo, 'name': e.target.value });
            }
        } else {
            if (e.target.getAttribute('name') === "description") {
                if (!e.target.value) {
                    setEmptyFields(true);
                    return;
                } else {
                    setContactInfo({ ...contactInfo, 'description': e.target.value });
                }
            } else {
                if (!e.target.value) {
                    setEmptyFields(true);
                    return;
                } else {
                    setEmptyFields(false);
                    if ( !re.test(e.target.value) ) {
                        setWrongEmail(true);
                        return;
                    } else {
                        setContactInfo({ ...contactInfo, 'email': e.target.value });
                        setWrongEmail(false);
                    }
                }
            }
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const sendContact = async ( contactInfo ) => 
            api.post('/contacts', { contact: contactInfo })
        
        if (emptyFields || wrongEmail) {
            handleShow();
        } else {
            handleShow();
            await sendContact(contactInfo)
                .catch(errors => setErrorMsgs(errors.response.data.errors));
        }
    }

    return (
        <ContactUsStyled>
            <img src={contactUsImg} alt="imagem" />
            <div>
                <h1>FALE CONOSCO</h1>
                <h2>Envie-nos uma mensagem de cão-tato</h2>
                <Form onSubmit={handleSubmit} submitBtnTxt='ENVIAR'> 
                    <div id="contactContext">
                        <Input onChange={handleFieldsChange}
                            type="text" name="name" label="Nome"/>
                        <Input onChange={handleFieldsChange}
                            type="email" name="email" label="Email" />
                    </div>
                    <TextArea onChange={handleFieldsChange}
                        name="description" text="Digite aqui sua meow-sagem..." label="Mensagem" />
                </Form>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    { (emptyFields || wrongEmail)
                        ? <Modal.Title>AVISO!</Modal.Title>
                        : <Modal.Title>Mensagem enviada!</Modal.Title>
                    }
                </Modal.Header>
                {emptyFields 
                    ? <Modal.Body>Todos os campos devem ser preenchidos corretamente!</Modal.Body>
                    : wrongEmail 
                        ? <Modal.Body>Email inválido!</Modal.Body>      
                        : <Modal.Body>
                            <p>Em breve, você receberá um e-mail confirmando o recebimento de sua mensagem!</p>
                            <p>Obrigada!</p>
                        </Modal.Body>   
                }
                <Modal.Footer>
                    { (emptyFields || wrongEmail)
                        ? <ModalButton variant="secondary" onClick={handleClose}>
                            Close
                        </ModalButton>
                        : <ModalButton variant="secondary" href="/home">
                            Close
                        </ModalButton>
                    }
                </Modal.Footer>
            </Modal>
            
        </ContactUsStyled>
    )
}

export default ContactUs;