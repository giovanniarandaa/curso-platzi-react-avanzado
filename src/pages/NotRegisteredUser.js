import React, { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { Context } from '../Context'
import { useRegisterMutation } from '../hoc/useRegisterMutation'
import { useLoginMutation } from '../hoc/useLoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)
  const { registerMutation, loading, error } = useRegisterMutation()
  const { loginMutation, loading: loadingLogin, error: errorLogin } = useLoginMutation()

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    registerMutation({ variables }).then(({ data }) => {
      const { signup } = data
      activateAuth(signup)
    })
  }

  const errorMsg = error && 'El usuario ya existe o hay algún problema.'

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    loginMutation({ variables }).then(({ data }) => {
      const { login } = data
      activateAuth(login)
    })
  }

  const errorMsgLogin = errorLogin && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <>
      <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit} />
      <UserForm disabled={loadingLogin} error={errorMsgLogin} title='Iniciar sesión' onSubmit={onSubmitLogin} />
    </>
  )
}
