import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// Material ui
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
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
import IconButton from '@material-ui/core/IconButton'
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
  PlaylistAdd,
  Menu,
  ChevronLeft,
  ChevronRight
} from '@material-ui/icons'
// Redux
// import { Provider } from 'react-redux'
// Componentes
// Login
import Login from './components/comun/Login'
import Register from './components/comun/Register'
import Dashboard from './components/comun/Dashboard'
import BoardFondo from './components/comun/BoardFondo'
import BoardManager from './components/comun/BoardManager'
import BoardDirector from './components/comun/BoardDirector'
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
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: '#07131f'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necesario para que el contenido esté debajo de la barra
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  linkDecoration: {
    textDecoration: 'none',
    color: 'black'
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

export default function Routes (props) {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = useState(false)
  const [showFondoBoard, setFondoBoard] = useState(false)
  const [showTesoreriaBoard, setTesoreriaBoard] = useState(false)
  const [showPresupuestoBoard, setPresupuestoBoard] = useState(false)
  const [showValidacionBoard, setValidacionBoard] = useState(false)
  const [showAdminBoard, setAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  const handleDrawerOpen = () => {
    if (
      currentUser || 
      showFondoBoard || 
      showTesoreriaBoard || 
      showPresupuestoBoard || 
      showValidacionBoard || 
      showAdminBoard
    ) {
      setOpen(true)
    }
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const user = AuthService.getCurrentUser()
    if (user) {
      setCurrentUser(AuthService.getCurrentUser())
      setFondoBoard(user.roles.includes('ROLE_FONDOS'))
      setTesoreriaBoard(user.roles.includes('ROLE_TESORERIA'))
      setPresupuestoBoard(user.roles.includes('ROLE_PRESUPUESTO'))
      setValidacionBoard(user.roles.includes('ROLE_VALIDACION'))
      setAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
            >
              <Menu />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
               Dirección de Recursos Financieros
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider />
          {
            showPresupuestoBoard &&
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
          }
          {
            showTesoreriaBoard &&
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
          }
          {
            showFondoBoard &&
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
          }
          <List>
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
                  <Link to='/profile' className={classes.linkDecoration}>
                    <ListItem button>
                      <ListItemIcon><PlaylistAdd /></ListItemIcon>
                      <ListItemText primary='Perfil' />
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
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/profile' component={Dashboard} />
            <Route exact path='/' component={Login} />
            <Route exact path='/user' component={BoardFondo} />
            <Route exact path='/mod' component={BoardManager} />
            <Route exact path='/admin' component={BoardDirector} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}
