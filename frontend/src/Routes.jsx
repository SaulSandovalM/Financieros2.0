import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
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
// Redux
// import { Provider } from 'react-redux'
// Componentes
// Login
import Login from './components/comun/Login'
import Register from './components/comun/Register'
import Home from './components/comun/Home'
import Profile from './components/comun/Profile'
import BoardUser from './components/comun/BoardUser'
import BoardModerador from './components/comun/BoardModerador'
import BoardAdmin from './components/comun/BoardAdmin'
// Ejemplo
// import TutorialsList from './components/Tutorial-list'
// import AddTutorial from './components/Add-tutorial'
// service
import AuthService from './services/Auth'

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

export default function Routes (props) {
  const classes = useStyles()

  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if (user) {
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setAdminBoard(user.roles.includes('ROLE_ADMIN'))
      setCurrentUser(AuthService.getCurrentUser())
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <Router>
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
            <List>
              {
                showModeratorBoard &&
                  <Link to='/mod'>
                    <ListItem button>
                      <ListItemIcon><FileCopy /></ListItemIcon>
                      <ListItemText primary='Mod' />
                    </ListItem>
                  </Link>
              }
              {
                showAdminBoard &&
                  <Link to='/admin'>
                    <ListItem button>
                      <ListItemIcon><Today /></ListItemIcon>
                      <ListItemText primary='Admin' />
                    </ListItem>
                  </Link>
              }
              {
                currentUser &&
                  <Link to='/user'>
                    <ListItem button>
                      <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
                      <ListItemText primary='User' />
                    </ListItem>
                  </Link>
              }
              {
                currentUser &&
                  <div>
                    <Link to='/profile'>
                      <ListItem button>
                        <ListItemIcon><PlaylistAdd /></ListItemIcon>
                        <ListItemText primary={currentUser.username} />
                      </ListItem>
                    </Link>
                    <a href='/login' onClick={logOut}>
                      <ListItem button>
                        <ListItemIcon><PlaylistAdd /></ListItemIcon>
                        <ListItemText primary='Salir' />
                      </ListItem>
                    </a>
                  </div>
              }
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path={['/', '/home']} component={Home} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/user' component={BoardUser} />
            <Route exact path='/mod' component={BoardModerador} />
            <Route exact path='/admin' component={BoardAdmin} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}
