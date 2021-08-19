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
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'
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
  ChevronLeft,
  ChevronRight,
  More,
  Notifications,
  Mail,
  AccountCircle
} from '@material-ui/icons'
import perfil from './components/imgs/yo.jpeg'
// Redux
// import { Provider } from 'react-redux'
// Componentes
import Login from './components/comun/Login'
import Register from './components/comun/Register'
import Perfil from './components/comun/Perfil'
import BoardFondo from './components/comun/BoardFondo'
import BoardManager from './components/comun/BoardManager'
import BoardDirector from './components/comun/BoardDirector'
// Fondos
import Fondos from './components/fondos/Fondos'
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
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  }
}))

export default function Routes (props) {
  const classes = useStyles()
  const theme = useTheme()
  // States
  const [open, setOpen] = useState(false)
  const [showFondoBoard, setFondoBoard] = useState(false)
  const [showTesoreriaBoard, setTesoreriaBoard] = useState(false)
  const [showPresupuestoBoard, setPresupuestoBoard] = useState(false)
  const [showValidacionBoard, setValidacionBoard] = useState(false)
  const [showAdminBoard, setAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  // Funciones
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

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  // Components
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/perfil' className={classes.linkDecoration}> 
        <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      </Link>
      <Link to='/login' onClick={logOut} className={classes.linkDecoration}>
        <MenuItem onClick={handleMenuClose}>Cerrar Sesión</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label='show 4 new mails' color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <Mail />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label='show 11 new notifications' color='inherit'>
          <Badge badgeContent={11} color='secondary'>
            <Notifications />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

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
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
              Dirección de Recursos Financieros
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar src={perfil} className={classes.small} alt='' />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <More />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
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
                <Link to='/Fondos' className={classes.linkDecoration}>
                  <ListItem button>
                    <ListItemIcon><Folder /></ListItemIcon>
                    <ListItemText primary='Fondos' />
                  </ListItem>
                </Link>
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
            {/*
              currentUser &&
                <Link to='/user'>
                  <ListItem button>
                    <ListItemIcon><AccountBalanceWallet /></ListItemIcon>
                    <ListItemText primary='Fondos' />
                  </ListItem>
                </Link>
            */}
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
            <Route exact path='/perfil' component={Perfil} />
            <Route exact path='/' component={Login} />
            <Route exact path='/Fondos' component={Fondos} />
            <Route exact path='/user' component={BoardFondo} />
            <Route exact path='/mod' component={BoardManager} />
            <Route exact path='/admin' component={BoardDirector} />
          </Switch>
        </main>
      </div>
    </Router>
  )
}
