import PostResume from "../PostResume";
import { StyledPostsDisplay } from './style';
import Loading from '../Loading';

const PostsDisplay = ({ flag, text, posts, isLoading }) => {
    
    return ( 
        <StyledPostsDisplay>
            { flag
                ? <span id="hasSearch">
                    <h1 id="searchResultH">Mostrando resultados para: </h1>
                    <p id="searchText">{text}</p>
                </span>
                : <span id="noSearch">
                    <h1 id="homeH">Miau!</h1>
                    <p>Seja bem-vinda(o) ao blog PetGatô! Confira nosso conteúdo mais recente:</p>
                </span>
            }
            {isLoading ? 
              <Loading isPink /> 
              : (posts.slice(0,4).map(post => (
                  <PostResume 
                      key={post.id}
                      tbId={post.id}
                      name={post.name}
                      content={post.content}
                      img={post.banner_image}
                      views={post.views}
                      tags={post.tags}
                      likes={post.likes}
                      comments={post.comments}
                  />
              )))
            }
            <button id="olderPosts" type="button">PUBLICAÇÕES ANTERIORES</button>
        </StyledPostsDisplay>
    )
}

export default PostsDisplay;