import React from "react";
import {Typography,CircularProgress } from '@material-ui/core';
const CarInfo = ({ car, setCurrentId }) => {


let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let today = `${year}-${month<10?`0${month}`:`${month}`}-${date}`;
let v = car.visitetechnique.substring(0,10);
let a = car.assurances.substring(0,10);
let r = car.reparations.substring(0,10);
let vign= car.vignettes.substring(0,10);

  return v !== today && a !== today && r !== today && vign !== today ? (
    <p></p>
  ) : (
   
    <div className="allcards">
      <div className="avatar">
        <img className="photo" src={car.photo} alt="" />
        <h3>{car.nom}</h3>
      </div>
      <table>
        <tr>
          <td> Date visite technique :</td>
          <td>{v} </td>
        </tr>
        <tr>
          <td> Date assurances :</td>
          <td>{a}</td>
        </tr>
        <tr>
          <td> Date reparations :</td> 
          <td>{r}</td>
        </tr>
        <tr>
        <td>Date vignettes : </td> 
        <td>{vign}</td>
        </tr>
      </table>
    </div>
    
  );
};

export default CarInfo;
