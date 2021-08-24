import React,{useState,useEffect} from "react";
import axios from "axios";
import { Select } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";

// import {Input ,FormGroup, Form} from "reactstrap";
import './SuiviCandidatsStyle.css';
//formulaire
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import emailjs from "emailjs-com";
//////////

// style///
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const StyledTableCell = withStyles((theme) => ({
  head: {
    //  backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
/////////
export default function SuiviCandidat() {
  const [client,setclient]=useState([])
  const [choixclient,setchoixclient]=useState([])
  const [employee,setemployee]=useState([])
  const [choixemployee,setchoixemployee]=useState([])
 
 useEffect(() => {
   axios.get("http://localhost:3001/clientaffectation")
   .then(resultat=>{
     setclient(resultat.data)
     console.log(resultat.data)
   })
   axios.get("http://localhost:3001/employeesaffectation")
   .then(resultat=>{
     setemployee(resultat.data)
    
   })
  
 }, [])
 const envoyer=()=>{
   const data = {client:client[choixclient]._id,employe:employee[choixemployee]._id}
   axios.put("http://localhost:3001/affectation",data)
   setclient(client.filter(item=>item._id!==client[choixclient]._id))
 }


///////////
  const classes = useStyles();
//////////
//form
const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};
/////
////fonction send email///
function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm(
        "service_y4ttftw",
        "template_ks671xq",
        e.target,
        "user_xEKZu50irPWkLnKLTeO8v"
      ).then(res=>{console.log(res);}
      ).catch(err=>console.log(err));
    };
  return (
    <div>
      {/* //tableau */}
      <div className="tableau">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead className="head">
              <TableRow>
                <StyledTableCell align="center">Nom</StyledTableCell>
                <StyledTableCell align="center">Prénom</StyledTableCell>
                <StyledTableCell align="center">
                  Date de naissance
                </StyledTableCell>
                <StyledTableCell align="center">adresse</StyledTableCell>
                <StyledTableCell align="center">
                  Numéro de telephone
                </StyledTableCell>
                <StyledTableCell align="center">e-mail</StyledTableCell>
                <StyledTableCell align="center">modifier</StyledTableCell>
                <StyledTableCell align="center">supprimer</StyledTableCell>
                <StyledTableCell align="center">accepter</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {client.map((element, index) => (
                <StyledTableRow key={element.name}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {element.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.firstname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.birth}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.adress}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.number}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {element.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button color="primary" variant="outlined">
                      modifier
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button color="primary" variant="outlined">
                      supprimer
                    </Button>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    {/* partie formulaire     */}
                    <div>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Accepter
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                      >
                        <DialogContent>
                          <div className="mycard ">
                            <div
                              className="card auth-card input-field"
                              style={{
                                backgroundImage: `url(https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg)`,
                              }}
                            >
                              <h3 style={{ color: "rgba(58, 59, 130, 1)" }}>
                                Envoyez E-mail
                              </h3>
                              <form onSubmit={sendEmail}>
                                <label>Email</label>
                                <input type="email" name="user_email" rows="4" />
                                <label>Message(code d'acces connection: 0000)</label>
                                <textarea name="message" rows="4" />
                                <input type="submit" value="send" />
                              </form>
                            </div>
                          </div>
                        </DialogContent>

                       
                      </Dialog>
                    </div>
                    {/* ******************** */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <p>
        <br />
        <br />
      </p>
      <h3 style={{ marginLeft: "370px" }}>Affectation des clients : </h3>
      <p>
        <p>
          <br />
        </p>
      </p>
      <div className="selectdiv">
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontWeight: "bold", color: "black" }}
        >
          Nouveau Client
        </InputLabel>
        <Select
          className="select"
          onChange={(e) => setchoixclient(e.target.value)}
          type="select"
        >
          {client.map((element, index) => (
            <option value={index} key={index}>
              {element.name}
            </option>
          ))}
        </Select>
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontWeight: "bold", color: "black" }}
        >
          Employé responsable
        </InputLabel>

        <Select
          className="select"
          onChange={(e) => setchoixemployee(e.target.value)}
          type="select"
        >
          {employee.map((element, index) => (
            <option value={index} key={index}>
              {element.nom}{" "}
            </option>
          ))}
        </Select>
        <p>
          <br />
        </p>
        <div />
        <div className="btn_affectation">
          <button style={{ textAlign: "center" }} onClick={envoyer}>
            {" "}
            Affecter{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
