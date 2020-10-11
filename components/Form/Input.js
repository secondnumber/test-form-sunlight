import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";

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
      <FormControl variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <OutlinedInput
      className={classes.input}
      id={name}
      name={name}
      value={value}
      label={label}
      variant="outlined"
      onChange={onChange}
      placeholder={placeholder}
      {...(error && { error: true, helperText: error })}
      />
      </FormControl>
  );
}
