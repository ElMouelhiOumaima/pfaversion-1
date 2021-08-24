import React, { useState, useContext } from "react";
import { Usercontext } from "../../oumaima/AppClient";
import { useHistory } from "react-router-dom";
export default function Deconnexion() {
  const { state, dispatch } = useContext(Usercontext);
  const history = useHistory();
  return (
    <div>
         
        <button
          className="btn waves-effect waves-light #e91e63 pink"
          onClick={() => {
            localStorage.clear();
            dispatch({ type: "Clear" });
            history.push("/");
          }}
        >
          Logout
        </button>
      
    </div>
  );
}
