import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import NumberFormat from 'react-number-format'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      padding: theme.spacing(3),
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
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

function One () {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Partida Inicial
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={12}>
          <FormControl fullWidth>
            <InputLabel>Tipo de movimiento</InputLabel>
            <Select
              label='Tipo de movimiento'
              name='movimiento'
            >
              <MenuItem value='Ampliacion'>Ampliación</MenuItem>
              <MenuItem value='Reduccion'>Reduccion</MenuItem>
              <MenuItem value='Transferencia'>Transferencia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Up</InputLabel>
            <Select
              label='Up'
              name='up'
            >
              <MenuItem value='01'>01</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Partida</InputLabel>
            <Select
              label='Partida'
              name='ogasto'
            >
              <MenuItem value='211001'>211001</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Rubro</InputLabel>
            <Select
              label='Rubro'
              name='rubro'
            >
              <MenuItem value='311001'>311001</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField 
            label='Cantidad'
            fullWidth
            InputProps={{
              inputComponent: NumberFormatCustom
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField 
            label='Oficio de autorización'
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Mes</InputLabel>
              <Select
                label='Mes'
                name='mes'
              >
                <MenuItem value='Enero'>Enero</MenuItem>
                <MenuItem value='Febrero'>Febrero</MenuItem>
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
      </Grid>
    </div> 
  )
}

function Two () {
  return (
    <div>
      <Typography variant='h6' gutterBottom>
        Partida Destino
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Up</InputLabel>
            <Select
              label='Up'
              name='up'
            >
              <MenuItem value='01'>01</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Partida</InputLabel>
            <Select
              label='Partida'
              name='ogasto'
            >
              <MenuItem value='211001'>211001</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Rubro</InputLabel>
            <Select
              label='Rubro'
              name='rubro'
            >
              <MenuItem value='311001'>311001</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField 
            label='Cantidad'
            fullWidth
            InputProps={{
              inputComponent: NumberFormatCustom
            }}
            required
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <TextField 
            label='Oficio de autorización'
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth>
            <InputLabel>Mes</InputLabel>
            <Select
              label='Mes'
              name='mes'
            >
              <MenuItem value='Enero'>Enero</MenuItem>
              <MenuItem value='Febrero'>Febrero</MenuItem>
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
      </Grid>
    </div> 
  )
}

function Three () {
  const classes = useStyles()
  return (
    <div>
     <Typography variant='h6' gutterBottom>
        Resumen de Transferencia
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem} key=''>
          <ListItemText primary='Partida 1' secondary='Up 1' />
          <Typography variant='body2'>- $100.00</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <List disablePadding>
        <ListItem className={classes.listItem} key=''>
          <ListItemText primary='Partida 2' secondary='Up 2' />
          <Typography variant='body2'>+ $100.00</Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary='Total' />
          <Typography variant='subtitle1' className={classes.total}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>Usuario</Typography>
          <Typography gutterBottom>Escriba su texto</Typography>
        </Grid>
        <Grid item container direction='column' xs={12} sm={6}>
          <Typography variant='h6' gutterBottom className={classes.title}>
            Detalle de movimiento
          </Typography>
          <Grid container>
            <React.Fragment key=''>
              <Grid item xs={6}>
                <Typography gutterBottom>Usuario</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>Detalles</Typography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      </Grid> 
    </div>
  )
}

const steps = ['Partida inicial', 'Partida destino', 'Resumen de transferencia']

function getStepContent (step) {
  switch (step) {
    case 0:
      return <One />
    case 1: 
      return <Two />
    case 2: 
      return <Three />
    default: 
      throw new Error('Paso desconocido')
  }
}

export default function Transferencia () {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component='h1' variant='h4' align='center'>
          Movimientos y Transferencia
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant='h5' gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant='subtitle1'>
                Se ha realizado la transferencia de manera axitosa.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Atras
                  </Button>
                )}
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Realizar Transferencia' : 'Siguiente'}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </div>
  )
} 
