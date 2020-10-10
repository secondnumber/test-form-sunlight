import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    margin: '20px'
  }
}));

export function useForm(initialValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    if (validateOnChange) validate({ [name]: value });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  };
}

export function Form(props) {
  const classes = useStyles();

  const { children, ...other } = props;

  return (
    <div>
      <Paper className={classes.paper}>
        <form {...other}>{props.children}</form>
      </Paper>
    </div>
  );
}
