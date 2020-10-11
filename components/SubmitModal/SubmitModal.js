import Button from '../Form/Button';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';
import DialogContentText from "@material-ui/core/DialogContentText";
import {makeStyles} from "@material-ui/core/styles";
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


export default function SubmitModal({ open, handleClose, handleSubmit, handleCancel }) {
  const classes = useStyles();
  return (
    <div>
      <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={500}
      >
          <DialogContent className={classes.container}>
              <DialogContentText className={classes.text}>Сохранить изменения?</DialogContentText>
              <div className={classes.buttons}>
                  <Button variant="contained" type="button" text="Сохранить" onClick={handleSubmit} fullWidth={true}/>
                  <Button variant="outlined" type="button" text="Не сохранять" onClick={handleCancel} fullWidth={true}/>
              </div>
          </DialogContent>
      </Dialog>
    </div>
  );
}
