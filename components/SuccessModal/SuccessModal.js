import Button from '../Form/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import styles from './SuccessModal.module.css';
import React from 'react';

export default function SuccessModal({ open, handleEnd }) {
  return (
    <div>
      <Dialog open={open} onClose={handleEnd} aria-labelledby="form-dialog-title">
        <DialogActions>
          <DialogContentText>Данные успешно сохранены</DialogContentText>
          <Button variant="contained" type="button" text="Ok" onClick={handleEnd} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
