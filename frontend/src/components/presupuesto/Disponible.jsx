import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// Material ui
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
  IconButton
} from '@material-ui/core'
// Iconos
import {
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  LastPage
} from '@material-ui/icons'
import NumberFormat from 'react-number-format'
// Servicios
import PresupuestoDataService from '../../services/Presupuesto'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}))

function TablePaginationActions (props) {
  const classes = useStyles1()
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label='previous page'>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPage /> : <LastPage />}
      </IconButton>
    </div>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}

function descendingComparator (a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator (order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort (array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

const headCells = [
  { id: 'up', numeric: false, disablePadding: false, label: 'Up' },
  { id: 'partida', numeric: true, disablePadding: false, label: 'Partida' },
  { id: 'rubro', numeric: true, disablePadding: false, label: 'Rubro' },
  { id: 'ene', numeric: true, disablePadding: false, label: 'Enero' },
  { id: 'feb', numeric: true, disablePadding: false, label: 'Febrero' },
  { id: 'mar', numeric: true, disablePadding: false, label: 'Marzo' },
  { id: 'abr', numeric: true, disablePadding: false, label: 'Abril' },
  { id: 'may', numeric: true, disablePadding: false, label: 'Mayo' },
  { id: 'jun', numeric: true, disablePadding: false, label: 'Junio' },
  { id: 'jul', numeric: true, disablePadding: false, label: 'Julio' },
  { id: 'ago', numeric: true, disablePadding: false, label: 'Agosto' },
  { id: 'sep', numeric: true, disablePadding: false, label: 'Septiembre' },
  { id: 'oct', numeric: true, disablePadding: false, label: 'Octubre' },
  { id: 'nov', numeric: true, disablePadding: false, label: 'Noviembre' },
  { id: 'dic', numeric: true, disablePadding: false, label: 'Diciembre' },
  { id: 'total', numeric: true, disablePadding: false, label: 'Total' }
]

function EnhancedTableHead (props) {
  const { classes, order, orderBy, onRequestSort } = props

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding='normal'
            sortDirection={orderBy === headCell.id ? order : false}
            align='right'
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1
  },
  title: {
    marginBottom: '20px'
  }
}))

function NumberFormatCustom (props) {
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

export default function Disponible () {
  const classes = useStyles()
  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState('up')
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [state, setState] = useState({
    disponible: [],
    currentDisponible: null,
    currentIndex: -1,
    search: ''
  })

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name)
    let newSelected = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    // Actualiza la API
    PresupuestoDataService.getAll().then(response => {
      setState({
        disponible: response.data
      })
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])

  return (
    <div>
      <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
        Disponible
      </Typography>
      <Paper className={classes.paper}>
        <Table
          className={classes.table}
          aria-labelledby='tableTitle'
          aria-label='enhanced table'
        >
          <EnhancedTableHead
            classes={classes}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={state.disponible.length}
          />
          <TableBody>
            {stableSort(state.disponible, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.up)}
                    tabIndex={-1}
                    key={row}
                  >
                    <TableCell align='right'>{row.up}</TableCell>
                    <TableCell align='right'>{row.ogasto}</TableCell>
                    <TableCell align='right'>{row.rubro}</TableCell>
                    <TableCell align='right'>
                      $ {row.enero.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.febrero.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.marzo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.abril.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.mayo.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.junio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.julio.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.agosto.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.septiembre.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.octubre.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.noviembre.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {row.diciembre.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell align='right'>
                      $ {(parseFloat(row.enero) + parseFloat(row.febrero) + parseFloat(row.marzo) +
                          parseFloat(row.abril) + parseFloat(row.mayo) + parseFloat(row.junio) +
                          parseFloat(row.julio) + parseFloat(row.agosto) + parseFloat(row.septiembre) +
                          parseFloat(row.octubre) + parseFloat(row.noviembre) + parseFloat(row.diciembre)
                        ).toLocaleString('en-US', {minimumFractionDigits: 2,maximumFractionDigits: 2})}
                    </TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'Todo', value: -1 }]}
          component='div'
          count={state.disponible.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage='Filas por pagina:'
          labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
          ActionsComponent={TablePaginationActions}
        />
      </Paper>
    </div>
  )
}
