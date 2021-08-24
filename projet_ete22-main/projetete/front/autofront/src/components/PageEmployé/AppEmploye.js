import React, { useEffect, useContext, useReducer } from "react";
import NavbarEmploye from "./NavbarEmploye";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Notifications from "./pages/Notifications.js";
import Candidats from "./pages/Candidats";
import { initialState, reducer } from "../hejer/Screens/reducers/userReducer";
export const employeecontext = React.createContext();
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(employeecontext);
  useEffect(() => {
    const employee = JSON.parse(localStorage.getItem("employee"));
    if (employee) {
      dispatch({ type: "employee", playload: employee });
    } else {
      history.push("/employe");
    }
  }, []);

  return (
    <Switch>
      <Switch>
        <Route exact path="/candidat" component={Candidats} />
        <Route exact path="/notifications" component={Notifications} />

        <div
          style={{
            width: "2000px",
            marginLeft: "300px",
            marginBottom: "200px",
            marginRight: "200px",
          }}
          className="col-md-8"
        ></div>
      </Switch>
    </Switch>
  );
};

function AppEmploye() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <employeecontext.Provider value={{ state, dispatch }}>
        <Router>
          <NavbarEmploye />
          <Routing />
        </Router>
      </employeecontext.Provider>
    </>
  );
}

export default AppEmploye;
