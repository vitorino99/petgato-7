import { useContext, useEffect, useState } from 'react'
import dotsImg from '../../assets/icons/feather-more-horizontal.svg'
import { Button as BSButton, Modal as BSModal } from 'react-bootstrap'

import Button from '../Button'
import Timestamp from '../Timestamp'
import { AuthContext } from '../AuthProvider'
import { GrClose } from 'react-icons/gr';

import { FormStyled } from '../CommentsSection/styles'
import { ButtonItem } from '../Header/styles';
import { CommentStyled, CloseButton } from './styles'
import TextInput from '../TextInput';
import Reply from '../Reply';
import Modal from '../Modal';
import api from '../../services/api'
import ReportButton from '../ReportButton';
import { REDReply as REDComment } from '../Reply/styles';
import Loading from '../Loading'

const Comment = ({ comment, replies, onCommentChange, postId }) => {
  
    const [editCommentLoading, setEditCommentLoading] = useState(false);
    const [sendReplyLoading, setSendReplyLoading] = useState(false);
    const [replyArea, setReplyArea] = useState(false);
    const [isCommentEdit, setIsCommentEdit] = useState(false);
    const [commentReplies, setCommentReplies] = useState([]);
    const [description, setDescription] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loggedModal, setLoggedModal] = useState(false);

    const comment_id = comment.id;
  
    const [user] = useContext(AuthContext);
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
  
    useEffect(() => setCommentReplies(replies), [replies]);
  
    const onReplyChange = ( flag, data, replyId ) => {
        if ( !flag )      
            setCommentReplies( commentReplies => commentReplies.map( commentReply => {
                if (commentReply.id === replyId)
                    return data;
                return commentReply;
            }))
        else
            setCommentReplies( commentReplies => commentReplies.filter( ({id}) => id !== replyId ));
    }
  
    const handleReplySubmit = async e => {
        e.preventDefault();
    
        if (!user.signed) return console.log('não ta logadin');
        
        const reply = { description, user_id, comment_id };
        
        setSendReplyLoading(true)
        await api.post('/replies', reply, { headers: { Authorization: token } })
          .then(({ data }) => setCommentReplies([...commentReplies, data]))
          .then(() => setDescription(''))
          .finally(() => {
            setSendReplyLoading(false)
            setReplyArea(false);
          })
    }

    const deleteComment = async e => {
        e.preventDefault();
    
        if (!user.signed) return console.log('não ta logadin');
      
        await api.delete('/comments/'+(comment.id), { headers: { Authorization: token } })
          .then(() => onCommentChange( true, undefined, comment.id ));
    
      }
    
    const editComment = async e => {
        e.preventDefault();
    
        if (!user.signed) return console.log('não ta logadin');
            
        const newComment = { description, postId, user_id };
    
        setEditCommentLoading(true)
        await api.put('/comments/' + (comment.id), newComment, { headers: { Authorization: token } })
          .then(({ data }) => onCommentChange(false, data, comment.id))
          .finally(() => {
            setEditCommentLoading(false)
            setIsCommentEdit(false);
          })
    }
  
    return (
        <>
            <CommentStyled>
                <img
                    src={comment.photo}
                    alt="Foto do usuário"
                    className="userImg"
                    style={{ width: '100px', height: '100px' }}
                />
        
                <div className="texts">
                    <div className="name">
                        <h3>{comment.name}</h3>
                        <REDComment>
                            <ReportButton
                                reply_id={undefined}
                                comment_id={comment_id}
                            />
                            { ((comment.user_id == user_id) || (user.isAdmin))
                                && <ButtonItem
                                    className='link-menu'
                                    style={{
                                        position: 'relative',

                                    }}
                                    onClick={() => setShowModal(show => !show)}
                                >
                                    
                                    <img src={dotsImg} alt="Opções" />
                                    <Modal showModal={showModal}>
                                        <li className='li-link' onClick={e => setIsCommentEdit(true)}>Editar</li>
                                        <li className='li-link' onClick={deleteComment}>Excluir</li>
                                    </Modal>
                                </ButtonItem>
                            }
                        </REDComment>

                    </div>
                    <Timestamp hasTime timestamp={comment.created_at} />
                    { !isCommentEdit
                        ? <p className="description">{comment.description}</p>
                        : <FormStyled onSubmit={editComment}>
                            <TextInput
                                defaultValue={comment.description}
                                onChange={e => setDescription(e.target.value)}
                                style={{ 
                                    resize: 'none',
                                    overflow: 'auto'
                                }}
                            />
                            <CloseButton onClick={e => setIsCommentEdit(false)}><GrClose/></CloseButton>
                            <Button
                                type='submit'
                                padding='10px 30px'
                                style={{ 
                                    margin: '0 0 0 auto',
                                    fontSize: '12pt'
                                }}
                            >
                                {editCommentLoading ? <Loading isPink /> : 'ALTERAR COMENTÁRIO'}
                            </Button>
                        </FormStyled>
                    }
        
                    { commentReplies && commentReplies.map( ( reply, index ) =>
                        <Reply 
                            key={reply.id}
                            reply={reply}
                            commentId={comment.id}
                            onReplyChange={onReplyChange}
                            replyIndex={index}
                        />
                    )}
                
                    { replyArea && 
                        <FormStyled onSubmit={handleReplySubmit}>
                            <TextInput
                                value={description}
                                placeHolder={"Responda para ".concat(comment.name, " ...")}
                                onChange={e => setDescription(e.target.value)}
                                style={{ 
                                    resize: 'none',
                                    overflow: 'auto'
                                }}
                            />
                            <CloseButton 
                                onClick={() => setReplyArea(false)}
                            >
                                <GrClose />
                            </CloseButton>
                            <Button
                                type='submit'
                                padding='10px 30px'
                                style={{ 
                                    margin: '0 0 0 auto',
                                    fontSize: '14pt'
                                }}
                            >
                                {sendReplyLoading ? <Loading isPink /> : 'ENVIAR'}
                            </Button>
                        </FormStyled>
                    }
            
                    <Button
                        onClick={() => {
                            if (user.signed)
                                setReplyArea(true)
                            else
                                setLoggedModal(true)
                        }}
                        padding='5px 15px'
                        fontSize='16px'
                        style={{ margin: '15px 0' }}
                    >
                        RESPONDER
                    </Button>
                </div>
            </CommentStyled>
            <BSModal show={loggedModal} onHide={() => setLoggedModal(false)}>
                <BSModal.Header closeButton>
                    ERRO
                </BSModal.Header>
                <BSModal.Body>Faça login para responder esse comentário</BSModal.Body>
                <BSModal.Footer>
                    <BSButton variant="secondary" onClick={() => setLoggedModal(false)}>
                        Close
                    </BSButton>
                </BSModal.Footer>
            </BSModal>
        </>
    )
}

export default Comment;