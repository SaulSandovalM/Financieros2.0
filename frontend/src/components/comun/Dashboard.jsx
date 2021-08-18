import React, { useState } from 'react'
import AuthService from '../../services/Auth'
// Material Ui
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import clsx from 'clsx'
import NumberFormat from 'react-number-format'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
// import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const useStyles = makeStyles((theme) => ({
  general: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  fixedHeight: {
    height: 240,
    marginTop: '20px'
  },
  container: {
    maxHeight: 440
  },
  tableWidth: {
    width: '100%'
  },
  paperTableContent: {
    width: '100%',
    height: 'auto',
    padding: '15px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '18px'
  }
}))

const columns = [
  { id: 'fondo', label: 'Fondo', minWidth: '20%', align: 'left' },
  { id: 'fecha', label: 'Fecha', minWidth: '20%', align: 'left' },
  { id: 'tipo', label: 'Tipo', minWidth: '20%', align: 'left' },
  { id: 'oficio', label: 'Oficio', minWidth: '20%', align: 'left'},
  { id: 'cantidad', label: 'Cantidad', minWidth: '20%', align: 'left' }
]

function createDataTable(fondo, fecha, tipo, oficio, cantidad) {
  return { fondo, fecha, tipo, oficio, cantidad }
}

const rows = [
  createDataTable('1', '18/08/2021', 'Fondo Revolvente', 'SFP-CPF-01-0224/2021', 100.00),
  createDataTable('3', '18/08/2021', 'Fondo Revolvente', 'SFP-CPF-01-0224/2021', 2000.00),
  createDataTable('6', '18/08/2021', 'Pago Directo', 'SFP-CPF-01-0224/2021', 100.00),
  createDataTable('9', '18/08/2021', 'Fondo Revolvente', 'SFP-CPF-01-0224/2021', 100.00),
  createDataTable('12', '18/08/2021', 'Pago Directo', 'SFP-CPF-01-0224/2021', 1800.00)
]

function createData (time, amount) {
  return { time, amount }
}

const data = [
  createData('0', 0),
  createData('3', 2),
  createData('6', 10),
  createData('9', 20),
  createData('12', 35),
  createData('15', 40),
  createData('18', 50),
  createData('21', 60),
  createData('24', 0)
]

export default function Profile (props) {
  const [currentUser] = useState(AuthService.getCurrentUser())
  const classes = useStyles()
  const theme = useTheme()
  // const [page, setPage] = useState(0)
  // const [rowsPerPage, setRowsPerPage] = useState(10)

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage)
  // }

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value)
  //   setPage(0)
  // }

  var today = new Date()
  var meses = [
    'Enero', 
    'Febrero', 
    'Marzo', 
    'Abril', 
    'Mayo', 
    'Junio', 
    'Julio', 
    'Agosto', 
    'Septiembre', 
    'Octubre', 
    'Noviembre', 
    'Diciembre'
  ]
  var today2 = today.getDate() + ' de ' + meses[today.getMonth()] + ' del ' + today.getFullYear()

  return (
    <Container maxWidth='lg'>
      <div>
        <Typography className={classes.general} color='textSecondary'>
          VISTA GENERAL
        </Typography>
        <Typography variant='h5' component='h2'>
          Buen día {currentUser.username}
        </Typography>
        <Typography variant='body2' component='p'>
          Productividad
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.title}>Hoy</div>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{
                  top: 16,
                  right: 16,
                  bottom: 0,
                  left: 24
                }}
              >
                <XAxis dataKey='time' stroke={theme.palette.text.secondary} />
                <YAxis stroke={theme.palette.text.secondary}>
                  <Label
                    angle={270}
                    position='left'
                    style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                  >
                    Movimientos
                  </Label>
                </YAxis>
                <Line type='monotone' dataKey='amount' stroke={theme.palette.primary.main} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3}>
          <Paper className={fixedHeightPaper}>
            <div className={classes.title}>Cantidad Trabajada</div>
            <NumberFormat
              value={3024}
              style={{ fontSize: '36px' }}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              renderText={(value, props) => <div {...props}>{value}</div>}
              decimalScale={2}
              decimalSeparator='.'
            />
            <div style={{ fontSize: '16px', color: 'grey' }}>el {today2}</div>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={11} lg={12}>
          <Paper className={classes.paperTableContent}>
            <div className={classes.title}>Fondos Recientes</div>
            <div style={{ width: '100%' }}>
              <TableContainer className={classes.container}>
                <Table stickyHeader arial-label='sticky table'>
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{ minWidth: column.minWidth }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => {
                      return (
                        <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                          {columns.map((column) => {
                            const value = row[column.id]
                            return (
                              <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                              </TableCell>
                            )
                          })}
                        </TableRow>
                      )
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </div> 
          </Paper>
        </Grid>
      </Grid>

      <div style={{ marginTop: '50px' }}>
        {currentUser.accessToken.substring(0, 20)} ...{' '}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </div>
      <div>
        id: {currentUser.id}
      </div>
      <div>
        Email: {currentUser.email}
      </div>
      <div>
        Roles:
        {
          currentUser.roles &&
            currentUser.roles.map((role, index) => <p key={index}>{role}</p>)
        }
      </div>
    </Container>
  )
}
