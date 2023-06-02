
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [contacto, setContacto] = useState({});

  const obtenerContacto = () => {
    fetch("https://assets.breatheco.de/apis/fake/contact/" + params.theid)
      .then(res => res.json())
      .then(data => {
        setContacto(data);
        setFullName(data.full_name);
        setAddress(data.address);
        setPhone(data.phone);
        setEmail(data.email);
      })
      .catch(error => {
        console.error("Error al obtener el contacto:", error);
      });
  };

  useEffect(() => {
    obtenerContacto();
  }, []);

  const actualizarContacto = () => {
    const updatedContacto = {
      full_name: fullName,
      email: email,
      agenda_slug: "ale_agenda", 
      address: address,
      phone: phone
    };

    fetch(`https://assets.breatheco.de/apis/fake/contact/${params.theid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedContacto)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Contacto actualizado:", data);
       
      })
      .catch(error => {
        console.error("Error al actualizar el contacto:", error);
      });

	  setFullName('')
	  setAddress('')
	  setPhone('')
	  setEmail('')
  };

  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          value={fullName}
          onChange={event => setFullName(event.target.value)}
          id="formGroupExampleInput"
          placeholder="Example input placeholder"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          value={address}
          onChange={event => setAddress(event.target.value)}
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          value={phone}
          onChange={event => setPhone(event.target.value)}
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="formGroupExampleInput2" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={event => setEmail(event.target.value)}
          id="formGroupExampleInput2"
          placeholder="Another input placeholder"
        />
      </div>
      <Link
        // to={"/single/" + props.id}
        className="btn btn-success"
        onClick={actualizarContacto}
      >
        Actualizar
      </Link>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object
};
