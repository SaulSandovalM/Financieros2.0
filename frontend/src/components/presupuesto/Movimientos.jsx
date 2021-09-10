import React, { useState } from 'react'
import { CloudUpload } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Paper, TextField, MenuItem, FormControl, Select, InputLabel } from '@material-ui/core'
import clsx from 'clsx'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  button: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 'auto'
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

export default function Movimientos () {
  const classes = useStyles()
  const [state, setState] = useState({
    mes: ''
  })

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state, [event.target.name]: value
    })
  }

  return (
    <div>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Movimientos</div>
        <Button variant='outlined' startIcon={<CloudUpload />} className={classes.button}>Oficio Autorización</Button>
      </div>
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <TextField 
              label='Oficio de autorización'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <TextField 
              label='Cantidad'
              fullWidth
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <FormControl fullWidth>
              <InputLabel>Mes</InputLabel>
              <Select
                label='Mes'
                value={state.mes}
                name='mes'
                onChange={handleChange}
              >
                <MenuItem vale='Enero'>Enero</MenuItem>
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
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <TextField 
              label='Up'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <TextField 
              label='Partida'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <TextField 
              label='Rubro'
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
