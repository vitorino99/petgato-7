
import { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import logoImg from '../../assets/gatinho_petgato_branco.svg'
import { AuthContext } from '../AuthProvider'
import Modal from '../Modal'
import { ButtonsContainer, ButtonItem, Topo } from './styles'

const HeaderLink = ({ to, children, ...props }) => {
  const history = useHistory()

  return (<ButtonItem className={'header1'}>
    <Link
      className={'link-menu ' + (history.location.pathname === to ? 'active' : '')}
      to={to}
      {...props}
    >
      {children}
    </Link>
  </ButtonItem>)
}


const Header = () => {
  const [showModal, setShowModal] = useState(false)
  const [user, , logout] = useContext(AuthContext)
  const history = useHistory()

  return (
    <Topo>
      <Link to="/home">
        <img className='logo' width="100" height="100" src={logoImg} alt="Logo do PetGatô" />
      </Link>
      <ButtonsContainer className='header'>
        <HeaderLink to="/home">Página Inicial</HeaderLink>

        {history.location.pathname.split('/')[1] !== 'backoffice' ? <>
          <HeaderLink to="/about-us">Sobre Nós</HeaderLink>
          <HeaderLink to="/contact-us">Fale Conosco</HeaderLink>

          {user.signed ?
            <ButtonItem
              className='link-menu'
              style={{
                position: 'relative',

              }}
              onClick={() => setShowModal(show => !show)}
            >
              Minha Conta
              <Modal showModal={showModal}>
                {user.isAdmin && <li><Link to='/backoffice/posts'>Backoffice</Link></li>}
                <li><Link to='/edit-profile'>Meu perfil</Link></li>
                <li className='li-link' onClick={logout}>Sair da conta</li>
              </Modal>
            </ButtonItem>
            : <HeaderLink to="/login">Entrar</HeaderLink>}
        </> : <>
          <HeaderLink to="/backoffice/posts">Publicações</HeaderLink>
          <HeaderLink to="/backoffice/users">Usuários</HeaderLink>
          <HeaderLink to="/backoffice/reports">Denúncias</HeaderLink>
          <HeaderLink to="/backoffice/messages">Mensagens</HeaderLink>
        </>
        }
      </ButtonsContainer>
    </Topo>
  )
}

export default Header