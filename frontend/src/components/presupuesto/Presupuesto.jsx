import React, { useState } from 'react'
// Material Ui
import { 
  Button, 
  Grid, 
  Paper, 
  TextField,
  Snackbar
} from '@material-ui/core'
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

export default function Presupuesto (props) {
  // States
  const classes = useStyles() 
  const [state, setState] = useState({
    id: null,
    year: '',
    rm: '',
    ur: '',
    up: '',
    rubro: '',
    tg: '',
    ogasto: '',
    f: '',
    fu: '',
    sf: '',
    eje: '',
    s: '',
    prog: '',
    sp: '',
    obj: '',
    proy: '',
    est: '',
    obra: '',
    ben: '',
    eg: '',
    mi: '',
    pr: '',
    pd: '',
    itrans: '',
    min: '',
    igest: '',
    la: '',
    ods: '',
    et: '',
    ff: '',
    of: '',
    np: '',
    cpa: '',
    nombreP: '',
    enero: 0,
    febrero: 0,
    marzo: 0,
    abril: 0,
    mayo: 0,
    junio: 0,
    julio: 0,
    agosto: 0,
    septiembre: 0,
    octubre: 0,
    noviembre: 0,
    diciembre: 0
  })
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [sever, setSever] = useState('')

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
    
  // funciones
  const handleChange = (event) => {
    const value = event.target.value
    setState({
      ...state, [event.target.name]: value
    })
  }

  const savePresupuesto = (e) => {
    var data = {
      year: state.year,
      rm: state.rm,
      ur: state.ur,
      up: state.up,
      rubro: state.rubro,
      tg: state.tg,
      ogasto: state.ogasto,
      f: state.f,
      fu: state.fu,
      sf: state.sf,
      eje: state.eje,
      s: state.s,
      prog: state.prog,
      sp: state.sp,
      obj: state.obj,
      proy: state.proy,
      est: state.est,
      obra: state.obra,
      ben: state.ben,
      eg: state.eg,
      mi: state.mi,
      pr: state.pr,
      pd: state.pd,
      itrans: state.itrans,
      min: state.min,
      igest: state.igest,
      la: state.la,
      ods: state.ods,
      et: state.et,
      ff: state.ff,
      of: state.of,
      np: state.np,
      cpa: state.cpa,
      nombreP: state.nombreP,
      enero: state.enero,
      febrero: state.febrero,
      marzo: state.marzo,
      abril: state.abril,
      mayo: state.mayo,
      junio: state.junio,
      julio: state.julio,
      agosto: state.agosto,
      septiembre: state.septiembre,
      octubre: state.octubre,
      noviembre: state.noviembre,
      diciembre: state.diciembre
    }
    
    PresupuestoDataService.create(data).then(response => {
      setState({
        id: null,
        year: '',
        rm: '',
        ur: '',
        up: '',
        rubro: '',
        tg: '',
        ogasto: '',
        f: '',
        fu: '',
        sf: '',
        eje: '',
        s: '',
        prog: '',
        sp: '',
        obj: '',
        proy: '',
        est: '',
        obra: '',
        ben: '',
        eg: '',
        mi: '',
        pr: '',
        pd: '',
        itrans: '',
        min: '',
        igest: '',
        la: '',
        ods: '',
        et: '',
        ff: '',
        of: '',
        np: '',
        cpa: '',
        nombreP: '',
        enero: 0,
        febrero: 0,
        marzo: 0,
        abril: 0,
        mayo: 0,
        junio: 0,
        julio: 0,
        agosto: 0,
        septiembre: 0,
        octubre: 0,
        noviembre: 0,
        diciembre: 0
      })
      setSever('success')
      setMessage('Carga exitosa')
      setOpen(true)
    }).catch(e => {
      const resMessage = ((e.response && e.response.data && e.response.data.message) || e.message || e.toString())
      setSever('error')
      setMessage(resMessage)
      setOpen(true)
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const cpa = state.year + '-' + state.rm + '-' + state.ur + '-' + state.up + '-' + state.rubro + '-' + state.tg +
            '-' + state.ogasto + '-' + state.f + '-' + state.fu + '-' + state.sf + '-' + state.eje + '-' + state.s +
            '-' + state.prog + '-' + state.sp + '-' + state.obj + '-' + state.proy + '-' + state.est +
            '-' + state.obra + '-' + state.ben + '-' + state.eg + '-' + state.mi + '-' + state.pr + '-' + state.pd +
            '-' + state.itrans + '-' + state.min + '-' +state.igest + '-' + state.la + '-' + state.ods +
            '-' + state.et + '-' + state.ff + '-' + state.of + '-' + state.np

  state.cpa = cpa

  return (
    <div>
      <div className={classes.title}>Presupuesto</div>
      <Snackbar 
        open={open} 
        autoHideDuration={5000} 
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
      <Paper className={fixedHeightPaper}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Año'
              variant='outlined'
              fullWidth
              value={state.year}
              onChange={handleChange}
              name='year'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Rm'
              variant='outlined'
              fullWidth
              value={state.rm}
              onChange={handleChange}
              name='rm'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ur'
              variant='outlined'
              fullWidth
              value={state.ur}
              onChange={handleChange}
              name='ur'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Up'
              variant='outlined'
              fullWidth
              value={state.up}
              onChange={handleChange}
              name='up'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Rubro'
              variant='outlined'
              fullWidth
              value={state.rubro}
              onChange={handleChange}
              name='rubro'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Tg'
              variant='outlined'
              fullWidth
              value={state.tg}
              onChange={handleChange}
              name='tg'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ogasto'
              variant='outlined'
              fullWidth
              value={state.ogasto}
              onChange={handleChange}
              name='ogasto'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='F'
              variant='outlined'
              fullWidth
              value={state.f}
              onChange={handleChange}
              name='f'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Fu'
              variant='outlined'
              fullWidth
              value={state.fu}
              onChange={handleChange}
              name='fu'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Sf'
              variant='outlined'
              fullWidth
              value={state.sf}
              onChange={handleChange}
              name='sf'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Eje'
              variant='outlined'
              fullWidth
              value={state.eje}
              onChange={handleChange}
              name='eje'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='S'
              variant='outlined'
              fullWidth
              value={state.s}
              onChange={handleChange}
              name='s'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Prog'
              variant='outlined'
              fullWidth
              value={state.prog}
              onChange={handleChange}
              name='prog'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Sp'
              variant='outlined'
              fullWidth
              value={state.sp}
              onChange={handleChange}
              name='sp'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Obj'
              variant='outlined'
              fullWidth
              value={state.obj}
              onChange={handleChange}
              name='obj'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Proy'
              variant='outlined'
              fullWidth
              value={state.proy}
              onChange={handleChange}
              name='proy'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Est'
              variant='outlined'
              fullWidth
              value={state.est}
              onChange={handleChange}
              name='est'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Obra'
              variant='outlined'
              fullWidth
              value={state.obra}
              onChange={handleChange}
              name='obra'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ben'
              variant='outlined'
              fullWidth
              value={state.ben}
              onChange={handleChange}
              name='ben'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Eg'
              variant='outlined'
              fullWidth
              value={state.eg}
              onChange={handleChange}
              name='eg'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Mi'
              variant='outlined'
              fullWidth
              value={state.mi}
              onChange={handleChange}
              name='mi'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Pr'
              variant='outlined'
              fullWidth
              value={state.pr}
              onChange={handleChange}
              name='pr'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Pd'
              variant='outlined'
              fullWidth
              value={state.pd}
              onChange={handleChange}
              name='pd'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Itrans'
              variant='outlined'
              fullWidth
              value={state.itrans}
              onChange={handleChange}
              name='itrans'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Min'
              variant='outlined'
              fullWidth
              value={state.min}
              onChange={handleChange}
              name='min'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Igest'
              variant='outlined'
              fullWidth
              value={state.igest}
              onChange={handleChange}
              name='igest'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='La'
              variant='outlined'
              fullWidth
              value={state.la}
              onChange={handleChange}
              name='la'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ods'
              variant='outlined'
              fullWidth
              value={state.ods}
              onChange={handleChange}
              name='ods'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Et'
              variant='outlined'
              fullWidth
              value={state.et}
              onChange={handleChange}
              name='et'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Ff'
              variant='outlined'
              fullWidth
              value={state.ff}
              onChange={handleChange}
              name='ff'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Of'
              variant='outlined'
              fullWidth
              value={state.of}
              onChange={handleChange}
              name='of'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Np'
              variant='outlined'
              fullWidth
              value={state.np}
              onChange={handleChange}
              name='np'
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Cpa'
              variant='outlined'
              fullWidth
              value={cpa}
              name='cpa'
              required
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField 
              label='Nombre Proyecto'
              variant='outlined'
              fullWidth
              value={state.nombreP}
              onChange={handleChange}
              name='nombreP'
              required
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Enero'
              variant='outlined'
              fullWidth
              required
              value={state.enero}
              name='enero'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Febrero'
              variant='outlined'
              fullWidth
              required
              value={state.febrero}
              name='febrero'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Marzo'
              variant='outlined'
              fullWidth
              required
              value={state.marzo}
              name='marzo'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Abril'
              variant='outlined'
              fullWidth
              required
              value={state.abril}
              name='abril'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Mayo'
              variant='outlined'
              fullWidth
              required
              value={state.mayo}
              name='mayo'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Junio'
              variant='outlined'
              fullWidth
              required
              value={state.junio}
              name='junio'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Julio'
              variant='outlined'
              fullWidth
              required
              value={state.julio}
              name='julio'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Agosto'
              variant='outlined'
              fullWidth
              required
              value={state.agosto}
              name='agosto'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Septiembre'
              variant='outlined'
              fullWidth
              required
              value={state.septiembre}
              name='septiembre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Octubre'
              variant='outlined'
              fullWidth
              required
              value={state.octubre}
              name='octubre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Noviembre'
              variant='outlined'
              fullWidth
              required
              value={state.noviembre}
              name='noviembre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <TextField 
              label='Diciembre'
              variant='outlined'
              fullWidth
              required
              value={state.diciembre}
              name='diciembre'
              onChange={handleChange}
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <div className={classes.btn}>
              <Button variant='outlined' className={classes.btnBack} onClick={savePresupuesto}>Enviar</Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
