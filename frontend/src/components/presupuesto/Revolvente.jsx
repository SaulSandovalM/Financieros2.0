import React, { useState, useEffect } from 'react'
// Material UI
import { Grid, Paper, TextField, Select, FormControl, InputLabel, MenuItem, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import clsx from 'clsx'
// Services
import PresupuestoDataService from '../../services/Presupuesto'

// Styles
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
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  top: {
    marginTop: '20px'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  inputContent: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%'
  },
  btnBack: {
    background: '#07131f',
    color: 'white'
  },
  button: {
    margin: theme.spacing(1)
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}))

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        })
      }}
      thousandSeparator
      isNumericString
      prefix='$'
    />
  )
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default function Revolvente () {
  // States
  const classes = useStyles()
  const [mount, setMount] = useState('')
  const [up, setUp] = useState('')
  const [ogasto, setOgasto] = useState([])
  const [partida, setPartida] = useState('')
  const [rubro, setRubro] = useState('')
  const [values, setValues] = useState({
    numberformat: '1320',
  })
  const [presupuesto, setPresupuesto] = useState([])

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  // Functions
  const handleChange = (event) => {
    setMount(event.target.value)
  }

  const handleChangeUp = (event) => {
    setUp(event.target.value)
    const ups = {
      up: event.target.value,
    }

    PresupuestoDataService.getOgasto(ups).then(response => {
      setOgasto(response.data)
      // console.log(response.data)  
    }).catch(e => {
      console.log(e)
    })
  }

  const handleChangePartida = (event) => {
    setPartida(event.target.value)
  }

  const handleChangeRubro = (event) => { 
    setRubro(event.target.value)
  }

  const handleNumFormat = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    PresupuestoDataService.getUp().then(response => {
      setPresupuesto(response.data)
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <form>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Creación de fondo revolvente</div>
      </div>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl fullWidth>
              <InputLabel>Up</InputLabel>
              <Select
                label='Up'
                value={up}
                onChange={handleChangeUp}
              >
                {presupuesto.map(item => 
                  <MenuItem value={item.up} key={item.id}>{item.up}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl fullWidth>
              <InputLabel>Partida</InputLabel>
              <Select
                label='Partida'
                value={partida}
                onChange={handleChangePartida}
              >
                {ogasto.map(item =>
                  <MenuItem value={item.ogasto} key={item.id}>{item.ogasto}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl fullWidth>
              <InputLabel>Rubro</InputLabel>
              <Select
                label='Rubro'
                value={rubro}
                onChange={handleChangeRubro}
              >
                {presupuesto.map(item =>
                  <MenuItem value={item.rubro} key={item.id}>{item.rubro}</MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl fullWidth>
              <InputLabel>Mes</InputLabel>
              <Select
                label='Mes'
                value={mount}
                onChange={handleChange}
              >
                <MenuItem value='Enero' key=''>Enero</MenuItem>
                <MenuItem value='Febero' key=''>Febrero</MenuItem>
                <MenuItem value='Marzo' key=''>Marzo</MenuItem>
                <MenuItem value='Abril' key=''>Abril</MenuItem>
                <MenuItem value='Mayo' key=''>Mayo</MenuItem>
                <MenuItem value='Junio' key=''>Junio</MenuItem>
                <MenuItem value='Julio' key=''>Julio</MenuItem>
                <MenuItem value='Agosto' key=''>Agosto</MenuItem>
                <MenuItem value='Septiembre' key=''>Septiembre</MenuItem>
                <MenuItem value='Octubre' key=''>Octubre</MenuItem>
                <MenuItem value='Noviembre' key=''>Noviembre</MenuItem>
                <MenuItem value='Diciembre' key=''>Diciembre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextField 
              label='Cantidad'
              onChange={handleNumFormat}
              fullWidth
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <TextField 
              label='Oficio de autorización'
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
