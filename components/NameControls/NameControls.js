import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import styles from './NameControls.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    background: '#1A78C2',
    height: 128,
    margin: '0 20px'
  }
}));

export default function NameControls({ name, editMode, handleEditMode }) {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div className={styles.name}>
            <div className={styles.icon}></div>
            <div>{name}</div>
          </div>
          {editMode && (
            <div
              className={styles.controls}
              onClick={() => {
                handleEditMode(false);
              }}>
              <div className={styles.mode}>Закрыть</div>
              <CloseIcon />
            </div>
          )}
          {!editMode && (
            <div
              className={styles.controls}
              onClick={() => {
                handleEditMode(true);
              }}>
              <div className={styles.mode}>Редактировать</div>
              <EditIcon />
            </div>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}
