import React, { useState } from 'react'
import AuthService from '../../services/Auth'
// Material Ui
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import perfil from '../imgs/yo.jpeg'

const useStyles = makeStyles((theme) => ({
  general: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240,
    marginTop: '20px'
  },
  root: {
    flexGrow: 1
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '60px'
  },
  align: {
    display: 'flex',
    justifyContent: 'center'
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  info: {
    fontSize: '16px',
    paddingBottom: '10px'
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px'
  },
  inputContent: {
    width: '48%'
  },
  input: {
    width: '100%'
  },
  centerImg: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

export default function Profile (props) {
  const [currentUser] = useState(AuthService.getCurrentUser())
  const classes = useStyles()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div>
      
      <Typography variant='h5' component='h2'>
        Perfil
      </Typography>
      
      <div className={classes.root}> 
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Paper className={fixedHeightPaper}>
              <div className={classes.align}>
                <div className={classes.column}>
                  <div className={classes.centerImg}>
                    <img src={perfil} className={classes.img} alt='' />
                  </div>
                  <div className={classes.align}>
                    {currentUser.username} Sandoval
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Paper className={fixedHeightPaper}>
              <div className={classes.info}>
                Información  
              </div>
              <Divider />
              <div className={classes.inputRow}>
                <div className={classes.inputContent}>
                  <TextField 
                    label='Nombre'
                    variant='outlined'
                    className={classes.input}
                    value={currentUser.username}
                  />
                </div>
                <div className={classes.inputContent}>
                  <TextField 
                    label='Correo'
                    variant='outlined'
                    className={classes.input}
                    value={currentUser.email}
                  />
                </div>
              </div>
              <div className={classes.inputRow}>
                <div className={classes.inputContent}>
                  <TextField 
                    label='Telefono'
                    variant='outlined'
                    className={classes.input}
                  />
                </div>
                <div className={classes.inputContent}>
                  <TextField 
                    label='Rol'
                    variant='outlined'
                    className={classes.input}
                    value={currentUser.roles && currentUser.roles.map((role) => role)}
                  />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}
