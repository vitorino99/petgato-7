import React, { useState } from 'react'
import recuperar_senha from '../assets/recuperar_senha.jpg'
import logoImg from '../assets/gatinho_petgato.svg'
import Form from '../components/Form'
import Input from '../components/Input'
import { MainStyled } from './SignUpStyle'
import api from '../services/api.js'
import {useHistory} from 'react-router-dom';



const GetToken  = () => {    
    const [token, setToken] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const submitHandler = e => {
      e.preventDefault()
      api.post('/password/reset', {token, password})
        .then(response => {
          console.log(response)
          history.push('login')
        })
        .catch(error => {
          console.log(error)
        })
    
    }

    return (
      <MainStyled>
        <div className="imgContainer">
          <img src={recuperar_senha} alt="Gato de olho azul" />
        </div>

        <div className="panel">
          <img src={logoImg} alt="Logo do PetGatô" />

          <Form onSubmit={submitHandler} submitBtnTxt='RECUPERAR SENHA' submitBtnPink={submitHandler} >
            <Input type="text" name="Token" label="Código de recuperação de senha" value={token} onChange = {e => setToken(e.target.value)} />
            <Input type="password" name="Senha" label="Nova senha" value={password} onChange = {e => setPassword(e.target.value)} />
            <br></br>
          </Form>
        </div>
      </MainStyled>
    )
  }  

export default GetToken 