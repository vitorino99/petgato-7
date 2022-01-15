import cam from '../assets/icon_camera.svg'
import { Fieldset, Body, Title, Button1, Perfil } from './EditPageStyle';
import { AuthContext } from '../components/AuthProvider'
import { useContext, useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Input from '../components/Input'
import api from '../services/api.js'

const EditPage = () => {
  const [user, login, , , getUser] = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [newpassword, setNewpassword] = useState('')
  const [newpasswordconfirm, setNewpasswordconfirm] = useState('')
  const [previewProfileImg, setPreviewProfileImg] = useState('')
  const [profileImg, setProfileImg] = useState('')

  if (!previewProfileImg) {
    setPreviewProfileImg('https://images.vinted.net/thumbs/310x310/02_01f90_gFWmnuooFwdPYFcrrK3Fqy6p.jpeg?1615104367-5a390454b08ec33eb77e5c387b56b5b4044f3538');
  }


  useEffect(() => {
    setName(user.name)
    setPreviewProfileImg(user.photo)
  }, [user])

  const imageHandler = (e) => {
    setProfileImg(e.target.files[0])
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2)  {
        setPreviewProfileImg(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const submitHandler = async e => {
    e.preventDefault()
    const id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');

    const data = new FormData()

    if (!password) {
      alert("Você não digitou a senha");
    }

    if (newpasswordconfirm !== newpassword) {
      alert("Confirmação de senha incorreta");
      setNewpassword();
      setNewpasswordconfirm();
    }


    data.append('name', name)
    data.append('password', newpassword)
    data.append('password_confirmation', newpasswordconfirm)
    if (profileImg) 
      data.append('photo', profileImg, profileImg.name)

    setIsLoading(true)
    await login({email:user.email, password})  
        .then(response => {
          api.put('/users/' + id, data, 
            { headers: { Authorization: token, 'Content-Type': 'multipart/form-data' } })
            .then(() => getUser())
            .then(() => setPassword(''))
            .then(() => alert('Perfil atualizado com sucesso'))
      })
      .catch(error => {
        if (error.response.status === 401)
          alert('Senha incorreta')
      })
      .finally(() => setIsLoading(false))

  }


    return (
        <Body>
          <div className="separator">

            <Perfil>
              <form>
              
              <span><img src={previewProfileImg} alt='Imagem do perfil'></img></span>
              <div className="perfil-txt">
                <img className ='icon' width="25" height="25" src={cam} id='photo' alt='Ícone de câmera' />
                <label htmlFor='file'> Alterar foto de perfil
                <Input className='txt' id='file' type='file' onChange={imageHandler} accept='image/png, image/jpeg'></Input>
                </label>
              </div>
              </form>

            </Perfil>
            <form onSubmit={submitHandler}>
            <Title>
              <h2>SUA CONTA</h2>
              <h1>Edite seu perfil</h1>
              <br></br>
            </Title>
            <Fieldset className='grupo'>
              <Input type='text' name='nome' label='Nome' value={name} onChange={e => setName(e.target.value)} />
              <Input type='email' name='email' label='Email' disabled value={user.email}/>
              <Input type='password' name='novasenha' label='Senha' value={newpassword} onChange={e => setNewpassword(e.target.value)} />
              <Input type='password' name='confirmesenha' label='Confirme a Senha' value={newpasswordconfirm} onChange={e => setNewpasswordconfirm(e.target.value)} />
              <Input type='password' name='senha' label='Senha atual' value={password} onChange={e => setPassword(e.target.value)} />

            </Fieldset>
            <br></br>
            <Button1>{isLoading ? <Loading isPink /> : 'SALVAR'}</Button1>
            
          </form>

          </div>
        </Body>
      )
}
    
export default EditPage