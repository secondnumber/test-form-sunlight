import Button from '../Form/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import styles from './SubmitModal.module.css';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function SubmitModal({ open, handleClose, handleSubmit, handleCancel }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogActions>
          <Button variant="contained" type="button" text="Submit" onClick={handleSubmit} width={200}/>
          <Button variant="contained" type="button" text="Cancel" onClick={handleCancel} width={200}/>
        </DialogActions>
      </Dialog>
    </div>
  );
}
