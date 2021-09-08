import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function PaymentForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add transaction amount
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Enter Amount"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Enter Mpesa Pin"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
       
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}