import React ,{useState} from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import CarInfo from "./CarInfo";

const CarsTable = ({ setCurrentId }) => {

  const cars = useSelector((state) => state.cars);
  const [list, setList] = useState(cars)
 const removeCar = (id) => {
   let newCar = list.filter((car) => car.id !== id)
   setList(newCar)
}

  return !cars.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      <h3
        style={{
          backgroundColor: "#fff",
          color: "#313174",
          textAlign: "center",
          fontSize: "36px",
          marginTop: "70px",
        }}
      >
        birthdays today
      </h3>
      {cars.map((car) => (
        <Grid key={car._id} item xs={12} sm={6} md={6}>
          <CarInfo car={car} setCurrentId={setCurrentId} />
          {/* <button onClick={() => removeCar(car._id)}> Dismiss</button> */}
          <p>
            <br />
          </p>
        </Grid>
      ))}
    </Grid>
  );
};
export default CarsTable;
