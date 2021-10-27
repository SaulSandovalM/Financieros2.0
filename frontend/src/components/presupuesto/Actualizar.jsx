import React, { useState, useEffect } from 'react'
// Material ui
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
// Servicios
import PresupuestoDataService from '../../services/Presupuesto'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 200,
    width: '100%'
  },
  content: {
    display: 'flex',
    height: '100%'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    marginBottom: '20px'
  }
}))

const columns: GridColDef[] = [
  { field: 'up', headerName: 'Up', width: 120 },
  { field: 'ogasto', headerName: 'Partida', width: 120 },
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
  { field: 'editar', headerName: 'Editar', width: 120, renderCell: (params) => (
      <IconButton>
        <EditIcon />
      </IconButton>
    )
  }
]

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.slice(page * 20, (page + 1) * 20));
    }, Math.random() * 500 + 100) // simulate network latency
  })
}

export default function Actualizar (props) {
  const classes = useStyles()
  const [presupuesto, setPresupuesto] = useState([])
  const [page, setPage] = useState(0)
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    PresupuestoDataService.getAll().then(response => {
      setPresupuesto(response.data)
      // console.log(response.data)
    }).catch(e => {
      console.log(e)
    }) 
  }, [])

  useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true)
      const newRows = await loadServerRows(page, presupuesto)
      if (!active) {
        return
      }
      setRows(newRows)
      setLoading(false)
    })()

    return () => {
      active = false
    }
  }, [page, presupuesto])

  const setActivePartida = (partida) => {
    props.history.push('/presupuesto/' + partida)
  }

  return (
    <div>
      <Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
        Actualizar
      </Typography>
      <Paper>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.grow}>
              <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={20}
                rowsPerPageOptions={[20]}
                noRowsLabel='No hay datos'
                disableColumnFilter
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
                autoHeight
                autoPageSize
                onRowClick={(presupuesto) => setActivePartida(presupuesto.id)}
                pagination
                paginationMode='server'
                onPageChange={(newPage) => setPage(newPage)}
                loading={loading}
                rowCount={presupuesto.length}
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
