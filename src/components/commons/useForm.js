import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name]: value,
    })
  }
  return {
    values,
    setValues,
    handleInputChange
  }
}

const useStyle = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(2)
    }
  }
}))

export function Form(props) {
  const { onSubmit, children } = props
  const classes = useStyle()
  return (
    <form className={classes.root} onSubmit={onSubmit}>
      {children}
    </form>
  )
}
