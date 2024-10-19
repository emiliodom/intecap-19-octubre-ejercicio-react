import React, { useEffect } from "react";
import ErrorComponente from "./ErrorComponente";

const ListaNombres = () => {
    const [nombres, setNombres] = React.useState([]);
    const [nombreEditado,setNombreEditado] = React.useState("");
    const [indiceEditado,setIndiceEditado] = React.useState(null);
    const [error,setError] = React.useState(null);

    useEffect(() => {
        if (nombres.length === 0){
            
            setTimeout(() => {
                setError("No hay nombres en la lista");
              }, 2000);
              setError(null);
        }
        else {
            setError(null);
        }
    },[nombres]);

    useEffect(() => {
        if (indiceEditado!=null){
            setNombreEditado(nombres[indiceEditado]);
        }
        else
            setNombreEditado("");
    },[indiceEditado,nombres]);

    const eliminarNombre = (indice) => {
        const nuevosNombres = nombres.filter((_, index) => index !== indice);
        setNombres(nuevosNombres);
    };

    const comenzarEdicion = (indice) => {
        setIndiceEditado(indice);
    }

    const manejarCambio = (e) => {
        setNombreEditado(e.target.value);
    };

    const guardarEdicion = (indice) => {
        const nuevosNombres = nombres.map((nombre,i)=> (i===indice ? nombreEditado: nombre));
        console.log("nuevos nombres serán: ", nuevosNombres);
        console.log("elemento eliminado" , nombres[indice]);
        setNombres(nuevosNombres);
        setIndiceEditado(null);

    };

    const cancelarEdicion = (indice) => {
        setIndiceEditado(null);
    };

    return (
        <div>
            <h2>Lista de nombre</h2>
           {error!=null && <ErrorComponente mensaje={error} />
}
            <burton onClick={() => setNombres(["Juan", "Pedro", "Pablo", "María", "Ana"])}>Cargar nombres</burton>
            <button onClick={()=> setNombres([])}>Limpiar nombres</button>
            <ul>
                {nombres.map((nombre, index) => 
                (
                        <li key={index}>
                            {indiceEditado === index ? (
                                <input type="text" value={nombreEditado} onChange={manejarCambio}></input>
                            ) : (
                                nombre
                            )}
                            <button onClick={() => eliminarNombre(index)}>Eliminar</button>
                            {indiceEditado === index ? (
                                <>
                                    <button onClick={() => guardarEdicion(index)}>Guardar</button>
                                    <button onClick={() => cancelarEdicion(index)}>Cancelar</button>
                                </>
                            ) : (
                                <button onClick={() => comenzarEdicion(index)}>Editar</button>
                            )}

                        </li>
                ))}
                </ul>
        </div> 
);
}
export default ListaNombres;