import React, { useRef } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import escudo from '../imgs/escudo.png'
import hidalgo from '../imgs/hidalgo.png'
import Button from '@material-ui/core/Button' 
import ReactToPrint from 'react-to-print'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
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
  valeContainer: {
    width: '100%',
    height: 'auto',
    border: 'solid 2px #000'
  },
  logosContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  valeHeader: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  divContentL: {
    width: '33.3%',
    display: 'flex'
  },
  divContentR: {
    width: '66.6%'
  },
  importe: {
    width: '50%',
    borderRight: 'solid 2px #000',
    textAlign: 'center'
  },
  concepto: {
    width: '100%',
    textAlign: 'center'
  },
  textImporte: {
    borderBottom: 'solid 2px #000',
    paddingTop: '9px',
    paddingBottom: '9px'
  },
  inputImporte: {
    width: '100%',
    elevation: 'none',
    borderBottom: 'solid 2px #000',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    paddingTop: '9px',
    paddingBottom: '9px',
    height: '40px',
    textAlign: 'center'
  },
  noContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    borderBottom: 'solid 2px #000'
  },
  direction: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputNo: {
    border: 'none',
    fontSize: '14px'
  },
  input: {
    display: 'flex',
  },
  hidalgo: {
    height: '50px',
    width: 'auto'
  },
  escudo: {
    height: '60px',
    width: 'auto'
  },
  imgContent: {
    width: '160px',
    height: 'auto',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  marginT: {
    marginTop: '2px'
  },
  procaja: {
    textAlign: 'center',
    borderBottom: 'solid 2px #000',
    paddingTop: '10px',
    paddingBottom: '10px',
    fontWeight: 'bold',
    width: '100%'
  },
  conceptoText: {
    width: '100%',
    height: '80px',
    borderBottom: 'solid 2px #000',
    borderRight: 'none',
    borderLeft: 'none',
    borderTop: 'none',
    textAlign: 'center'
  },
  conceptoFoo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  fooTitle: {
    height: '17px',
    borderBottom: 'solid 2px #000',
    textAlign: 'center',
    padding: 0
  },
  fooTitleArea: {
    width: '65%',
    borderRight: 'solid 2px #000'
  },
  fooTitleTurno: {
    width: '10%'
  },
  fooTitleOficio: {
    width: '25%',
    borderRight: 'solid 2px #000'
  },
  inputFoo: {
    height: '18px',
    width: '100%',
    border: 'none',
    borderBottom: 'solid 2px #000',
    textAlign: 'center'
  },
  lastInput: {
    height: '18px',
    width: '100%',
    border: 'none',
    textAlign: 'center'
  },
  lastContent: {
    width: '33.3%',
    borderLeft: 'solid 2px #000',
    borderBottom: 'solid 2px #000'
  },
  firmasContent: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '60px'
  },
  firma: {
    width: '20%',
    textAlign: 'center'
  },
  firmaBorder: {
    borderTop: 'solid 2px #000',
    marginBottom: '15px'
  },
  nota: {
    borderTop: 'solid 2px #000',
    textAlign: 'center',
    fontSize: '8px'
  },
  btn: {
    margin: theme.spacing(1)
  }
}))

export default function Vales () {
  const classes = useStyles()

  const componentRef = useRef()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div>
      <div className={classes.container}>
        <div className={classes.title}>Vale</div>
        <ReactToPrint 
          trigger={() => <Button variant='outlined'>Imprimir</Button>}
          content={() => componentRef.current}
        />
      </div> 
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper} ref={componentRef}>
            <div className={classes.valeContainer}>
              <div className={classes.logosContent}>
                <img className={classes.hidalgo} src={hidalgo} alt='' />
                <div className={classes.valeHeader}>
                  PROCURADURIA GENERAL DE JUSTICIA <br/>
                  DIRECCION GENERAL DE ADMINISTRACION Y FINANZAS <br />
                  DIRECCION DE RECURSOS FINANCIEROS
                </div>
                <div className={classes.imgContent}>
                  <img className={classes.escudo} src={escudo} alt='' />
                </div>
              </div>
              <div className={classes.noContent}>
                <div className={classes.direction}>
                  <div className={classes.input}>
                    <div className={classes.marginT}>No. Cheque:</div>
                    <input className={classes.inputNo} />
                  </div>
                  <div className={classes.input}>
                    <div className={classes.marginT}>No. Vale:</div>
                    <input className={classes.inputNo}/>
                  </div>
                </div>
              </div>
              <div className={classes.procaja}>
                VALE PROVISIONAL DE CAJA
              </div>
              <div className={classes.logosContent}>
                <div className={classes.divContentL}>
                  <div className={classes.importe}>
                    <div className={classes.textImporte}><b>MOVIMIENTO</b></div>
                    <div className={classes.textImporte}>Autorizo</div>
                    <div className={classes.textImporte}>Comprobado</div>
                    <div className={classes.textImporte}>Rein/Reem</div>
                  </div>
                  <div className={classes.importe}>
                    <div className={classes.inputImporte}><b>CANTIDAD</b></div>
                    <input className={classes.inputImporte} />
                    <input className={classes.inputImporte} />
                    <input className={classes.inputImporte} />
                  </div>
                </div>
                <div className={classes.divContentR}>
                  <div className={classes.concepto}>
                    <div className={classes.textImporte}><b>CONCEPTO</b></div>
                  </div>
                  <textarea className={classes.conceptoText} />
                  <div className={classes.conceptoFoo}>
                    <div className={classes.fooTitleOficio}>
                      <div className={classes.fooTitle}>Oficio de solicitud</div>
                      <input className={classes.inputFoo} />
                    </div>
                    <div className={classes.fooTitleArea}>
                      <div className={classes.fooTitle}>Área</div>
                      <input className={classes.inputFoo} />
                    </div>
                    <div className={classes.fooTitleTurno}>
                      <div className={classes.fooTitle}>Turno</div>
                      <input className={classes.inputFoo} />
                    </div>
                  </div>
                </div>
              </div> 
              <div className={classes.logosContent}>
                <div className={classes.divContentL} />
                <div className={classes.divContentR}>
                  <div className={classes.conceptoFoo}>
                    <div className={classes.lastContent}>
                      <div className={classes.fooTitle}>Facturas</div>
                      <input className={classes.lastInput} />
                    </div>
                    <div className={classes.lastContent}>
                      <div className={classes.fooTitle}>Recibos</div>
                      <input className={classes.lastInput} />
                    </div>
                    <div className={classes.lastContent}>
                      <div className={classes.fooTitle}>S/C</div>
                      <input className={classes.lastInput} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.firmasContent}>
                <div className={classes.firma}>
                  <div>27-Ago-2021</div>
                  <div className={classes.firmaBorder}>Fecha</div>
                </div>
                <div className={classes.firma}>
                  <div>Nayra</div>
                  <div className={classes.firmaBorder}>Autorizó</div>
                </div>
                <div className={classes.firma}>
                  <div>Saul</div>
                  <div className={classes.firmaBorder}>Recibio</div>
                </div>
              </div>
              <div className={classes.nota}>
                <div>
                  Me comprometo a entregar la comprobación que ampara el presente vale en un plazo no mayor 
                  a 5 dias habiles posteriosres a la fecha de recibido, de lo contrario reintegrare el recurso 
                  por la cantidad sin comprobar.
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
