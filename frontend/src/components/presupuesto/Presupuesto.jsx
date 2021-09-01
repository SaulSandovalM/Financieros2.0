import React from 'react'
// Material Ui
import { 
  Button, 
  Grid, 
  Paper, 
  TextField 
} from '@material-ui/core'
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
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  btnBack: {
    background: '#07131f',
    color: 'white'
  }
}))

export default function Presupuesto () {
  // States
  const classes = useStyles() 
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <form>
      <div className={classes.title}>Presupuesto</div>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Año'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Rm'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ur'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Up'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Rubro'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Tg'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ogasto'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='F'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Fu'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Sf'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Eje'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='S'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Prog'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Sp'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Obj'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Proy'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Est'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Obra'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ben'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Eg'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Mi'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Pr'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Pd'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Itrans'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Min'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Igest'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='La'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ods'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Et'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ff'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Of'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Np'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Cpa'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Nombre Proyecto'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.btn}>
              <Button variant='outlined' className={classes.btnBack}>Enviar</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}
