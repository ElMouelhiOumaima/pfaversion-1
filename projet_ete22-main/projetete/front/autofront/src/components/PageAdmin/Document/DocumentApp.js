import React, { useState, useEffect } from "react";
import { Container, Grow, Grid ,Typography,AppBar} from "@material-ui/core";
import { useDispatch } from "react-redux";

import CarsTable from "./CarsTable";
import Oumaimaa from "./Oumaimaa";

import { getCars } from "../../wiem/actions/cars";
import useStyles from "../../wiem/Wiemstyles";

const DocumentApp = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
const classes = useStyles();
  useEffect(() => {
    dispatch(getCars());
  }, [currentId, dispatch]);

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
              <Oumaimaa setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default DocumentApp;
