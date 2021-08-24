import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createCar, updateCar } from "../../actions/cars";


const CarForm = ({ currentId, setCurrentId }) => {
  const [carData, setCarData] = useState({
    nom: "",
    etat: "",
    assurances: true,
    reparations: true,
    vignettes: true,
    visitetechnique: true, 
    entretien:"",
    photo: "",
});
  const car = useSelector((state) =>
    currentId ? state.cars.find((message) => message._id === currentId) : null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {if (car) setCarData(car);}, [car]);

  const clear = () => {
    setCurrentId(0);
    setCarData({
      nom: "",
      etat: "",
      assurances: true,
      reparations: true,
      vignettes: true,
      visitetechnique: true,
      entretien: "",
      photo: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createCar(carData));
      clear();
    } else {
      dispatch(updateCar(currentId, carData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Modifier "${car.nom}"` : "Ajouter nouveau véhicule"}
        </Typography>
        <TextField
          name="nom"
          variant="outlined"
          label="Nom/Marque/immatricule"
          fullWidth
          value={carData.nom}
          onChange={(e) => setCarData({ ...carData, nom: e.target.value })}
        />
        <TextField
          name="etat"
          variant="outlined"
          label="Etat : (en marche / hors service)"
          fullWidth
          value={carData.etat}
          onChange={(e) => setCarData({ ...carData, etat: e.target.value })}
        />
        <TextField
          name="entretien"
          variant="outlined"
          label="Remarques d'entretien"
          fullWidth
          value={carData.entretien}
          onChange={(e) =>
            setCarData({ ...carData, entretien: e.target.value })
          }
        />
        <br />
        <div className={classes.Flexcontent}>
          <span>
            <h8>Date prochaine réparation</h8>
          </span>
          <span>
            <TextField
              variant="outlined"
              id="datetime-local"
              type="datetime-local"
              value={carData.reparations}
              onChange={(e) =>
                setCarData({ ...carData, reparations: e.target.value })
              }
            />
          </span>
        </div>
        <br />
        <div className={classes.Flexcontent}>
          <span>
            <h8>Date Paiement Assurance</h8>
          </span>
          <span>
            <TextField
              variant="outlined"
              id="datetime-local"
              type="datetime-local"
              value={carData.assurances}
              onChange={(e) =>
                setCarData({ ...carData, assurances: e.target.value })
              }
            />
          </span>
        </div>
        <br />
        <div className={classes.Flexcontent}>
          <span>
            <h8>Date Paiement Vignettes</h8>
          </span>
          <span>
            <TextField
              variant="outlined"
              id="datetime-local"
              type="datetime-local"
              value={carData.vignettes}
              onChange={(e) =>
                setCarData({ ...carData, vignettes: e.target.value })
              }
            />
          </span>
        </div>
        <br />
        <div className={classes.Flexcontent}>
          <span>
            <h8>Date Visite Technique</h8>
          </span>
          <span>
            <TextField
              variant="outlined"
              id="datetime-local"
              type="datetime-local"
              value={carData.visitetechnique}
              onChange={(e) =>
                setCarData({ ...carData, visitetechnique: e.target.value })
              }
            />
          </span>
        </div>
        <br />
        <div className={classes.fileInput}>
          Photo (.jpg)
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setCarData({ ...carData, photo: base64 })}
          />
        </div>
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
};

export default CarForm;
