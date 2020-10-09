import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import styles from './SuccessModal.module.css';

export default function SuccessModal({ open, handleEnd }) {
  return (
    <div>
      <Dialog open={open} onClose={handleEnd} aria-labelledby="form-dialog-title">
        <DialogActions>
          <DialogContentText>Данные успешно сохранены</DialogContentText>
          <Button onClick={handleEnd} color="primary">
            Хорошо
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
