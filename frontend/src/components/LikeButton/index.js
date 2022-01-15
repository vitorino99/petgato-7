import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from '../AuthProvider'
import api from '../../services/api';

import { StyledLikeLabel } from "./style";

import likeIcon from '../../assets/icons/awesome-heart.svg';
import noLikeIcon from '../../assets/icons/awesome-heart-1.svg';

const LikeButton = ({ postId, likes }) => {


    const [user] = useContext(AuthContext);

    const [hasLike, setHasLike] = useState(false);
    const [likeId, setLikeId] = useState(0);
    const [likeNo, setLikeNo] = useState(0);
    const [userId, setUserId] = useState(localStorage.getItem('user_id'));
    const [userTk, setUserTk] = useState(localStorage.getItem('token'));  

    useEffect(() => {
        const checkUserLike = () => {
            setHasLike(false);
            for (const elem of likes) {
                if ( parseInt(userId) === parseInt(elem.user_id) ) {
                    setHasLike(true);
                    setLikeId(elem.id);
                }
            }
        }   
        setUserId(localStorage.getItem('user_id'));
        setUserTk(localStorage.getItem('token'));

        api.get('/likes/' + postId)
          .then(res => setLikeNo(res.data.length))

        checkUserLike(); 
    }, [postId, likes, userId])

    const handleLikeButton = async e => {
        e.preventDefault();
        const handleDislike = async () => {
            api.delete('/likes/' + likeId, { headers: { 'Authorization': userTk } });
        }
        const handleLike = async () => {
            api.post('/likes', { post_id: postId, user_id: userId }, { headers: { 'Authorization': userTk } })
                .then(res => setLikeId(res.data.id))
        }
        if (hasLike) {
            await handleDislike()
                .then(setHasLike(false))
                .then(setLikeNo(likeNo => likeNo - 1))
        } else {
            await handleLike()
                .then(setHasLike(true))
                .then(setLikeNo(likeNo => likeNo + 1))
        }
    }

    return (   
        <StyledLikeLabel>
            { user.signed 
                ? <button id="likeButton" type="button" onClick={handleLikeButton}>
                        <img id="likesImg" src={ hasLike ? likeIcon : noLikeIcon } alt="Like Icon" />
                </button>
                : <button id="likeButton" type="button" disabled>
                        <img id="likesImg" src={ hasLike ? likeIcon : noLikeIcon } alt="Like Icon" />
                </button>
            }
            { (useLocation().pathname === "/home")
                ? <p id="likeNo">{likeNo}</p>
                : likeNo === 0 
                    ? <p id="likeTxt">Ninguém curtiu essa publicação ainda.</p> 
                    : (likeNo === 1 && hasLike)
                        ? <p id="likeTxt">Você curtiu essa publicação</p> 
                        : (likeNo === 1 && !hasLike)
                            ? <p id="likeTxt">Uma pessoa curtiu essa publicação</p> 
                            : (likeNo === 2 && hasLike)
                                ? <p id="likeTxt">Você e mais uma pessoa curtiram essa publicação</p>
                                : !hasLike
                                    ? <p id="likeTxt">{likeNo} pessoas curtiram essa publicação</p>
                                    : <p id="likeTxt">Você e outras {likeNo - 1} pessoas curtiram essa publicação</p> 
            }       
        </StyledLikeLabel>
    )
}

export default LikeButton;