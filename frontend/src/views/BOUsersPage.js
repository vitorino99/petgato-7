// backoffice/posts

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Table from '../components/Table'
import api from '../services/api'

import { Container, TitleContainer } from "./BOPostsStyle"


const BOUsersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([])


  const dataColumns = ['Nome', 'Tipo de Usuário', 'Data de Ingresso', 'empty1', 'empty2']

  const deleteUser = id =>
    api.delete('/users/' + id,
      { headers: { Authorization: localStorage.getItem('token') } })
      .then(() => setUsers(users => users.filter(user => user.id !== id)))



  useEffect(() => {
    const treatUser = user => {
      const formatIntNumber = num => ("0" + num).slice(-2)
      const formatDate = (day, month, year) => `${formatIntNumber(day)}/${formatIntNumber(month)}/${year}`

      const newData = {}
      newData['id'] = user.id

      newData['Nome'] = user.name
      newData['Tipo de Usuário'] = user.is_admin ? 'Administrador' : 'Usuário'

      const date = new Date(user.created_at)
      newData['Data de Ingresso'] = formatDate(date.getDate(), date.getMonth(), date.getFullYear())

      newData['empty1'] = <Link to={'/edit-user/' + user.id}>Editar</Link>
      newData['empty2'] = <button onClick={() => deleteUser(user.id)}>Excluir</button>
      return newData
    }

    const id = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')
    setIsLoading(true)
    api.get('/users', { headers: { Authorization: token } })
      .then(res => res.data)
      .then(users => users.filter(user => user.id !== parseInt(id)))
      .then(users => users.map(user => treatUser(user)))
      .then(users => setUsers(users))
      .finally(() => setIsLoading(false))
  }, [])


  return (
    <Container>
      <TitleContainer>
        <p className="title">BACKOFFICE</p>
        <p className="subtitle">Usuários</p>
      </TitleContainer>

      <Table columns={dataColumns} linesData={users} />
      {isLoading && <Loading isPink style={{ display: 'block' }} />}

    </Container>
  )
}

export default BOUsersPage