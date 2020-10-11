import React from 'react';
import ReactPhoneInput from 'react-phone-input-material-ui';
import { TextField, withStyles } from '@material-ui/core';
import Input from './Input';

const styles = (theme) => ({
  field: {
    margin: '10px 0'
  },
  countryList: {
    ...theme.typography.body1
  }
});

function PhoneField(props) {
  const { value, onChange, classes } = props;

  return (
    <React.Fragment>
      <ReactPhoneInput
        variant="outlined"
        placeholder="Укажите номер телефона"
        value={value}
        defaultCountry="ru"
        onChange={onChange}
        inputClass={classes.field}
        dropdownClass={classes.countryList}
        component={TextField}
      />
    </React.Fragment>
  );
}

export default withStyles(styles)(PhoneField);
