import { useContext, useEffect, useState } from 'react';
import { Modal as BSModal, Button as BSButton } from 'react-bootstrap';

import Button from '../Button';
import { AuthContext } from '../AuthProvider';

import { FormStyled } from './styles';
import TextInput from '../TextInput';
import Comment from '../Comment';
import Loading from '../Loading';
import api from '../../services/api';
import { useParams } from 'react-router';

const CommentsSection = ({ comments }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [postComments, setPostComments] = useState([]);
  const [loggedModal, setLoggedModal] = useState(false);
  const { id: post_id } = useParams();

  const [user] = useContext(AuthContext);

  useEffect(() => setPostComments(comments), [comments]);

  const handleCommentSubmit = async e => {
    e.preventDefault();

    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    if (!user.signed)
      return console.log('não ta logadin');

    const comment = {
      description,
      user_id,
      post_id
    };

    setIsLoading(true)
    await api.post('/comments', comment, { headers: { Authorization: token } })
      .then(({ data }) => setPostComments([...postComments, data]))
      .then(() => setDescription(''))
      .finally(() => setIsLoading(false))
  }

  const onCommentChange = (flag, data, commentId) => {
    if (!flag)
      setPostComments(postComments => postComments.map(postComment => {
        if (postComment.id === commentId)
          return data;
        return postComment;
      }))
    else
      setPostComments(postComments => postComments.filter(({ id }) => id !== commentId));
  }

  return (
    <>
      <FormStyled onSubmit={e => {
        if (user.signed) {        
          handleCommentSubmit(e)
        } else {
          e.preventDefault();
          setLoggedModal(true);
        }
      }}>
        <TextInput
          label='Gostou? Deixe um comentário abaixo:'
          placeHolder='Solta o verbo, meu consagrado...'
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{
            resize: 'none',
            overflow: 'auto'
          }}
        />

        <Button
          type='submit'
          padding='10px 30px'
          style={{ margin: '10px 0 0 auto' }}
        >
          {isLoading ? <Loading isPink /> : "ENVIAR"}
        </Button>
      </FormStyled>

      {postComments.length === 0 ?
        <Loading isPink />
        : (postComments.map(comment =>
          <Comment
            key={comment.id}
            comment={comment}
            replies={comment.replies}
            onCommentChange={onCommentChange}
            postId={post_id}
          />
        ))}

      <BSModal show={loggedModal} onHide={() => setLoggedModal(false)}> 
        <BSModal.Header closeButton>
            ERRO
        </BSModal.Header>
        <BSModal.Body>Faça login para comentar essa publicação</BSModal.Body>
        <BSModal.Footer>
            <BSButton variant="secondary" onClick={() => setLoggedModal(false)}>
                Close
            </BSButton>
        </BSModal.Footer>
      </BSModal>
    </>
  )
}

export default CommentsSection;