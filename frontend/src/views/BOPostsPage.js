// backoffice/posts

import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Table from '../components/Table'
import api from '../services/api'

import { Container, TitleContainer } from "./BOPostsStyle"


const BOPostsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([])

  const history = useHistory()

  const dataColumns = ['#', 'Data', 'Título', 'Tags', 'empty1', 'empty2']

  const deletePost = id =>
    api.delete('/posts/' + id,
      { headers: { Authorization: localStorage.getItem('token') } })
      .then(() => setPosts(posts => posts.filter(post => post.id !== id)))



  useEffect(() => {
    const treatPost = post => {
      const formatIntNumber = num => ("0" + num).slice(-2)
      const limitString = (str, limit) => str.substring(0, limit) + (str.length > 25 ? '...' : '')

      const newData = {}
      newData['id'] = post.id
      newData['#'] = post.id

      const date = new Date(post.updated_at)
      newData['Data'] = `${formatIntNumber(date.getDate())}/${formatIntNumber(date.getMonth())}/${date.getFullYear()}`

      newData['Título'] = <Link to={'/posts/' + post.id}>
        {limitString(post.name, 25)}
      </Link>

      newData['Tags'] = limitString(post.tags.map(tag => tag.name).join(', '), 25)

      newData['empty1'] = <Link to={'/edit-post/' + post.id}>Editar</Link>
      newData['empty2'] = <button onClick={() => deletePost(post.id)}>Apagar</button>
      return newData
    }

    setIsLoading(true)
    api.get('/posts/?sort=id')
      .then(res => res.data)
      .then(posts => posts.map(post => treatPost(post)))
      .then(posts => setPosts(posts))
      .finally(() => setIsLoading(false))
  }, [])


  return (
    <Container>
      <TitleContainer>
        <p className="title">BACKOFFICE</p>
        <p className="subtitle">Todas as publicações</p>
      </TitleContainer>

      <Table columns={dataColumns} linesData={posts} />
      {isLoading && <Loading isPink style={{ display: 'block' }} />}

      <Button
        fontSize='16px'
        padding='10px 20px'
        onClick={() => history.push('/create-post')}
      >NOVA PUBLICAÇÃO</Button>
    </Container>
  )
}

export default BOPostsPage