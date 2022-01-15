import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import parse from 'html-react-parser'

import goBackImg from '../assets/icons/awesome-chevron-left.svg'
import eyeImg from '../assets/icons/awesome-eye.svg'

import api from '../services/api'

import SearchBox from '../components/SearchBox'
import PopularPosts from '../components/PopularPosts'
import ExploreTags from '../components/ExploreTags'
import CommentsSection from "../components/CommentsSection"
import Timestamp from "../components/Timestamp"
import LikeButton from "../components/LikeButton"
import PostsDisplay from "../components/PostsDisplay"

import { BackButtonStyled, MainStyled, PostContent, PostStyled, SidebarStyled, VerticalLine } from "./PostStyled"
import Loading from "../components/Loading"

const BackButton = () => {
  const history = useHistory()

  return (
    <BackButtonStyled onClick={history.goBack}>
      <img src={goBackImg} alt="Voltar" />VOLTAR
    </BackButtonStyled>
  )
}

const PostPage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [post, setPost] = useState('')
  const [tags, setTags] = useState([])
  const [searchText, setSearchText] = useState('')
  const [, setErrorMsgs] = useState([])
  const [hasSearch, setHasSearch] = useState(false)
  const [posts, setPosts] = useState([])
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setIsLoading(true)
    api.get('/posts/' + id, { headers: { 'Accept': 'application/json' } })
      .then(res => res.data)
      .then(data => setPost(data))
      .then(() => setIsLoading(false))
      .catch(error => console.log('deu merda', error))

    setTags([])
    api.get('/tagposts/' + id)
      .then(res => res.data)
      .then(tagposts => {
        tagposts.map(async ({ tag_id }) =>
          await api.get('/tags/' + tag_id)
            .then(res => setTags(tags => [...tags, res.data]))
        )
      })

  }, [id])


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
          api.get('/posts?'.concat('q[name_or_action_text_rich_text_body_or_tags_name_cont]=', text,
              '&commit=Search'))
              .then(res => {
                  const fetchedPosts = res.data;
                  setPosts(fetchedPosts);
              })
      }

      await search(searchText)
          .then(setFilterText(searchText))
          .then(setHasSearch(true))
          .catch(errors => setErrorMsgs(errors.response.data.errors));

  }


  return (<MainStyled>
    {(!hasSearch)
      ? <PostStyled>
          <BackButton />
          {isLoading ?
            <Loading isPink />
            : (post && (<>
              <h1 className="postTitle">{post.name}</h1>
              <div className="postInfo">
                <Timestamp publishedOn hasTime timestamp={post.created_at} />
                <p className="views">
                  <img src={eyeImg} alt="Visualizações" />
                  {post.views}
                </p>
              </div>

              <img className="bannerImage" src={post.banner_image} alt="Imagem Principal" />

              <PostContent>{parse(post.content)}</PostContent>
            </>))}
          <hr className="horizontalLine" />

          {post.likes &&
            <LikeButton postId={post.id} likes={post.likes} />}

          <CommentsSection comments={post.comments_data ?? []} />
        </PostStyled>
      : <PostsDisplay flag={hasSearch} text={filterText} posts={posts} />
    }

    <VerticalLine />

    <SidebarStyled>
      <SearchBox onSubmit={handleSearch} onSearchChange={handleSearchChange}/>
      <ExploreTags tags={tags} />
      <PopularPosts postsLimit={3} />
    </SidebarStyled>
  </MainStyled>)
}

export default PostPage