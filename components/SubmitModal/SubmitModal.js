import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import styles from './SubmitModal.module.css';

export default function SubmitModal({ open, handleClose, handleSubmit, handleCancel }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Сохранить
          </Button>
          <Button onClick={handleCancel} color="primary">
            Не сохранять
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
