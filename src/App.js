import React, { useContext } from 'react'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'
import { Redirect, Router } from '@reach/router'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { User } from './pages/User'
import { Navbar } from './components/Navbar'
import { Context } from './Context'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect from='login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <Navbar />
    </>
  )
}
