import Button from '../Form/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './SuccessModal.module.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function SuccessModal({ open, handleEnd }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  return (
      <>
        <Dialog
            open={open}
            onClose={handleEnd}
            fullScreen={fullScreen}
            PaperProps={{ classes: {root: styles.wrapper } }}
        >
          <DialogContent>
            <DialogContentText>Данные успешно сохранены</DialogContentText>
            <div className={styles.buttons}>
              <Button
                  variant="contained"
                  type="button"
                  text="Хорошо"
                  onClick={handleEnd}
                  fullWidth={true}
              />
            </div>
          </DialogContent>
        </Dialog>
      </>
  );
}

