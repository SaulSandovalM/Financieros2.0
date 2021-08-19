import React, { useState, useEffect } from 'react'
// Material Ui
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import clsx from 'clsx'
// services
import UserService from '../../services/User'

// Estilos
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 'auto'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18px'
  },
  inputContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '15px'
  },
  inputDiv: {
    width: '48%'
  },
  input: {
    width: '100%'
  },
  container: {
    marginTop: '20px'
  },
  inputObs: {
    width: '100%'
  }
}))

export default function Fondos (props) {
  // States
  const classes = useStyles()
  // const theme = useTheme()
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const [content, setContent] = useState('')

  // Funciones
  useEffect(() => {
  UserService.getFondoBoard().then(
      response => {
        setContent(response.data)
      }, error => {
        setContent(
          error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString()
      }
    )
  }, [])

  return (
    <form>
      {content === 'Contenido de Fondo.' ?
        <Container maxWidth='lg'>
          {/* Buscador */}
          <Grid container>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <div className={classes.title}>Buscador</div>
                <div className={classes.inputContent}>
                  <div>Fondo</div>
                </div>
              </Paper>
            </Grid>
          </Grid>
          {/* Fondo */}
          <Grid container className={classes.container}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <div className={classes.title}>Fondos</div>
                <div className={classes.inputContent}>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Fondo'
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Fecha'
                    />
                  </div>
                </div>
                <div className={classes.inputContent}>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Tipo de documento'
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Oficio de Autorización'
                    />
                  </div> 
                </div>
                <div className={classes.inputContent}>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Numero de oficio'
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Anexo f'
                    />
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
          {/* Licitación */}
          <Grid container className={classes.container}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <div className={classes.title}>Licitación</div>
                <div className={classes.inputContent}>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Numero de licitación'
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Requisición'
                    />
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
          {/* Cfe */}
          <Grid container className={classes.container}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <div className={classes.title}>Cfe</div>
                <div className={classes.inputContent}>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Cta CFE'
                    />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField 
                      className={classes.input}
                      label='Numero de servicio CFE'
                   />  
                  </div>
                </div>
                <div className={classes.inputContent}>
                  <div className={classes.inputObs}>
                    <TextField 
                      className={classes.input}
                      label='Observaciones'
                      multiline
                      rows={4}
                    />
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        : 
        <div>
          No cuentas con los permisos suficientes.
        </div>
      }
    </form>
  )
} 
