import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  input: {
    width: 254,
    height: 57
  }
}));

export default function Input(props) {
  const { name, label, value, onChange, error = null, placeholder } = props;

  const classes = useStyles();

  return (
    <TextField
      className={classes.input}
      name={name}
      label={label}
      value={value}
      variant="outlined"
      onChange={onChange}
      placeholder={placeholder}
      {...(error && { error: true, helperText: error })}
    />
  );
}
