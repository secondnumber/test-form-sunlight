import Button from '../Form/Button';
import Dialog from '@material-ui/core/Dialog';
import React from 'react';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './SubmitModal.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function SubmitModal({ open, handleClose, handleSubmit, handleCancel }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>
      <Dialog
          open={open}
          onClose={handleClose}
          fullScreen={fullScreen}
          PaperProps={{ classes: {root: styles.wrapper }, style: {
              borderRadius: '10px',
            }, }}
      >
        <DialogContent>
          <DialogContentText>Сохранить изменения?</DialogContentText>
            <div className={styles.buttons}>
              <Button
                  variant="contained"
                  type="button"
                  text="Сохранить"
                  onClick={handleSubmit}
                  fullWidth={true}
              />
              <Button
                  variant="outlined"
                  type="button"
                  text="Не сохранять"
                  onClick={handleCancel}
                  fullWidth={true}
              />
            </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
