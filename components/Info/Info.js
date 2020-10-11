import React from 'react';
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
  paper: {
    elevation: 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 10
  }
}));

export default function Info({ email, phone }) {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={`${classes.paper} ${styles.wrapper}`}>
          <List>
            <ListItem className={styles.item}>
              <ListItemIcon>
                <AlternateEmailIcon className={styles.icon}/>
              </ListItemIcon>
              <ListItemText primary={email ? email : 'Укажите e-mail'}/>
            </ListItem>
            <Divider style={{ backgroundColor: '#CAE7FE' }}/>
            <ListItem className={styles.item}>
              <ListItemIcon>
                <PhoneIcon className={styles.icon}/>
              </ListItemIcon>
              <ListItemText primary={phone ? phone : 'Укажите номер телефона'}/>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
