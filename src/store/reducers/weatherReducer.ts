import { WeatherState, GET_WEATHER, SET_LOADING, WeatherAction, SET_ERROR } from '../types'

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: ''
}

export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        data: action.payload,
        loading: false,
        error: ''
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SET_ERROR:
      return {
        data: null,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}
