import React from "react";

const ListaDeNombres = () => {
    const nombres = ["Juan", "Pedro", "Pablo", "María", "Ana"];
    return (
        <ul>
        {nombres.map((nombre, index) => (
            <li key={index}>{nombre}</li>
        ))}
        </ul>
    );
    }

export default ListaDeNombres;