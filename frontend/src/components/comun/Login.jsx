import React, { useState } from 'react'
// Importaciones validador
import Form from 'react-validation/build/form'
// import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
// service
import AuthService from '../../services/Auth'
// Material Ui
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
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
    height: '100vh'
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

const required = value => {
  if (!value) {
    return (
      <div>
        Este campo es requerido!
      </div>
    )
  }
}

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
    this.form.validateAll()
    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(username, password).then(() => {
        this.props.history.push('/profile')
        window.location.reload()
      }, error => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        setLoading(false)
        setMessage(resMessage)
      })
    } else {
      setLoading(false)
    }
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
        <Form className={classes.form} noValidate onSubmit={handleLogin}>
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
            validations={[required]}
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
            validations={[required]}
          />
          <Button
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
          {
            message &&
              <div>
                {message}
              </div>
          }
          <CheckButton style={{ display: 'none' }} />
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {'No tienes cuenta? Entra aqui'}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={8}>
        <Typography variant='body2' color='textSecondary' align='center'>
          Copyright © Gobierno del Estado de Hidalgo {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  )
}
