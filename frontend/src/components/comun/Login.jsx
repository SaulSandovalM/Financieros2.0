import React, { useState } from 'react'
// service
import AuthService from '../../services/Auth'
// Material Ui
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// Estilos
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '88vh'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function Login (props) {
  const classes = useStyles()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const onChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setMessage('')
    setLoading(true)
    AuthService.login(username, password).then(() => {
      props.history.push('/profile')
      window.location.reload()
    }, error => {
      const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      setLoading(false)
      setMessage(resMessage)
    })
  }

  return (
    <Container component='main' maxWidth='xs' className={classes.container}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Iniciar Sesión
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            label='Usuario'
            id='username'
            name='username'
            value={username}
            autoFocus
            onChange={onChangeUsername}
            error={message === 'Usuario no encontrado.'}
            helperText={message === 'Usuario no encontrado.' ? message : ''}
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={onChangePassword}
            error={message === 'Contraseña invalida!'}
            helperText={message === 'Contraseña invalida!' ? message : ''}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            disabled={loading}
          >
            {
              loading &&
                <span />
            }
            Entrar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant='body2' color='textSecondary' align='center'>
          Copyright © Gobierno del Estado de Hidalgo {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  )
}
