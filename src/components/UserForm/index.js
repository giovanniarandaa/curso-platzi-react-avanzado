import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          placeholder='Email'
          disabled={disabled}
          {...email}
        />
        <Input
          placeholder='Password'
          type='password'
          disabled={disabled}
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
        {error && <Error>{error}</Error>}
      </Form>
    </>
  )
}
