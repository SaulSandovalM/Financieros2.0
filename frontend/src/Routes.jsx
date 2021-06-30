import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// Redux
// import { Provider } from 'react-redux'
// Importaciones
import Login from './components/comun/login/Login'
import TutorialsList from './components/Tutorial-list'
// Material ui
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {
  AccountBalance,
  MonetizationOn,
  FileCopy, Today,
  AccountBalanceWallet,
  Receipt,
  Print,
  Inbox,
  Note,
  ListAlt,
  Folder,
  PlaylistAddCheck,
  FormatListNumbered,
  AssignmentTurnedIn,
  PlaylistAdd
} from '@material-ui/icons'
// tocken
import useToken from './useToken'

const drawerWidth = 240

// Estilos
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default function Routes () {
  const classes = useStyles()
  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Dirección General de Recursos Financieros
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              <ListItemIcon><AccountBalance /></ListItemIcon>
              <ListItemText primary='Presupuesto' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><MonetizationOn /></ListItemIcon>
              <ListItemText primary='Revolvente' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FileCopy /></ListItemIcon>
              <ListItemText primary='Archivos' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Today /></ListItemIcon>
              <ListItemText primary='Registro' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
              <ListItemText primary='Disponible' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PlaylistAdd /></ListItemIcon>
              <ListItemText primary='Contrarecibo' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><Inbox /></ListItemIcon>
              <ListItemText primary='Caja' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Print /></ListItemIcon>
              <ListItemText primary='Arqueo' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Receipt /></ListItemIcon>
              <ListItemText primary='Cheques' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PlaylistAdd /></ListItemIcon>
              <ListItemText primary='Contrarecibo' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Note /></ListItemIcon>
              <ListItemText primary='Vale' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><ListAlt /></ListItemIcon>
              <ListItemText primary='Vales' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Receipt /></ListItemIcon>
              <ListItemText primary='Caratula' />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon><Folder /></ListItemIcon>
              <ListItemText primary='Fondos' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><PlaylistAddCheck /></ListItemIcon>
              <ListItemText primary='Contrarecibo' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><FormatListNumbered /></ListItemIcon>
              <ListItemText primary='Tabular' />
            </ListItem>
            <ListItem button>
              <ListItemIcon><AssignmentTurnedIn /></ListItemIcon>
              <ListItemText primary='Pasa' />
            </ListItem>
          </List>
          <Divider />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Router>
          <Switch>
            <Route exact path='/' component={TutorialsList} />
            <Route exact path='/Prueba' component={TutorialsList} />
          </Switch>
        </Router>
      </main>
    </div>
  )
}
