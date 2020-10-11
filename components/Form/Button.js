import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: '20px 0',
    backgroundColor: '#1EC3AF',
    height: 50,
    borderRadius: 36,
    textTransform: 'none',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#2196F3'
    }
  },
  buttonOutlined: {
    margin: '20px 0',
    height: 50,
    border: '1px solid #1EC3AF',
    borderRadius: 36,
    textTransform: 'none',
    color: '#1EC3AF',
    '&:hover': {
      border: '1px solid #2196F3',
      color: '#2196F3'
    }
  }
}));

export default function Input(props) {
  const { variant, type, text, onClick, width, fullWidth } = props;

  const classes = useStyles();

  return (
    <Button
      className={variant === 'outlined' ? classes.buttonOutlined : classes.button}
      variant={variant}
      type={type}
      onClick={onClick}
      style={{ width: { width } }}
      fullWidth={fullWidth}>
      {text}
    </Button>
  );
}
