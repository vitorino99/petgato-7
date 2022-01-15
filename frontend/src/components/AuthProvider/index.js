import { createContext, useEffect, useState } from 'react'
import api from '../../services/api'

export const AuthContext = createContext([false, () => { }, () => { }])

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    isAdmin: false,
    photo: '',
  })

  const getUser = async () => {
    const id = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')

    return api.get('/users/' + id, { headers: { 'Authorization': token } })
      .then(res => res.data)
      .then(user =>
        setUser({
          signed: true,
          name: user.name,
          email: user.email,
          isAdmin: user.is_admin,
          photo: user.photo ?? ''
        })
      )
  }

  const signup = async ({ name, email, password }) =>
    api.post('/users', {
      name,
      email,
      password,
      is_admin: false
    })


  const login = async ({ email, password }) =>
    api.post('/auth/login', {
      email, password
    }).then(res => {
      const { id, token } = res.data
      localStorage.setItem('user_id', id)
      localStorage.setItem('token', token)
    })


  const logout = () => {
    localStorage.removeItem('user_id')
    localStorage.removeItem('token')

    setUser({
      signed: false,
      name: '',
      email: '',
      isAdmin: false,
      photo: '',
    })
  }


  useEffect(() => {
    // isso serve pra recuperar os dados do usuário
    // depois de recarregar a página
    if (localStorage.getItem('token')) {
      const id = localStorage.getItem('user_id')
      const token = localStorage.getItem('token')

      getUser(id, token)
    }
  }, [])

  return (
    <AuthContext.Provider value={[user, login, logout, signup, getUser]}>
      {children}
    </AuthContext.Provider>
  )
}