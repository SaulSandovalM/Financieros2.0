import React, { useState, useEffect } from 'react'
// Material ui
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Paper } from '@material-ui/core'
// Servicios
import PresupuestoDataService from '../../services/Presupuesto'
import { DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'

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
  { field: 'total', headerName: 'Total', width: 120, type: 'number', valueFormatter: (params) => {
    const valueFormatter = 
      Number(params.value).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      return `$ ${valueFormatter}`
  }}
]

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export default function Disponible () {
  const classes = useStyles()
  const [disponible, setDisponible] = useState([])

  useEffect(() => {
    // Actualiza la API
    PresupuestoDataService.getAll().then(response => {
      setDisponible(
        response.data
      )
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
      <Paper>
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.grow}>
              <DataGrid 
                rows={disponible} 
                columns={columns} 
                pageSize={20}
                rowsPerPageOptions={[20]}
                disableSelectionOnClick
                autoHeight
                autoPageSize
                components={{
                  Toolbar: CustomToolbar
                }}
                localeText={{
                  toolbarExport: 'Exportar',
                  toolbarExportLabel: 'Exportar',
                  toolbarExportCSV: 'Descargar como CSV',
                  columnMenuShowColumns: 'Ver columnas',
                  columnMenuFilter: 'Filtrar', 
                  columnMenuHideColumn: 'Ocultar',
                  columnMenuUnsort: 'Desordenar',
                  columnMenuSortAsc: 'Ordenar Arriba',
                  columnMenuSortDesc: 'Ordenar Abajo',
                  
                }}
              />
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
