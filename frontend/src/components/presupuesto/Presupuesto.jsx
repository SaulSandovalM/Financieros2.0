import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

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
    fontSize: '18px',
    fontWeight: 'bold'
  },
  inputsContent: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  input: {
    width: '24%'
  },
  input2: {
    width: '100%'
  }
}))

export default function Presupuesto () {
  // States
  const classes = useStyles() 
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <form>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.title}>Presupuesto</div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Año'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Rm'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Ur'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Up'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Rubro'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Tg'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Ogasto'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='F'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Fu'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Sf'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Eje'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='S' 
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Prog'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Sp'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Obj'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Proy'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Est'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Obra'
                variant='outlined'
                className={classes.input}  
              />
              <TextField 
                label='Ben'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Eg'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Mi'
                variant='outlined'
                className={classes.input}
              /> 
              <TextField 
                label='Pr'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Pd'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Itrans'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Min'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Igest'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='La'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Obs'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Et'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Ff'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Of'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Np'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Cpa'
                variant='outlined'
                className={classes.input2}
              />
            </div>
            <div className={classes.inputsContent}>
              <TextField 
                label='Nombre proyecto'
                variant='outlined'
                className={classes.input2}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </form>
  )
}
