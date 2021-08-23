import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import NumberFormat from 'react-number-format'

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
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
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
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
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

function createData(up, partida, rubro, ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic) {
  return { up, partida, rubro, ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic }
}

const rows = [
  createData('01', 211001, 355001, 1020320, 305, 3.7, 67, 4.3, 123, 123, 123, 123, 123, 123, 123),
  createData('02', 452202, 252020, 51, 4.9, 213, 4132, 123 ,123 ,123 ,123 ,123 ,123 ,123 ,1233),
  createData('03', 262321, 161212, 24, 6.0, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('04', 159321, 612124, 24, 4.0, 111, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('05', 356321, 163434, 49, 3.9, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('06', 408321, 334342, 87, 6.5, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('07', 237123, 234564, 37, 4.3, 234, 234, 234, 234, 234, 234, 234, 234, 234, 234),
  createData('08', 375222, 123456, 94, 0.0, 234, 456, 456, 456, 456, 456, 456 ,456, 456, 456),
  createData('09', 518111, 265656, 65, 7.0, 1123, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('10', 392333, 256567, 98, 0.0, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('11', 318222, 123003, 81, 2.0, 123, 123, 123, 123, 123, 12, 312, 31, 231, 23, 123),
  createData('12', 360123, 192323, 9, 37.0, 123, 123, 123, 123, 123, 123, 123, 123, 123, 123),
  createData('13', 437123, 180454, 63, 4.0, 123, 123, 123, 123, 12, 312, 3123, 123, 123, 123)
]

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
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
  { id: 'total', numeric: true, disablePadding: false, label: 'Total'}
]

function EnhancedTableHead(props) {
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
  rowCount: PropTypes.number.isRequired,
}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  title: {
    flex: '1 1 100%',
  }
}))

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles()

  return (
    <Toolbar>
      <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
        Disponible
      </Typography>
    </Toolbar>
  )
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    overflowX: 'auto'
  },
  table: {
    minWidth: 700,
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
    width: 1,
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
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

  return (
    <Paper className={classes.paper}>
      <EnhancedTableToolbar numSelected={selected.length} />
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
          onSelectAllClick={handleSelectAllClick}
          onRequestSort={handleRequestSort}
          rowCount={rows.length}
        />
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy))
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
                  <TableCell align='right'>{row.partida}</TableCell>
                  <TableCell align='right'>{row.rubro}</TableCell>
                  <TableCell align='right'>
                    $ {row.ene.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.feb.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.mar.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.abr.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.may.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.jun.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.jul.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.ago.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.sep.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.oct.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.nov.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {row.dic.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </TableCell>
                  <TableCell align='right'>
                    $ {(parseFloat(row.ene) + parseFloat(row.feb) + parseFloat(row.mar) + parseFloat(row.abr) + 
                      parseFloat(row.may) + parseFloat(row.jun) + parseFloat(row.jul) + parseFloat(row.ago) + 
                      parseFloat(row.sep) + parseFloat(row.oct) + parseFloat(row.nov) + parseFloat(row.dic)
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage='Filas por pagina:'
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
        ActionsComponent={TablePaginationActions}
      />
    </Paper>
  )
}
