import React, { useState } from 'react'

import recuperar_senha from '../assets/recuperar_senha.jpg'
import logoImg from '../assets/gatinho_petgato.svg'
import AskLink from '../components/AskLink'
import Form from '../components/Form'
import Input from '../components/Input'
import { MainStyled } from './SignUpStyle'
import api from '../services/api.js'
import { useHistory } from "react-router-dom";

const RecoverPassword  = () => {    
  const [email, setEmail] = useState('')
  const history = useHistory()

  const submitHandler = e => {
    e.preventDefault()
    api.post('/password/forgot', {email})
      .then(response => {
        console.log(response)
        history.push('get-token')
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

          <Form onSubmit={submitHandler} submitBtnTxt='ENVIAR EMAIL' submitBtnPink>
            <Input type="email" name="email" label="Email" value={email} onChange = {e => setEmail(e.target.value)} />
            <h4>Insira seu email para recuperar a senha</h4>
            <br></br>
          </Form>
          <AskLink ask='Lembrou a senha? ' txtLink='Faça login' to='/login' />
          <AskLink ask='Ainda não tem conta? ' txtLink='Cadastre-se aqui' to='/signup' />
        </div>
      </MainStyled>
    )
  }  



export default RecoverPassword