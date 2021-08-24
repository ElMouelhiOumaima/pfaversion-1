import React ,{useState,useEffect} from "react";
import { Container, Grow, Grid ,Typography,AppBar} from "@material-ui/core";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import useStyles from "../../wiem/Wiemstyles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const Userprofile = () => {
 const [notification,setnotification]=useState([])
const classes = useStyles();
  useEffect(() => {
    fetch("http://localhost:3001/notification", {
      headers: {
        "Content-Type": "application/json",
        "Authorization" :"Bearer "+ localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setnotification(result)
    })
  }, []);
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
              
              {notification.map((element, index) =>(
    
                <h1>{element.text}</h1>))}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Userprofile;
