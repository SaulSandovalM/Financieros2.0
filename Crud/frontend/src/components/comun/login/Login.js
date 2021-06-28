import React, { Component } from 'react'
// Material Ui
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
// CSS
import logo from '../../imgs/logoh.png'
import './Login.css'

export default class Login extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  render () {
    return (
      <div className='login-container'>
        <div className='login-back'>
          <div className='login-ins'>
            <div className='login-col'>
              <div className='login'>
                <div className='login-card'>
                  <div className='login-sep-log'>
                    <div>
                      <h2 className='login-color'>Iniciar sesión</h2>
                      <p className='login-sub'>Inicie sesión en la plataforma interna</p>
                    </div>
                    <div className='login-c'>
                      <img className='logo-img' src={logo} alt='' />
                    </div>
                  </div>
                  <div className='login-border-form'>
                    <div className='login-input-cen'>
                      <TextField
                        className='login-inputs-width'
                        label='Correo Electronico'
                        variant='outlined'
                        id='email'
                      />
                    </div>
                    <div className='login-input-cen'>
                      <TextField
                        className='login-inputs-width'
                        label='Contraseña'
                        variant='outlined'
                        id='password'
                        type='password'
                      />
                    </div>
                    <div className='login-ctb'>
                      <Button
                        className='login-inputs-width'
                        variant='contained'
                        color='primary'
                      >
                        Iniciar Sesión
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
