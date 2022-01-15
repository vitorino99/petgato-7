import { Link } from 'react-router-dom';

import { StyledPostResume } from "./style";
import LikeButton from '../LikeButton';

import commentIcon from '../../assets/icons/awesome-comment-alt.svg';
import viewIcon from '../../assets/icons/awesome-eye.svg';

const PostResume = ({tbId, name, content, img, views, tags, likes, comments}) => {
    return (
        
        <StyledPostResume>
            <Link id="postImg" to={"/posts/" + tbId}>
                <img src={img} alt="Dog legs" />
            </Link>
            <div id="postInfo">
                <div id="tagsBox">
                    <p id="tagHeader">Tags:</p>
                    {tags.map(tag => <a key={tag.id} className="tag" href="/">{tag.name}</a>)}
                </div>
                <Link id="postTitle" to={"/posts/" + tbId}>
                    <h2>{name}</h2>
                </Link>                
                <p id="postDescription">{content}</p>
                <div id="postControl">
                    <Link to={"/posts/" + tbId}>
                        <button id="readMore" type="button">LEIA MAIS</button>
                    </Link>
                    <LikeButton postId={tbId} likes={likes} />
                    <div id="postComment">
                        <button className="postInteraction" type="button">
                            <img className="postStatic" src={commentIcon} alt="Comment Icon" />
                        </button>
                        <p className="postNumbers">{comments}</p>
                    </div>
                    <div id="postViews">
                        <img className="postStatic" src={viewIcon} alt="Views Icon" />
                        <p className="postNumbers">{views}</p>
                    </div>
                </div>
            </div>
        </StyledPostResume>
    )
}

export default PostResume;