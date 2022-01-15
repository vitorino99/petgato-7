import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Loading from '../Loading';
import Timestamp from '../Timestamp';

import { StyledPopularPosts } from "./style";

const PopularPosts = ({postsLimit}) => {

    const [mostViewedPosts, setMostViewedPosts] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchMostViewedPosts() {
            try {  
                const response = await api.get('/posts/?sort=views');
                const fetchedPosts = response.data;
                setMostViewedPosts(fetchedPosts);
            } catch (error) {
                setError(error.response);
            }
            
        }
        fetchMostViewedPosts();
        
    }, []);

    return (
        <StyledPopularPosts id="mostViewedPosts">
            <h2>Publicações mais populares:</h2>                       
            {mostViewedPosts.length === 0 ? 
            <Loading isPink /> 
            : (mostViewedPosts.slice(0,postsLimit).map(post => (
                <div id="postResume" key={post.id}>
                    <Link id="postTitle" to={"/posts/" + post.id}>
                        <h3>{post.name}</h3>
                    </Link>   
                    <p id="postDescription">{post.content}</p>
                    <Timestamp 
                      publishedOn 
                      timestamp={post.created_at} 
                      style={{
                        margin: '0 0 10px 0',
                        opacity: '.5',
                      }}
                    />
                    <hr id="horizontalLine" />
                </div>
            )))}
        </StyledPopularPosts>
    )
}

export default PopularPosts