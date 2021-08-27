import React from 'react'
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
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  subtitle: {
    fontSize: '12px',
    color: 'grey',
    fontWeight: 'bold'
  },
  numFormat: {
    fontSize: '24px',
    fontWeight: 'bold',
    paddingTop: '10px'
  },
  fooTitle: {
    color: 'grey'
  },
  gridContainer: {
    marginTop: '15px'
  }
}))  

export default function Caja () {
  // States
  const classes = useStyles()
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div>
      <div className={classes.title}>Caja</div>
      {/* Cantidades */}
      <Grid container>
        <Grid item xs={12} md={12} lg={4}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.subtitle}>ASIGNADO</div>
            <div className={classes.numFormat}>$152,996.00</div>
            <div className={classes.fooTitle}>vs. $1,000,000.00 iniciando el año</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.subtitle}>GASTO</div>
            <div className={classes.numFormat}>$68,951.00</div>
            <div className={classes.fooTitle}>vs. $1,000,000.00 iniciando el trimestre</div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.subtitle}>SALDO</div>
            <div className={classes.numFormat}>$84,045.00</div>
            <div className={classes.fooTitle}>vs. $1,000,000.00 iniciando el año</div>
          </Paper>
        </Grid>
      </Grid>
      {/* Graficas */}  
      <Grid container className={classes.gridContainer} spacing={2}>
        <Grid item xs={12} md={12} lg={8}>
          <Paper className={fixedHeightPaper}>
            Grafica
          </Paper>
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <Paper className={fixedHeightPaper}>
            Pastel
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
