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
    height: 240
  }
}))

function createData (time, amount) {
  return { time, amount }
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined)
]

export default function Profile (props) {
  const [currentUser] = useState(AuthService.getCurrentUser())
  const classes = useStyles()
  const theme = useTheme()

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Container maxWidth='lg'>
      <div>
        <Typography className={classes.general} color='textSecondary'>
          VISTA GENERAL
        </Typography>
        <Typography variant='h5' component='h2'>
          Buen dia {currentUser.username}
        </Typography>
        <Typography variant='body2' component='p'>
          Esto es lo que está sucediendo con tu presupuesto hoy
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
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
                    Sales ($)
                  </Label>
                </YAxis>
                <Line type='monotone' dataKey='amount' stroke={theme.palette.primary.main} dot={false} />
              </LineChart>
            </ResponsiveContainer>
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
