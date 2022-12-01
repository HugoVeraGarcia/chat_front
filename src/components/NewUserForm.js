import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../redux/actions";
import "../styles/styles.form.css"

const NewUserForm = () => {
  const dispatch = useDispatch();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const enterprise = {

      firstname: firstname.trim(),
      lastname: lastname.trim(),
      phone: phone.trim(),
      role: role.trim(),
      email: email.toLowerCase().trim(),
      password: password.trim(),
    };
    dispatch(addUserThunk(enterprise))
    .then((res) => {
      console.log(res)
      setErrorMsg(`OK, se creó el usuario ${email}`)
      setFirstName("");
      setLastName("");
      setPhone("");
      setRole("");
      setEmail("");
      setPassword("");  
      
    })
    .catch((error) => {
      setErrorMsg(error.response.data.message);
    });
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={submit}>

        <div className="label_input_container">
          <label className="label_form" htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="first name"
            id="firstname"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="lastname">
            Last Name
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="last name"
            id="lastname"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="phone">
            Phone
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="label_input_container">
          <label className="label_form" htmlFor="role">
            Role
          </label>

          <select 
            name="role" 
            id="role" 
            onChange={(e)=> setRole(e.target.value)} 
            className="input_form"
            value={role}
            >
            <option value="admin">admin</option>
            <option value="normal">normal</option>
          </select>
        </div>  
          

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

export default NewUserForm;
