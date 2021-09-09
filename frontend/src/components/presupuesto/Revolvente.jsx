import React, { useState } from 'react'
import { 
  Grid, 
  Paper, 
  TextField, 
  Select, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Button 
} from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'
import clsx from 'clsx'

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
  const [age, setAge] = useState()
  const [up, setUp] = useState()
  const [partida, setPartida] = useState()
  const [rubro, setRubro] = useState()
  const [values, setValues] = useState({
    numberformat: '1320',
  })

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  // Funciones
  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleChangeUp = (event) => {
    setUp(event.target.value)
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

  return (
    <form>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Creación de fondo revolvente</div>
        <Button variant='outlined' startIcon={<CloudUpload />} className={classes.button}>Cargar Contrarecibo</Button>
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
                <MenuItem value='01'>01</MenuItem>
                <MenuItem value='02'>02</MenuItem>
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
                <MenuItem value='211001'>211001</MenuItem>
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
                <MenuItem value='311101'>311101</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <FormControl fullWidth>
              <InputLabel>Mes</InputLabel>
              <Select
                label='Mes'
                value={age}
                onChange={handleChange}
              >
                <MenuItem value='Enero'>Enero</MenuItem>
                <MenuItem value='Febero'>Febrero</MenuItem>
                <MenuItem value='Marzo'>Marzo</MenuItem>
                <MenuItem value='Abril'>Abril</MenuItem>
                <MenuItem value='Mayo'>Mayo</MenuItem>
                <MenuItem value='Junio'>Junio</MenuItem>
                <MenuItem value='Julio'>Julio</MenuItem>
                <MenuItem value='Agosto'>Agosto</MenuItem>
                <MenuItem value='Septiembre'>Septiembre</MenuItem>
                <MenuItem value='Octubre'>Octubre</MenuItem>
                <MenuItem value='Noviembre'>Noviembre</MenuItem>
                <MenuItem value='Diciembre'>Diciembre</MenuItem>
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
