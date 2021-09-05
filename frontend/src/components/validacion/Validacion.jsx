import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { 
  TextField, 
  Select, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Switch, 
  Button,
  Paper,
  Grid
} from '@material-ui/core'

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
    fontSize: '18px',
    marginBottom: '16px'
  },
  validacionContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '49%',
  },
  textSwitch: {
    color: 'grey',
    fontSize: '14px'
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

export default function Validacion () {
  // State
  const classes = useStyles()

  const [state, setState] = useState({
    persona: '',
    fecha: '',
    contrato: '',
    folio: '',
    adquisiciones: false,
    partida: '',
    up: '',
    nombrePartida: ''
  })

  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state, [event.target.name]: value
    })
  }

  var today = new Date(),
  date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
  
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div>
      <div className={classes.title}>Validación</div>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel>Persona</InputLabel>
                <Select
                  label='Persona'
                  name='persona'
                  onChange={handleChange}
                >
                <MenuItem value=''><em>Vacio</em></MenuItem>
                <MenuItem value={'Fisica'}>Fisica</MenuItem>
                <MenuItem value={'Moral'}>Moral</MenuItem>
              </Select>
            </FormControl> 
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextField
              variant='outlined'
              label='Fecha'
              fullWidth
              name='fecha'
              onChange={handleChange}
              value={date}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextField 
              variant='outlined'
              label='Contrato'
              fullWidth
              name='contrato'
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextField 
              variant='outlined'
              label='Folio'
              fullWidth
              name='folio'
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel>Partida</InputLabel>
              <Select
                label='Partida'
                name='partida'
                onChange={handleChange}
              >
                <MenuItem value=''><em>Vacio</em></MenuItem>
                <MenuItem value={200121}>200212</MenuItem>
                <MenuItem value={201212}>121212</MenuItem>
                <MenuItem value={301212}>325432</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel>Up</InputLabel>
              <Select
                label='Up'
                name='up'
                onChange={handleChange}
              >
                <MenuItem value=''><em>Vacio</em></MenuItem>
                <MenuItem value={'01'}>01</MenuItem>
                <MenuItem value={'02'}>02</MenuItem>
                <MenuItem value={'03'}>03</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField 
              variant='outlined'
              label='Nombre de Partida'
              fullWidth
              name='nombrePartida'
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField 
              variant='outlined'
              label='Xml'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField 
              variant='outlined'
              label='Pdf'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <div>Adquisiciones</div>
            <div className={classes.textSwitch}>Activalo si es que pertenece a adquisiciones</div>
            <Switch
              checked={state.adquisiciones}
              onChange={handleChange}
              name='adquisiciones'
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.btn}>
              <Button variant='outlined' className={classes.btnBack}>Enviar</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
