import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { TextField, Button, makeStyles, Theme } from '@material-ui/core'

import { getWeather } from '../store/actions/weatherActions'

interface ICity {
  city: string
}
const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Search: React.FC = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors, reset } = useForm<ICity>()

  const classes = useStyles()

  const onSubmit = (data: ICity) => {
    dispatch(getWeather(data.city))
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <TextField
          autoFocus
          label="City"
          margin="normal"
          fullWidth
          error={!!errors.city}
          name="city"
          inputRef={register({ required: true })}
        />
        <Button type="submit" fullWidth variant="contained" className={classes.submit}>
          Search
        </Button>
      </form>
    </>
  )
}

export default Search
