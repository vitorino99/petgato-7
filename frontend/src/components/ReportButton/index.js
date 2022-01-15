import { useContext, useState } from 'react';
import { BsExclamationTriangle } from "react-icons/bs";
import { Button as ModalButton, Modal } from 'react-bootstrap';

import { AuthContext } from '../AuthProvider';
import api from '../../services/api';

import { StyledReportButton } from './styles';

const ReportButton = ({ reply_id, comment_id }) => {
    
    const [user] = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const createReport = async e => {
        e.preventDefault();
            
        if (!user.signed) return console.log('não ta logadin');
            
        const newReport = {
            reply_id,
            comment_id
        };
    
        await api.post('/reports', newReport, { headers: { Authorization: token } })
            .then(handleShow)

    }

    return (
        <>
            <StyledReportButton onClick={createReport}>
                <BsExclamationTriangle /> Reporte abuso 
            </StyledReportButton>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Denúncia recebida!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Analisaremos sua denúncia e, em breve, tomaremos as medidas cabíveis.</p>
                    <p>Obrigada!</p>
                </Modal.Body>
                <Modal.Footer>
                    <ModalButton variant="secondary" onClick={handleClose}>
                        Close
                    </ModalButton>
                </Modal.Footer>
            </Modal>
        </>
    )
};

export default ReportButton;

