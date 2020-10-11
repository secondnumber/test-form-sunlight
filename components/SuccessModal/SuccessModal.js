import Button from '../Form/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        width: 600
    },
    text: {
        paddingTop: 59,
        fontSize: 24,
    },
    buttons: {
        margin: '0 auto',
        paddingBottom: 56,
        maxWidth: 202
    }
}));

export default function SuccessModal({ open, handleEnd }) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
          open={open}
          onClose={handleEnd}
          maxWidth={500}
      >
          <DialogContent className={classes.container}>
          <DialogContentText className={classes.text}>Данные успешно сохранены</DialogContentText>
            <div className={classes.buttons}>
          <Button variant="contained" type="button" text="Хорошо" onClick={handleEnd} fullWidth={true}/>
            </div>
          </DialogContent>
      </Dialog>
    </div>
  );
}
