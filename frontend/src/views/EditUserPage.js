import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import Select from "../components/Select"
import api from "../services/api"
import { TitleContainer } from "./BOPostsStyle"
import { Container } from "./EditUserStyle"


const EditUserPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const [user, setUser] = useState({})

  useEffect(() => {
    const formatIntNumber = num => ("0" + num).slice(-2)
    const formatDate = (day, month, year) => `${formatIntNumber(day)}/${formatIntNumber(month)}/${year}`

    const token = localStorage.getItem('token')
    api.get('/users/' + id, { headers: { Authorization: token } })
      .then(res => {
        const date = new Date(res.data.created_at)
        res.data.created_at = formatDate(date.getDate(), date.getMonth(), date.getFullYear())
        const { name, email, created_at, is_admin } = res.data
        const newData = { name, email, created_at, is_admin }
        setUser(newData)
      })
  }, [id])


  const submitHandler = e => {
    e.preventDefault()
    const { is_admin, name } = user
    const token = localStorage.getItem('token')

    api.put('/users/' + id, { is_admin, name }, { headers: { Authorization: token } })
      .then(res => history.goBack())
  }

  return (<Container>
    <TitleContainer>
      <p className="title">BACKOFFICE</p>
      <p className="subtitle">Editar Usuário</p>
    </TitleContainer>

    <form onSubmit={submitHandler}>

      <div className="inputContainer">
        <Input
          type='text'
          label='Nome'
          name='Nome'
          value={user.name}
          onChange={e => setUser(user => ({ ...user, name: e.target.value }))}
        />
        <Input
          defaultValue={user.email}
          disabled
          type='email'
          label='Email'
          name='Email'
          onChange={() => { }}
        />
        <Select
          label='Tipo de Usuário'
          name='user-type'
          value={user.is_admin ? 'Administrador' : 'Usuário'}
          options={[
            { value: 'Administrador' },
            { value: 'Usuário' }
          ]}
          onChange={e => setUser(user =>
            ({ ...user, is_admin: e.target.value === 'Administrador' })
          )}
        />
        <Input
          defaultValue={user.created_at}
          disabled
          type='text'
          label='Data de Ingresso'
          name='created_at'
          onChange={() => { }}
        />
      </div>


      <div className="final-btns">
        <Button
          fontSize='16px'
          padding='15px 25px'
          isPink
          type='submit'
        >SALVAR</Button>

        <Button
          fontSize='16px'
          padding='15px 25px'
          onClick={() => history.push('/backoffice/users')}
        >VOLTAR</Button>
      </div>
    </form>
  </Container>)
}

export default EditUserPage