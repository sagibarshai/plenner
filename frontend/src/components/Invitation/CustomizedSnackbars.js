import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  const { openAlert, setOpenAlert, goodAlert } = props;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const closeAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  return (
    <>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={closeAlert}>
        <Alert onClose={closeAlert} severity={goodAlert ? 'success' : 'error'} sx={{ width: '100%' }}>
          {goodAlert ? 'Invitation successfully sent' : 'Failed to send the invitation'}
        </Alert>
      </Snackbar>
    </>
  );
}
