import React from 'react'

import { Grid, Typography, Avatar } from '@material-ui/core'

import { WeatherData } from '../store/types'

interface WeatherProps {
  data: WeatherData
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2)
  const celsius = (data.main.temp - 273.15).toFixed(2)

  return (
    <Grid container>
      <Grid item xs>
        <Typography variant="h2">{celsius}</Typography>
        <Typography variant="h2">{fahrenheit}</Typography>
        <Typography variant="h2">{data.weather[0].description}</Typography>

        <Avatar>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
        </Avatar>
      </Grid>
    </Grid>
  )
}

export default Weather
