// スナックバーのコンポーネント
import React, {Fragment, useEffect,useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function SnackBar({message, severity}) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if(message === ""){
      setOpen(false);
    } else {
      setOpen(true);
    }
  },[message])

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Fragment>
      {
      message === undefined || message === null || message === "" ? null :
      <div className={classes.root}>
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        </div>
      }
    </Fragment>
  );
}