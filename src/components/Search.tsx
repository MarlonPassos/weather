import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { TextField, Typography, Button, makeStyles, Theme } from '@material-ui/core'

import { getWeather } from '../store/actions/weatherActions'

interface SearchProps {
  title: string
}
interface ICity {
  city: string
}
const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Search: React.FC<SearchProps> = ({ title }) => {
  const dispatch = useDispatch()
  const { register, handleSubmit, errors } = useForm<ICity>()

  const classes = useStyles()

  const onSubmit = (data: ICity, e: any) => {
    dispatch(getWeather(data.city))
    e.target.reset()
  }

  return (
    <>
      <Typography variant="h4">{title}</Typography>
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
