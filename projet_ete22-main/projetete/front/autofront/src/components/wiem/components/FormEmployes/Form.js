import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createEmploye, updateEmploye } from "../../actions/employes";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import emailjs from "emailjs-com";
const Form = ({ currentId, setCurrentId }) => {
  const [employeData, setEmployeData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    poste: "",
    photo: "",
    password: "",
    email: "",
  });
  const employe = useSelector((state) =>
    currentId
      ? state.employes.find((telephone) => telephone._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (employe) setEmployeData(employe);
  }, [employe]);

  const clear = () => {
    setCurrentId(0);
    setEmployeData({
      nom: "",
      prenom: "",
      telephone: "",
      poste: "",
      photo: "",
      password: "",
      email: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createEmploye(employeData));
      clear();
    } else {
      dispatch(updateEmploye(currentId, employeData));
      clear();
    }
  };

   //////////
   //formulaire
   const [open, setOpen] = React.useState(false);

   const handleClickOpen = () => {
     setOpen(true);
   };

   const handleClose = () => {
     setOpen(false);
   };
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y4ttftw",
        "template_ks671xq",
        e.target,
        "user_xEKZu50irPWkLnKLTeO8v"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Modifier "${employe.nom}"` : "Ajouter Nouvel Employé"}
        </Typography>
        <TextField
          name="nom"
          variant="outlined"
          label="Nom"
          fullWidth
          value={employeData.nom}
          onChange={(e) =>
            setEmployeData({ ...employeData, nom: e.target.value })
          }
        />
        <TextField
          name="prenom"
          variant="outlined"
          label="Prénom"
          fullWidth
          value={employeData.prenom}
          onChange={(e) =>
            setEmployeData({ ...employeData, prenom: e.target.value })
          }
        />
        <TextField
          name="telephone"
          variant="outlined"
          label="Telephone"
          fullWidth
          multiline
          value={employeData.telephone}
          onChange={(e) =>
            setEmployeData({ ...employeData, telephone: e.target.value })
          }
        />
        <TextField
          name="poste"
          variant="outlined"
          label="Poste "
          fullWidth
          value={employeData.poste}
          onChange={(e) =>
            setEmployeData({ ...employeData, poste: e.target.value })
          }
        />
        <TextField
          name="password"
          variant="outlined"
          label="Mot de passe "
          fullWidth
          value={employeData.password}
          onChange={(e) =>
            setEmployeData({ ...employeData, password: e.target.value })
          }
        />

        <TextField
          name="email"
          variant="outlined"
          label="E-mail "
          fullWidth
          value={employeData.email}
          onChange={(e) =>
            setEmployeData({ ...employeData, email: e.target.value })
          }
        />

        <p>Photo(Format .jpg)</p>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setEmployeData({ ...employeData, photo: base64 })
            }
          />
        </div>

        {/* ///formulaire */}
        <div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
            onClick={handleClickOpen}
          >
            Envoyer mot de passe
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
                    <label>Email du client</label>
                    <input
                      type="email"
                      name="user_email"
                      rows="4"
                    />
                    <label>Mot de passe au client</label>
                    <textarea name="message" rows="4" />
                    <input type="submit" value="send" />
                  </form>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        {/* ////////// */}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};;

export default Form;
