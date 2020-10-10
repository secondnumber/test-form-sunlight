import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PhoneIcon from '@material-ui/icons/Phone';
import Divider from '@material-ui/core/Divider';
import styles from './Info.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: '20px'
  }
}));

export default function Info({ email, phone }) {
  const classes = useStyles();
  return (
    <Grid style={{height: 192}} container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem>
              <ListItemIcon>
                <AlternateEmailIcon style={{ color: '#00BFA5' }} />
              </ListItemIcon>
              <ListItemText primary={email ? email : 'Укажите e-mail'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <PhoneIcon style={{ color: '#00BFA5' }} />
              </ListItemIcon>
              <ListItemText primary={phone ? phone : 'Укажите номер телефона'} />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
