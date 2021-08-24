import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";


const LoginAdmin = () => {
  
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const PostData = () => {
    fetch("http://localhost:3001/signinAdmin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#b71c1c red darken-4" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("admin", JSON.stringify(data.admin)); //
          /* dispatch({ type: "admin", payload: data.admin });  */
          M.toast({ html: "signed well", classes: "#80cbc4 teal lighten-3" });
          history.push("/admin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mycard2  ">
      <div className="card auth-card2 input-field">
        <h2>Se connecter </h2>
        <p> </p>
        <p> </p>
        <form>
          <label>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </label>
        </form>

        <button
          type="button"
          class="btn btn-outline-primary #64b5f6 blue lighten-2"
          onClick={() => PostData()}
        >
          Entrer
        </button>

        <p>
          <br />
        </p>
        <Link to="./">
          <button
            type="button"
            class="btn btn-outline-primary #64b5f6 blue lighten-2"
          >
            Retour
          </button>
        </Link>
       
      </div>
    </div>
  );
};
export default LoginAdmin;
