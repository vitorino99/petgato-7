import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import SearchBox from '../components/SearchBox';
import AboutAuthor from '../components/AboutAuthor';
import PopularPosts from '../components/PopularPosts';
import HomeStyled from './HomePageStyle';
import api from '../services/api';
import PostsDisplay from '../components/PostsDisplay';

const HomePage = props => {

    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filterText, setFilterText] = useState('');
    const [posts, setPosts] = useState([])
    const [, setErrorMsgs] = useState([]);
    const [hasSearch, setHasSearch] = useState(false);
    
    function handleSearchChange (searchedText) {
        setSearchText(searchedText)
    }

    const handleSearch = async e => {
        e.preventDefault();

        setErrorMsgs([]);
        const errors = [];
        if (!searchText) {
            setHasSearch(false);
            return;
        }

        if (errors.length > 0) {
            setErrorMsgs(errors);
        }

        const search = async ( text ) => {
            await api.get('/posts?'.concat('q[name_or_action_text_rich_text_body_or_tags_name_cont]=', text,
                '&commit=Search'))
                .then(res => {
                    const fetchedPosts = res.data;
                    setPosts(fetchedPosts);
                })
        }

        setIsLoading(true) 
        await search(searchText)
            .then(setFilterText(searchText))
            .then(setHasSearch(true))
            .catch(errors => setErrorMsgs(errors.response.data.errors))
            .finally(() => setIsLoading(false))

    }

    useEffect(() => {
        async function fetchRecentPosts() {
            if (!hasSearch) {
                setIsLoading(true)
                try {  
                    const response = await api.get('/posts/?sort=created_at');
                    const fetchedPosts = response.data;
                    setPosts(fetchedPosts);
                } catch (error) {
                    setErrorMsgs(error.response);
                } finally { 
                    setIsLoading(false) 
                }
            }
        }
        fetchRecentPosts();
    }, [hasSearch]);

    return (
        <HomeStyled>
            <div id="lColumn">
                <SearchBox id="searchBox" onSubmit={handleSearch} onSearchChange={handleSearchChange} />
                <AboutAuthor />
                <hr className="horizontalLine" />
                <PopularPosts postsLimit="3" />    
                <Link id="allPostsLink" to='/home'>  
                    <button id="allPosts" type="button">VER TODAS</button>
                </Link>
            </div>
            { hasSearch
                ? <PostsDisplay isLoading={isLoading} flag={hasSearch} text={filterText} posts={posts} />
                : <PostsDisplay isLoading={isLoading} flag={false} text={null} posts={posts} />
            }     
        </HomeStyled>
    );
};

export default HomePage;