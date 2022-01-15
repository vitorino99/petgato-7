import { useContext, useState, useEffect } from 'react'
import dotsImg from '../../assets/icons/feather-more-horizontal.svg'

import { GrClose } from 'react-icons/gr'

import { FormStyled } from '../CommentsSection/styles';
import { CommentStyled, CloseButton } from '../Comment/styles';
import { ButtonItem } from '../Header/styles';
import Modal from '../Modal';
import TextInput from '../TextInput';
import Button from '../Button';
import Timestamp from '../Timestamp';
import ReportButton from '../ReportButton';
import { REDReply } from './styles';

import { AuthContext } from '../AuthProvider'
import api from '../../services/api'
import Loading from '../Loading';

const Reply = ({ reply, commentId, onReplyChange }) => {

    const [user] = useContext(AuthContext);
  
    const [editReplyLoading, setEditReplyLoading] = useState(false);
    const [isReplyEdit, setIsReplyEdit] = useState(false);
    const [description, setDescription] = useState('');
    const [showModal, setShowModal] = useState(false);

    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');

    useEffect(() => console.log(reply), [reply])
  
    const deleteReply = async e => {
      e.preventDefault();
  
      if (!user.signed) return console.log('não ta logadin');
    
      await api.delete('/replies/'+(reply.id), { headers: { Authorization: token } })
        .then(() => onReplyChange( true, undefined, reply.id ));
  
    }
  
    const editReply = async e => {
        e.preventDefault();
        
        if (!user.signed) return console.log('não ta logadin');
        
        const newReply = { description, user_id, comment_id: commentId };
    
        setEditReplyLoading(true)
        await api.put('/replies/'+(reply.id), newReply, { headers: { Authorization: token } })
            .then(({ data }) => onReplyChange( false, data, reply.id ))
            .finally(() => {
              setEditReplyLoading(false)
              setIsReplyEdit(false);
            })
      
    }

    return (
        <CommentStyled>
            <img
                src={reply.photo}
                alt="Foto do usuário"
                className="userImg"
                style={{ width: '100px', height: '100px' }}
            />
    
            <div className="texts">
                <div className="name">
                    <h3>{reply.name}</h3>
                    <REDReply>
                        <ReportButton
                            reply_id={reply.id}
                            comment_id={commentId}
                        />
                        {((reply.user_id === parseInt(user_id)) || (user.isAdmin))
                            && <ButtonItem
                                className='link-menu'
                                style={{
                                    position: 'relative',

                                }}
                                onClick={() => setShowModal(show => !show)}
                            >
                            
                                <img src={dotsImg} alt="Opções" />
                                <Modal showModal={showModal}>
                                    <li className='li-link' onClick={e => setIsReplyEdit(true)}>Editar</li>
                                    <li className='li-link' onClick={deleteReply}>Excluir</li>
                                </Modal>
                            </ButtonItem>
                        }
                    </REDReply>
                    {/* <img src={dotsImg} alt="Opções" /> */}
                </div>
                <Timestamp hasTime timestamp={reply.created_at} />
                { !isReplyEdit
                    ? <p className="description">{reply.description}</p> 
                    : <FormStyled onSubmit={editReply}>
                        <TextInput
                            defaultValue={reply.description}
                            onChange={e => setDescription(e.target.value)}
                            style={{ 
                                resize: 'none',
                                overflow: 'auto'
                            }}
                        />
                        <CloseButton
                            onClick={e => setIsReplyEdit(false)}
                            style={{ left: '96%' }}
                        >
                            <GrClose />
                        </CloseButton>
                        <Button
                            type='submit'
                            padding='10px 30px'
                            style={{ 
                                margin: '0 0 0 auto',
                                fontSize: '12pt'
                            }}
                        >
                            {editReplyLoading ? <Loading isPink /> : 'ALTERAR COMENTÁRIO'}
                        </Button>
                    </FormStyled>
                }
            </div>
        </CommentStyled>
    )
}

export default Reply;