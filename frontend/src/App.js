import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch, useHistory } from 'react-router-dom';

import LoginPage from './views/LoginPage';
import SignUpPage from './views/SignUpPage';
import HomePage from './views/HomePage';

import ContactUs from './views/ContactUs';
import AboutUs from './views/AboutUs';
import GetToken from './views/GetToken';
import PostPage from './views/PostPage';
import EditPage from './views/EditPage';
import EditPostPage from './views/EditPostPage';
import CreatePostPage from './views/CreatePostPage';
import RecoverPassword from './views/RecoverPassword';
import BOPostsPage from './views/BOPostsPage';
import EditUserPage from './views/EditUserPage';
import BOTagsPage from './views/BOTagsPage';
import BOUsersPage from './views/BOUsersPage';

import { AuthContext, AuthProvider } from './components/AuthProvider'
import Header from './components/Header'
import Footer from './components/Footer'
import BOTagEditor from './views/BOTagEditor';
import BOReportsPage from './views/BOReportsPage';


const RouteHeaderFooter = ({ component: Component, ...props }) => {
  return (
    <Route {...props}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh'
      }}
      >
        <Header />
        <Component />
        <Footer />
      </div>
    </Route>
  )
}


const RouteMaster = ({
  component: Component,
  hasHeaderFooter,
  onlyLogged,
  onlyAdmin,
  ...props
}) => {
  const [user, , , , getUser] = useContext(AuthContext)
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  useEffect(() => {

    if (onlyAdmin || onlyLogged)
      (async () => {
        setIsLoaded(false)

        const id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')
        if (id && token)
          await getUser(id, token)
            .catch(error => {
              if (error.response.status === 401)
                return history.push('/login')
            })
        else return history.push('/login')

        setIsLoaded(true)
      })()
    else setIsLoaded(true)
  }, [history, onlyAdmin, onlyLogged])

  if (onlyAdmin || onlyLogged) {
    if (!isLoaded) return <></>

    if (!user.signed) return <Redirect to='/login' />

    if (!user.isAdmin && onlyAdmin) return <Redirect to='/home' />
  }


  return hasHeaderFooter ?
    <RouteHeaderFooter component={Component} {...props} />
    : <Route component={Component} {...props} />

}


const App = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <RouteMaster path='/login' component={LoginPage} />
          <RouteMaster path='/signup' component={SignUpPage} />
          <RouteMaster path='/recover-password' component={RecoverPassword} />
          <RouteMaster path='/get-token' component={GetToken} />

          <RouteMaster hasHeaderFooter path='/home' component={HomePage} />
          <RouteMaster hasHeaderFooter path='/about-us' component={AboutUs} />
          <RouteMaster hasHeaderFooter path='/contact-us' component={ContactUs} />
          <RouteMaster hasHeaderFooter path='/posts/:id' component={PostPage} />

          <RouteMaster hasHeaderFooter onlyLogged path='/edit-profile' component={EditPage} />

          <RouteMaster hasHeaderFooter onlyAdmin path='/edit-post/:id' component={EditPostPage} />
          <RouteMaster hasHeaderFooter onlyAdmin path='/create-post' component={CreatePostPage} />

          <RouteMaster hasHeaderFooter onlyAdmin path='/edit-user/:id' component={EditUserPage} />

          <RouteMaster hasHeaderFooter onlyAdmin path='/backoffice/posts' component={BOPostsPage} />
          <RouteMaster hasHeaderFooter onlyAdmin path='/backoffice/users' component={BOUsersPage} />

          <RouteMaster hasHeaderFooter onlyAdmin path='/backoffice/manage-tags' component={BOTagsPage} />
          <RouteMaster hasHeaderFooter onlyAdmin path='/backoffice/edit-tag/:id' component={BOTagEditor} />
          <RouteMaster hasHeaderFooter onlyAdmin path='/backoffice/create-tag' component={BOTagEditor} />
          <RouteMaster hasHeaderFooter onlyAdmin path='/backoffice/reports' component={BOReportsPage} />

          <Redirect to='/home' /> {/* se não existir uma rota correspondente, vai pra home */}
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
