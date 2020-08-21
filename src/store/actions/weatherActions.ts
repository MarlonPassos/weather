import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { GET_WEATHER, WeatherAction, SET_LOADING, SET_ERROR, WeatherData, WeatherError } from '../types'

import { RootState } from '..'

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    dispatch(setLoading())
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      )
      dispatch(getWeatherLocal(res.data))
    } catch (err) {
      dispatch(setError(err))
    }
  }
}

const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

const setError = (err: WeatherError): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: err.message
  }
}

const getWeatherLocal = (data: WeatherData): WeatherAction => {
  return {
    type: GET_WEATHER,
    payload: data
  }
}
