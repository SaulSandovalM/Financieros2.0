import React, { useState, useEffect } from 'react'
// Material ui
import { Button, Grid, Paper, TextField, Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import PresupuestoDataService from '../../services/Presupuesto'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

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

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

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

export default function EditarPresupuesto (props) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sever, setSever] = useState('')
  const [currentPartida, setCurrentPartida] = useState(null)

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
    
  // funciones
  const handleChange = (event) => {
    const value = event.target.value
    setCurrentPartida({
      ...currentPartida, [event.target.name]: value
    })
  }

  useEffect(() => {
    console.log(props.match.params.id)
    PresupuestoDataService.get(props.match.params.id).then(response => {
      setCurrentPartida(response.data)
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }, [props.match.params.id])
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
    props.history.push('/actualizar')
  }

  const actualizarPresupuesto = () => {
    PresupuestoDataService.update(currentPartida.id, currentPartida).then(response => {
      setMessage('La partida se actualizo axitosamente!')
      setOpen(true)
      setSever('success')
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <div>
      <div className={classes.titleContainer}>
        <div className={classes.title}>Presupuesto</div>
      </div>
      <Snackbar 
        open={open} 
        onClose={handleClose}
         anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert onClose={handleClose} severity={sever}>
          {message}
        </Alert>
      </Snackbar>
      {currentPartida &&
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Año' 
              fullWidth
              value={currentPartida.year}
              onChange={handleChange}
              name='year'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Rm'
              fullWidth
              value={currentPartida.rm}
              onChange={handleChange}
              name='rm'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ur'
              fullWidth
              value={currentPartida.ur}
              onChange={handleChange}
              name='ur'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Up'
              fullWidth
              value={currentPartida.up}
              onChange={handleChange}
              name='up'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Rubro'
              fullWidth
              value={currentPartida.rubro}
              onChange={handleChange}
              name='rubro'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Tg'
              fullWidth
              value={currentPartida.tg}
              onChange={handleChange}
              name='tg'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ogasto'
              fullWidth
              value={currentPartida.ogasto}
              onChange={handleChange}
              name='ogasto'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='F'
              fullWidth
              value={currentPartida.f}
              onChange={handleChange}
              name='f'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Fu'
              fullWidth
              value={currentPartida.fu}
              onChange={handleChange}
              name='fu'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Sf'
              fullWidth
              value={currentPartida.sf}
              onChange={handleChange}
              name='sf'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Eje'
              fullWidth
              value={currentPartida.eje}
              onChange={handleChange}
              name='eje'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='S'
              fullWidth
              value={currentPartida.s}
              onChange={handleChange}
              name='s'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Prog'
              fullWidth
              value={currentPartida.prog}
              onChange={handleChange}
              name='prog'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Sp'
              fullWidth
              value={currentPartida.sp}
              onChange={handleChange}
              name='sp'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Obj'
              fullWidth
              value={currentPartida.obj}
              onChange={handleChange}
              name='obj'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Proy'
              fullWidth
              value={currentPartida.proy}
              onChange={handleChange}
              name='proy'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Est'
              fullWidth
              value={currentPartida.est}
              onChange={handleChange}
              name='est'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Obra'
              fullWidth
              value={currentPartida.obra}
              onChange={handleChange}
              name='obra'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ben'
              fullWidth
              value={currentPartida.ben}
              onChange={handleChange}
              name='ben'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Eg'
              fullWidth
              value={currentPartida.eg}
              onChange={handleChange}
              name='eg'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Mi'
              fullWidth
              value={currentPartida.mi}
              onChange={handleChange}
              name='mi'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Pr'
              fullWidth
              value={currentPartida.pr}
              onChange={handleChange}
              name='pr'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Pd'
              fullWidth
              value={currentPartida.pd}
              onChange={handleChange}
              name='pd'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Itrans'
              fullWidth
              value={currentPartida.itrans}
              onChange={handleChange}
              name='itrans'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Min'
              fullWidth
              value={currentPartida.min}
              onChange={handleChange}
              name='min'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Igest'
              fullWidth
              value={currentPartida.igest}
              onChange={handleChange}
              name='igest'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='La'
              fullWidth
              value={currentPartida.la}
              onChange={handleChange}
              name='la'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ods'
              fullWidth
              value={currentPartida.ods}
              onChange={handleChange}
              name='ods'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Et'
              fullWidth
              value={currentPartida.et}
              onChange={handleChange}
              name='et'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ff'
              fullWidth
              value={currentPartida.ff}
              onChange={handleChange}
              name='ff'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Of'
              fullWidth
              value={currentPartida.of}
              onChange={handleChange}
              name='of'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Np'
              fullWidth
              value={currentPartida.np}
              onChange={handleChange}
              name='np'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Cpa'
              fullWidth
              value={currentPartida.cpa}
              name='cpa'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Nombre Proyecto'
              fullWidth
              value={currentPartida.nombreP}
              onChange={handleChange}
              name='nombreP'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Oficio de autorización'
              fullWidth
              value={currentPartida.oficio}
              onChange={handleChange}
              name='oficio'
              required
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Enero'
              fullWidth
              required
              value={currentPartida.enero}
              name='enero'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Febrero'
              fullWidth
              required
              value={currentPartida.febrero}
              name='febrero'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Marzo'
              fullWidth
              required
              value={currentPartida.marzo}
              name='marzo'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Abril'
              fullWidth
              required
              value={currentPartida.abril}
              name='abril'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Mayo'
              fullWidth
              required
              value={currentPartida.mayo}
              name='mayo'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Junio'
              fullWidth
              required
              value={currentPartida.junio}
              name='junio'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Julio'
              fullWidth
              required
              value={currentPartida.julio}
              name='julio'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Agosto'
              fullWidth
              required
              value={currentPartida.agosto}
              name='agosto'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Septiembre'
              fullWidth
              required
              value={currentPartida.septiembre}
              name='septiembre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Octubre'
              fullWidth
              required
              value={currentPartida.octubre}
              name='octubre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Noviembre'
              fullWidth
              required
              value={currentPartida.noviembre}
              name='noviembre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Diciembre'
              fullWidth
              required
              value={currentPartida.diciembre}
              name='diciembre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
              disabled={open}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.btn}>
              <Button variant='outlined' className={classes.btnBack} onClick={actualizarPresupuesto}>Actualizar</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>}
    </div> 
  )
}
