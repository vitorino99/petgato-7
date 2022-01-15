
import { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import cadastroImg from '../assets/Cadastro.jpg'
import logoImg from '../assets/gatinho_petgato.svg'
import AskLink from '../components/AskLink'
import { AuthContext } from '../components/AuthProvider'
import Form from '../components/Form'
import Input from '../components/Input'
import { MainStyled } from './SignUpStyle'

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [errorMsgs, setErrorMsgs] = useState([])

  const [, , , signup] = useContext(AuthContext)

  const history = useHistory()


  const handleSignup = async e => {
    e.preventDefault()

    setErrorMsgs([])
    const errors = []
    if (!name || !email || !password || !passwordConfirm)
      errors.push('Há campos que precisam ser preenchidos.')
    if (password !== passwordConfirm)
      errors.push('As senhas estão diferentes.')

    if (errors.length > 0) {
      setErrorMsgs(errors)
      return
    }

    const user = {
      name,
      email,
      password
    }

    await signup(user)
      .then(() => history.push('/login'))
      .catch(errors => setErrorMsgs(errors.response.data.errors))

  }

  return (
    <MainStyled>
      <div className="imgContainer">
        <img src={cadastroImg} alt="Gato de olho azul" />
      </div>

      <div className="panel">
        <img src={logoImg} alt="Logo do PetGatô" />

        <Form submitBtnTxt='CADASTRAR' submitBtnPink onSubmit={handleSignup}>
          <Input onChange={e => setName(e.target.value)}
            type="text" name="name" label="Nome" />
          <Input onChange={e => setEmail(e.target.value)}
            type="email" name="email" label="Email" />
          <Input onChange={e => setPassword(e.target.value)}
            type="password" name="password" label="Senha" />
          <Input onChange={e => setPasswordConfirm(e.target.value)}
            type="password" name="password-confirm" label="Confirme sua senha" />

          {errorMsgs && (errorMsgs.map((msg, i) =>
            <span key={i} className='message'>{msg}</span>
          ))}
        </Form>

        <AskLink ask='Já possui conta? ' txtLink='Faça login' to='/login' />
      </div>
    </MainStyled>
  )
}

export default SignUpPage