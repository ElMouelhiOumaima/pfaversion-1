import React from "react";
import { Container, Grow, Grid ,Typography,AppBar} from "@material-ui/core";


import useStyles from "../../wiem/Wiemstyles";

const Notifications = () => {
 
const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Notifcations
        </Typography>
        <img
          className={classes.image}
          src="https://image.flaticon.com/icons/png/512/4599/4599040.png"
          alt="icon"
          height="60"
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <p>aa</p>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Notifications;
