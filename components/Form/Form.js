import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Button from '@material-ui/core/Button';
import styles from './Form.module.css';
import { useState } from 'react';
import SubmitModal from '../SubmitModal/SubmitModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import { dataAPI } from '../../utils/api';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    margin: '0 20px'
  }
}));

export default function Form({ name, email, phone }) {
  const [submitMode, setSubmitMode] = useState(false);
  const [successMode, setSuccessMode] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleOpenSubmit = (e) => {
    e.preventDefault();
    setSubmitMode(true);
  };

  const handleClose = () => {
    setSubmitMode(false);
  };

  const handleSubmit = () => {
    dataAPI.postFormData(
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 111
      })
    );
    setSubmitMode(false);
    setSuccessMode(true);
  };

  const handleCancel = () => {
    console.log('cancel');
    setSubmitMode(false);
  };

  const handleEnd = () => {
    setSuccessMode(false);
  };

  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <form
              onSubmit={(e) => {
                handleOpenSubmit(e);
              }}>
              <TextField
                error={errorText.length !== 0}
                id="name"
                label="Фамилия и имя"
                defaultValue={name}
                variant="outlined"
                helperText={errorText}
              />
              <TextField
                error={errorText.length !== 0}
                id="name"
                label="E-mail"
                defaultValue={email}
                variant="outlined"
                helperText={errorText}
              />
              <TextField
                error={errorText.length !== 0}
                id="phone"
                label="Номер телефона"
                defaultValue={phone}
                variant="outlined"
                helperText={errorText}
              />
              <Button variant="contained" color="primary" type="submit">
                Сохранить изменения
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <SubmitModal
        open={submitMode}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
      <SuccessModal open={successMode} handleEnd={handleEnd} />
    </>
  );
}
