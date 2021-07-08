import React, { useState } from 'react'
// Importaciones validador
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator'
import './Comun.css'
// services
import AuthService from '../../services/Auth'

const required = value => {
  if (!value) {
    return (
      <div>
        Este campo es requerido!
      </div>
    )
  }
}

const vemail = value => {
  if (!isEmail(value)) {
    return (
      <div>
        Este no es un correo valido!
      </div>
    )
  }
}

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div>
        El usuarios debe de tener entre 3 a 20 caracteres.
      </div>
    )
  }
}

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div>
        La contraseña debe tener entre 6 a 40 caracteres.
      </div>
    )
  }
}

export default function Register (props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setMessage('')
    setSuccessful(false)
    AuthService.register(username, email, password).then(response => {
      setMessage(response.data.message)
      setSuccessful(true)
    }, error => {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      setSuccessful(false)
      setMessage(resMessage)
    })
  }

  return (
    <div>
      <div>
        <Form onSubmit={handleRegister}>
          {
            !successful &&
              <div>
                <div>
                  <Input
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
                <div>
                  <Input
                    type='text'
                    name='email'
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, vemail]}
                  />
                </div>
                <div>
                  <Input
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>
                <div>
                  <button>Regitrar</button>
                </div>
              </div>
          }
          {
            message &&
              <div>
                <div className={successful ? 'suc' : 'color: red'}>
                  {message}
                </div>
              </div>
          }
          <CheckButton style={{ display: 'none' }} />
        </Form>
      </div>
    </div>
  )
}
