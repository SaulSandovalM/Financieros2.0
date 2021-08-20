import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
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
    fontWeight: 'bold'
  },
  inputContent: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  input: {
    width: '18%'
  },
  formControl: {
    width: '18%'
  },
  btn: {
    width: '5%',
    backgroundColor: '#07121f',
    color: 'white'
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
  const [values, setValues] = useState({
    numberformat: '1320',
  })

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  // Funciones
  const handleChange = (event) => {
    setAge(event.target.value)
  }

  const handleNumFormat = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.title}>Crear Fondo Revolvente</div>
            <div className={classes.inputContent}>
              <TextField 
                label='Oficio de autorización'
                variant='outlined'
                className={classes.input}
              />
            </div>
            <div className={classes.inputContent}>
              <TextField 
                label='Up' 
                variant='outlined' 
                className={classes.input}
              />
              <TextField 
                label='Partida' 
                variant='outlined' 
                className={classes.input}
              />
              <TextField 
                label='Rubro'
                variant='outlined'
                className={classes.input}
              />
              <TextField 
                label='Cantidad'
                variant='outlined'
                onChange={handleNumFormat}
                className={classes.input}
                InputProps={{
                  inputComponent: NumberFormatCustom
                }}
              />
              <FormControl className={classes.formControl} variant='outlined'>
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
              <Button 
                variant='outliend'
                disableRipple
                className={classes.btn}>Guardar</Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.top}>
        <Grid item lg={12}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.header}>
              Oficio de autorización SFP-CPF-01-2988/2021
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
