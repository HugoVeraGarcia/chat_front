import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/actions";
import "../styles/styles.form.css"

const LoginForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


  const submit = (e) => {
    e.preventDefault();
      const credentials = {
        email: email.toLowerCase().trim(),
        password: password.trim(),
        };

      dispatch(loginThunk(credentials))
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          
          setErrorMsg("");
          setEmail("");
          setPassword("");
          setErrorMsg("OK, estás logueado.")
      
        })
        .catch((error) => {
          setErrorMsg(error.response.data.message);
        });
    }
  



  return (
    <div className="form_container">
      <form className="form" onSubmit={submit}>

        <div className="label_input_container">
          <label className="label_form" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="input_form"
            placeholder="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="label_input_container">
          <button className="button_form">upload</button>
          <p className="result_login"> { errorMsg } </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
