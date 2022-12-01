import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEnterpriseThunk } from "../redux/actions";
import "../styles/styles.form.css"

const EnterpriseForm = () => {
  const dispatch = useDispatch();

  const [enterprisename, setEnterpriseName] = useState("");
  const [foodtype, setFoodType] = useState("");
  const [country, setCountry] = useState("");
  const [prefphone, setPrefphone] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [typeperson, setTypePerson] = useState("");
  const [enterpriserfc, setEnterpriseRFC] = useState("");
  const [legalreprefirstname, setLegalRepreFirstName] = useState("");
  const [legalreprelastname, setLegalRepreLastName] = useState("");
  const [reprerfc, setReprerfc] = useState("");
  const [identityrepre, setIdentityRepre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const enterprise = {
      enterprisename: enterprisename.trim(),
      foodtype: foodtype.trim(),
      country: country.trim(),
      prefphone: prefphone.trim(),
      phone: phone.trim(),
      address: address.trim(),
      typeperson: typeperson.trim(),
      enterpriserfc: enterpriserfc.trim(),
      legalreprefirstname: legalreprefirstname.trim(),
      legalreprelastname: legalreprelastname.trim(),
      reprerfc: reprerfc.trim(),
      identityrepre: identityrepre.trim(),
      email: email.toLowerCase().trim(),
      password: password.trim(),
    };
    dispatch(addEnterpriseThunk(enterprise));
    setEnterpriseName("");
    setFoodType("");
    setCountry("");
    setPrefphone("");
    setPhone("");
    setAddress("");
    setTypePerson("");
    setEnterpriseRFC("");
    setLegalRepreFirstName("");
    setLegalRepreLastName("");
    setReprerfc("");
    setIdentityRepre();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form_container">
      <form className="form" onSubmit={submit}>
        <div className="label_input_container">
          <label className="label_form" htmlFor="enterprisename">
            Enterprise Name
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="enterprise name"
            id="enterprisename"
            onChange={(e) => setEnterpriseName(e.target.value)}
            value={enterprisename}
          />
        </div>
        <div className="label_input_container">
          <label className="label_form" htmlFor="foodtype">
            Food Type
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="food type"
            id="foodtype"
            onChange={(e) => setFoodType(e.target.value)}
            value={foodtype}
          />
        </div>
        <div className="label_input_container">
          <label className="label_form" htmlFor="country">
            Country
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="country"
            id="country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          />
        </div>
        <div className="label_input_container">
          <label className="label_form" htmlFor="prefphone">
            Pre fijo
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="Pre fijo"
            id="prefphone"
            onChange={(e) => setPrefphone(e.target.value)}
            value={prefphone}
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
          <label className="label_form" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="address"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="typeperson">
            Type of Person
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="type of person"
            id="typeperson"
            onChange={(e) => setTypePerson(e.target.value)}
            value={typeperson}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="enterpriserfc">
            Enterprise RFC
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="Enterprise RFC"
            id="enterpriserfc"
            onChange={(e) => setEnterpriseRFC(e.target.value)}
            value={enterpriserfc}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="legalreprefirstname">
            First Name of Legal Representative
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="First Name of Legal Representative"
            id="legalreprefirstname"
            onChange={(e) => setLegalRepreFirstName(e.target.value)}
            value={legalreprefirstname}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="legalreprelastname">
            Last Name of Legal Representative
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="Last Name of Legal Representative"
            id="legalreprelastname"
            onChange={(e) => setLegalRepreLastName(e.target.value)}
            value={legalreprelastname}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="reprerfc">
            Representative RFC
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="Representative RFC"
            id="reprerfc"
            onChange={(e) => setReprerfc(e.target.value)}
            value={reprerfc}
          />
        </div>

        <div className="label_input_container">
          <label className="label_form" htmlFor="identityrepre">
            Number identity Representative
          </label>
          <input
            type="text"
            className="input_form"
            placeholder="Number identity Representative"
            id="identityrepre"
            onChange={(e) => setIdentityRepre(e.target.value)}
            value={identityrepre}
          />
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
        </div>
      </form>
    </div>
  );
};

export default EnterpriseForm;
