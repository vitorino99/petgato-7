import { useContext, useState } from 'react'
import loginImg from '../assets/Login.jpg'
import logoImg from '../assets/gatinho_petgato.svg'
import AskLink from '../components/AskLink'
import Form from '../components/Form'
import Input from '../components/Input'
import { AuthContext } from '../components/AuthProvider'
import { MainStyled } from './SignUpStyle'
import { useHistory } from 'react-router'

const LoginPage = () => {
  const [errorMsgs, setErrorMsgs] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [,login, , , getUser] = useContext(AuthContext)

  const history = useHistory()

  const handleLogin = async e => {
    e.preventDefault()

    setErrorMsgs([])
    if (!email || !password) {
      setErrorMsgs(['Há campos que precisam ser preenchidos.'])
      return
    }

    const user = {
      email,
      password
    }

    await login(user)
      .then(() => {
        // obtendo dados do usuário logado
        getUser()
      })
      .then(() => history.push('/home'))
      .catch(errors => {
        if (errors.response.status === 401)
          setErrorMsgs(['Algum dos dados estão incorretos.'])
      })
      

  }

  return (
    <MainStyled>
      <div className="imgContainer">
        <img src={loginImg} alt="Gato de olho azul" />
      </div>

      <div className="panel">
        <img src={logoImg} alt="Logo do PetGatô" />

        <Form submitBtnTxt='ENTRAR' submitBtnPink onSubmit={handleLogin}>
          <Input onChange={e => setEmail(e.target.value)} type="email" name="email" label="Email" />
          <Input onChange={e => setPassword(e.target.value)} type="password" name="password" label="Senha" />

          {errorMsgs && (errorMsgs.map((msg, i) =>
            <span key={i} className='message'>{msg}</span>
          ))}
        </Form>

        <AskLink ask='' txtLink='Esqueci minha senha' to='/recover-password' />
        <AskLink className='lastAskLink' ask='Ainda não tem conta? ' txtLink='Crie sua conta' to='/signup' />
      </div>
    </MainStyled>
  )
}

export default LoginPage