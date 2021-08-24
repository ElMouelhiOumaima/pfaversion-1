import React, { useEffect, useContext, useReducer } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route,useHistory } from "react-router-dom";
import Home from "./pages/Home";
import Cours from "./pages/Cours";
import Userprofile from "./pages/Userprofile";
import Demo from "./pages/demo";
import Quizz from "./pages/Test/Quizz";
import QuizzSolution from "./pages/Test/QuizzSolution";
import Acceuil from "../hejer/Acceuil";
import { initialState, reducer } from "../hejer/Screens/reducers/userReducer";
import "./AppClient.css";
import Deconnexion from "../hejer/Screens/Deconnexion";
export const Usercontext = React.createContext();
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(Usercontext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "user", playload: user });
    } else {
      history.push("/client");
    }
  }, []);
  return (
    <Switch>
      <Route exact path="/client" component={Home} />
      <Route exact path="/cours" component={Cours} />
      <Route exact path="/Userprofile" component={Userprofile} />
      <Route exact path="/TestGratuit" component={Quizz} />
      <Route exact path="/Solution" component={QuizzSolution} />
      
      <Route exact path="/deconnexion" component={Deconnexion}/> 
      <div
        style={{
          width: "2000px",
          marginLeft: "300px",
          marginBottom: "200px",
          marginRight: "200px",
        }}
        className="col-md-8"
      >
        <Route exact path="/Demo" component={Demo} />
      </div>
    </Switch>
  );
};

function AppClient() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Usercontext.Provider value={{ state, dispatch }}>
        <Router>
           <Navbar />
            <Routing /> 
         
        </Router>
      </Usercontext.Provider>
    </>
  );
}

export default AppClient;
