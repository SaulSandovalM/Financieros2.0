import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// Material ui
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  TableCell,
  TableHead,
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
// Servicios
import PresupuestoDataService from '../../services/Presupuesto'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}))

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

const columns: GridColDef[] = [
  { field: 'up', headerName: 'Up', width: 100 },
  { field: 'ogasto', headerName: 'Partida' },
  { field: 'rubro', headerName: 'Rubro', width: 120 },
  { field: 'enero', headerName: 'Enero', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'febrero', headerName: 'Febrero', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'marzo', headerName: 'Marzo', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'abril', headerName: 'Abril', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'mayo', headerName: 'Mayo', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'junio', headerName: 'Junio', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'julio', headerName: 'Julio', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'agosto', headerName: 'Agosto', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'septiembre', headerName: 'Septiembre', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'octubre', headerName: 'Octubre', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'noviembre', headerName: 'Noviembre', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'diciembre', headerName: 'Diciembre', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }},
  { field: 'total', headerName: 'Total', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }}
]

export default function Disponible () {
  const classes = useStyles()
  const [state, setState] = useState({
    disponible: [],
    currentDisponible: null,
    currentIndex: -1,
    search: ''
  })

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

      {/* Nueva tabla */}
      <Paper>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid 
                rows={state.disponible} 
                columns={columns}
                pagination
                pageSize={20}
                rowsPerPageOptions={[20]}
                autoHeight 
                autoPageSize
                disableSelectionOnClick
              />
            </div>
          </div>
        </div>
      </Paper>

    </div>
  )
}
