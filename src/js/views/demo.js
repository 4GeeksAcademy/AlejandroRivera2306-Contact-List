
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	

	const [contacto, setContacto] = useState({
		full_name: "",
		email: "",
		agenda_slug: "ale_agenda",
		address: "",
		phone: ""
	});

	const crearContacto = () => {
		fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(contacto)
		})
			.then(response => response.json())
			.then(data => {
				setContacto({
					full_name: "",
					email: "",
					// agenda_slug: "ale_agenda",
					address: "",
					phone: ""
				});
				console.log("Contacto creado:", data);
			})
			.catch(error => {
				
				console.error("Error al crear el contacto:", error);
			});
			
	};


	const handleInputChange = event => {
		const { name, value } = event.target;
		setContacto(prevState => ({
			...prevState,
			[name]: value
		}));
	};

	return (
		<div className="container">
			<form>
				<h1 className="text-center">Add New Contact</h1>
				<div className="row mb-3">
					<label htmlFor="full_name" className="col-sm-2 col-form-label">Full Name</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.full_name}
							type="text"
							className="form-control"
							id="full_name"
							name="full_name"
							placeholder="Full Name"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.email}
							type="email"
							className="form-control"
							id="email"
							name="email"
							placeholder="Email"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.phone}
							type="number"
							className="form-control"
							id="phone"
							name="phone"
							placeholder="Phone"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
					<div className="col-sm-10">
						<input
							onChange={handleInputChange}
							value={contacto.address}
							type="text"
							className="form-control"
							id="address"
							name="address"
							placeholder="Address"
						/>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-sm-10 offset-sm-2">
						<div className="form-check"></div>
					</div>
				</div>
				<button onClick={crearContacto} type="button" className="btn btn-warning save">
					Guardar
				</button>
			</form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
