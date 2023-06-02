

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Contactos from "../component/contactos.js";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData();
  }, []);

  return (
    <div>
      {store.contactos.map((contacto) => (
        <Contactos
          key={contacto.id}
          id={contacto.id}
          personaje={contacto}
          nombre={contacto.full_name}
          phone={contacto.phone}
          address={contacto.address}
          email={contacto.email}
        />
      ))}
    </div>
  );
};

export default Home;
