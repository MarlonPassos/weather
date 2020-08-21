import { ThunkAction } from 'redux-thunk'
import axios from 'axios'

import { GET_WEATHER, WeatherAction, SET_LOADING, SET_ERROR, WeatherData, WeatherError } from '../types'

import { RootSstate } from '..'

export const getWeather = (city: string): ThunkAction<void, RootSstate, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      )
      dispatch({
        type: GET_WEATHER,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: SET_ERROR,
        payload: err.message
      })
    }
  }
}

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING
  }
}

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: ''
  }
}
