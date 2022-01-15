import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import api from '../../services/api';

const ReportModal = (props) => {

    const token = localStorage.getItem('token');

    const [modalShow, setModalShow] = useState(false);
    const [track, setTrack] = useState(1);

    const deleteReport = async reportId => {
        await api.delete('/reports/' + reportId, {
                headers: {
                    Authorization: token,
                }
            })
            .then(props.onHide)
            .then(setTrack(1))
            .then(setModalShow(true));
    }

    const deleteComment = async commentId => {
        await api.delete('/comments/' + commentId, {
                headers: {
                    Authorization: token,
                }
            })
            .then(props.onHide)
            .then(setTrack(2))
            .then(setModalShow(true));
    }

    const deleteReply = async replyId => {
        await api.delete('/replies/' + replyId, {
                headers: {
                    Authorization: token,
                }
            })
            .then(props.onHide)
            .then(setTrack(3))
            .then(setModalShow(true));
    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    { (props.report.reply)
                        ? <Modal.Title id="contained-modal-title-vcenter">
                            Commentário de {props.report.reply.reply_user}
                        </Modal.Title>
                        : (props.report.comment)
                            && <Modal.Title id="contained-modal-title-vcenter">
                                Comentário de {props.report.comment.comment_user}
                            </Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    { (props.report.reply)
                        ? <p>"{props.report.reply.reply_description}"</p>
                        : (props.report.comment) 
                            && <p>"{props.report.comment.comment_description}"</p>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        size="lg"
                        style={{
                            background: 'none',
                            color: '#444143',
                            borderColor: '#444143'
                        }}
                        onClick={e => {
                            deleteReport(props.report.id);
                            props.onReportsChange(props.report.id);
                        }}
                    >
                        Ignorar denúncia
                    </Button>
                    { (props.report.reply)
                        ? <Button size="lg" onClick={e => {
                                deleteReply(props.report.reply.reply_id);
                                props.onReportsChange(props.report.id);
                            }}>
                                Apagar comentário
                            </Button>
                        : (props.report.comment)
                            && <Button size="lg" onClick={e => {
                                    deleteComment(props.report.comment.comment_id);
                                    props.onReportsChange(props.report.id);
                                }}>
                                    Apagar comentário
                                </Button>
                    }
                </Modal.Footer>
            </Modal>
            <Modal show={modalShow} onHide={() => setModalShow(false)}>
                { (track === 3)
                    ? <Modal.Body>Resposta excluída com sucesso!</Modal.Body>
                    : (track === 2)
                        ? <Modal.Body>Comentário excluído com sucesso!</Modal.Body>
                        : (track === 1)
                            && <Modal.Body>Denúncia ignorada e excluída com sucesso!</Modal.Body>
                }
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReportModal;