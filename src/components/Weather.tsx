import React from 'react'

import { Grid, Typography, makeStyles, Theme } from '@material-ui/core'

import { WeatherData } from '../store/types'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1
  },
  container: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  icon: {
    width: '50px',
    height: '50px'
  }
}))

interface WeatherProps {
  data: WeatherData
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  const classes = useStyles()
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2)
  const celsius = (data.main.temp - 273.15).toFixed(2)

  return (
    <div className={classes.root}>
      <Grid className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h6">{data.weather[0].description}</Typography>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} className={classes.icon} alt="" />
        </Grid>
        <Grid item xs={12}>
          {/* <div className={classes.street}> */}
          <Typography variant="h6">
            {data.name} - {data.sys.country}
          </Typography>
          {/* </div> */}
        </Grid>
        <Grid item xs>
          <Typography variant="h6">°C {celsius}</Typography>
          <Typography variant="h6">°F {fahrenheit}</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Weather
