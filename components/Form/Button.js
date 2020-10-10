import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: 20,
    backgroundColor: '#01BDA7',
    height: 50,
    borderRadius: 36,
    textTransform: 'none',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#2196F3'
    }
  }
}));

export default function Input(props) {
  const { variant, type, text, onClick, width } = props;

  const classes = useStyles();

  return (
    <Button className={classes.button} variant={variant} type={type} onClick={onClick} style={{width: {width}}}>
      {text}
    </Button>
  );
}
