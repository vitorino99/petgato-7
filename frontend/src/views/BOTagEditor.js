import { useState, useEffect } from "react";
import { useHistory, useParams, useLocation  } from "react-router";
import { Button as ModalButton, Modal } from 'react-bootstrap';

import { Container } from "./EditPostStyled";
import Input from '../components/Input';
import Button from '../components/Button';

import api from '../services/api'
import Loading from "../components/Loading";



const BOTagEditor = () => {

    const { id } = useParams();
      
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if ( location.pathname === '/backoffice/edit-tag/' + id ) {
            api.get('/tags/' + id)
                .then(res => res.data)
                .then(data => {
                    setName(data.name);
                    setDescription(data.description);
                })
        }
    }, [id, location.pathname]);
    
    const handleSubmit = e => {
        e.preventDefault();

        if ( !name || !description ) {
            handleShow();
            return;
        }

        const data = new FormData();

        data.append('name', name);
        data.append('description', description);
        
        const token = localStorage.getItem('token');

        setIsLoading(true)
        if ( location.pathname === '/backoffice/edit-tag/' + id ) {
            api.put('/tags/' + id, data, {
                    headers: {
                        Authorization: token,
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(() => history.push('/backoffice/manage-tags'))
                .finally(() => setIsLoading(false))
        } else {
            api.post('/tags', data, {
                headers: {
                    Authorization: token,
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(() => history.push('/backoffice/manage-tags'))
            .finally(() => setIsLoading(false))
        }
    }


    return (
        <>
            <Container
                style={{
                    margin: '30px 90px',
                    flexGrow: '1'
                }}
            >
                <form onSubmit={handleSubmit}>
                    <div 
                        className="title"
                        style={{
                            margin: '15px 0 35px 0'
                        }}    
                    >
                        <h2>BACKOFFICE</h2>
                        { ( location.pathname === '/backoffice/edit-tag/' + id )
                            ? <h1>Editar Tag</h1>
                            : <h1>Nova Tag</h1>
                        }
                    </div>
            
                    <div className="tag-inputs">
                        <Input
                            label='Nome da Tag'
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            style={{
                                width: '75%',
                                height: '65px',
                                padding: '20px',
                                fontSize: '14pt',
                                marginBottom: '15px'
                            }}
                        />

                        <Input
                            label='Descrição da Tag'
                            name='description'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            style={{
                                width: '75%',
                                height: '65px',
                                padding: '20px',
                                fontSize: '14pt',
                                marginBottom: '15px'
                            }}
                        />
                    </div>
        
                    <div 
                        className="final-btns"
                        style={{
                            margin: '50px 0'
                        }}
                    >
                        <Button
                            fontSize='16px'
                            padding='15px 25px'
                            isPink
                            type='submit'
                        >
                          {isLoading ? <Loading /> : 'SALVAR' }
                        </Button>
        
                        <Button
                            fontSize='16px'
                            padding='15px 25px'
                            onClick={() => history.push('/backoffice/manage-tags')}
                        >
                            VOLTAR
                        </Button>
                    </div>
                </form>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>AVISO!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Todos os campos devem ser preenchidos!</Modal.Body>
                <Modal.Footer>
                    <ModalButton variant="secondary" onClick={handleClose}>
                        Close
                    </ModalButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}
  
export default BOTagEditor;