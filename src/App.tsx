import React from 'react'
import { useSelector } from 'react-redux'

import { CssBaseline, Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Theme, makeStyles } from '@material-ui/core/styles'

import Search from './components/Search'
import Weather from './components/Weather'
import { RootState } from './store'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}))

const App: React.FC = () => {
  const classes = useStyles()
  const weatherData = useSelector((state: RootState) => state.weather.data)
  const loading = useSelector((state: RootState) => state.weather.loading)
  const error = useSelector((state: RootState) => state.weather.error)

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Search title="Weather" />
        {loading ? <Typography variant="h3">Loading...</Typography> : weatherData && <Weather data={weatherData} />}
        {error && <Typography variant="h3">City not found</Typography>}
      </div>
    </Container>
  )
}

export default App
