import React,{ useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


const Contactos = (props) => {
	
	const { store, actions } = useContext(Context);
	const setStore = actions.setStore;
	const borrarContacto = (id) => {
		fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
			method: "DELETE"
		})
			.then(() => {
				actions.loadSomeData(); // Actualizar los datos después de eliminar el contacto
			})
			.catch((error) => {
				console.error("Error deleting contact:", error);
			});
	
		  
	  };

return (
<div className="card mb-3" style={{width: "100%"}}>
	<div className="row g-0">
	  <div className="col-md-4">
		<img src={rigoImage}  className="img-fluid rounded-start" alt="..."/>
	  </div>
	  <div className="col-md-8">
		<div className="card-body">
		  <h5 className="card-title">{props.nombre}</h5>
		  <p className="card-text">{props.address}</p>
          <p className="card-text">{props.phone}</p>
		  <p className="card-text"><small className="text-muted">{props.email}</small></p>
		  <div className="botonescontacto">
		  <Link to={"/single/" + props.id} className="btn btn-primary">Editar</Link>
		  <button type="button" className="btn btn-danger" onClick={() => borrarContacto(props.id)}>Borrar</button>
		  </div>
		  

		</div>
	  </div>
	</div>
  </div>


)
};

export default Contactos;