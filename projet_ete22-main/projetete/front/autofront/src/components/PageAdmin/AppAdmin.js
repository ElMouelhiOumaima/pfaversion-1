import React, { useEffect, useContext, useReducer } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import Employés from "./pages/Employés";
import Document from "./pages/Document";
import Séance_code from "./pages/Séance_code";
import SuiviCandidat from "./pages/SuiviCandidat";
import Véhiculesajout from "./pages/Véhiculesajout";
import { initialState, reducer } from "../hejer/Screens/reducers/userReducer";

export const Admincontext = React.createContext();


const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Admincontext);
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin) {
      dispatch({ type: "admin", playload: admin });
    } else {
      history.push("/admin");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/candidat" component={SuiviCandidat} />
      <Route exact path="/véhicule" component={Véhiculesajout} />
      <Route exact path="/calendrier" component={Séance_code} />
      <Route exact path="/document" component={Document} />
      <Route exact path="/employé" component={Employés} />
      <Route exact path="/admin" component={Document} />
    </Switch>
  );
};

function AppAdmin() {
   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Admincontext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Navbar />
            <Routing />
        </BrowserRouter>
      </Admincontext.Provider>
    </>
  );
}

export default AppAdmin;
