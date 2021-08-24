import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import './style.css';
import CarInfo from "./CarInfo";

const Oumaimaa = ({ setCurrentId }) => {
  const [list, setList] = useState( useSelector((state) => state.cars));
  console.log(list);
  //console.log(useSelector((state) => state.cars));
  const removeCar = (id) => {
    let newCar = list.filter((car) => car.id !== id);
    setList(newCar);
  };

  return !list.length ? (
    <CircularProgress />
  ) : (
     
      list.map((car) => (
        <div className='container' key={car._id}>
          <CarInfo car={car} setCurrentId={setCurrentId} />
          {/* <button onClick={() => removeCar(car._id)}> Dismiss</button> */}
          <p><br/></p>
         </div>
      ))
     
  );
};
export default Oumaimaa;
