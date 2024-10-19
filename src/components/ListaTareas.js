import React , {useState, useEffect} from "react";
import ErrorComponente from "./ErrorComponente";

const ListaTareas = () => {
    const [tareas, setTareas] = useState([]);
    const [tareaEditada, setTareaEditada] = useState("");
    const [indiceEditado, setIndiceEditado] = useState(null);
    const [error, setError] = useState(null);
    const [tarea, setTarea] = useState("");


    useEffect(() => {
        if (indiceEditado != null) {
            setTareaEditada(tareas[indiceEditado]);
        }
        else {
            setTareaEditada("");
        }
    }, [indiceEditado, tareas]);

    const eliminarTarea = (indice) => {
        const nuevasTareas = tareas.filter((_, index) => index !== indice);
        setTareas(nuevasTareas);
    };

    const comenzarEdicion = (indice) => {
        setIndiceEditado(indice);
    };

    const manejarCambio = (e) => {
        setTareaEditada(e.target.value);
    };

    const guardarEdicion = (indice) => {
        const nuevasTareas = tareas.map((tarea, i) => (i === indice ? tareaEditada : tarea));
        console.log("nuevas tareas serán: ", nuevasTareas);
        console.log("elemento eliminado", tareas[indice]);
        setTareas(nuevasTareas);
        setIndiceEditado(null);
    };

    const cancelarEdicion = (indice) => {
        setIndiceEditado(null);
    };

    const crearTarea = (e) => {
        if (tarea.length === 0) {
            setError("El campo de la tarea no puede estar vacío");
            setTimeout(() => {
                setError(null);
            }, 2000);


            return;
        }
        else{
            setError(null);   
            setTareas([...tareas, tarea]);
        }
            
        
    };

    return (
        <div>
            <h2>Lista de tareas</h2>
            <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}></input>
            <button onClick={() => crearTarea()}>Agregar tarea</button>
            {error != null && <ErrorComponente mensaje={error} />}
            <button onClick={() => setTareas(["Tarea 1", "Tarea 2", "Tarea 3", "Tarea 4", "Tarea 5"])}>Cargar tareas</button>
            <button onClick={() => setTareas([])}>Limpiar tareas</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {indiceEditado === index ? (
                            <input type="text" value={tareaEditada} onChange={manejarCambio}></input>
                        ) : (
                            tarea
                        )}
                        {indiceEditado === index ? (
                            <div>
                                <button onClick={() => guardarEdicion(index)}>Guardar</button>
                                <button onClick={() => cancelarEdicion(index)}>Cancelar</button>
                            </div>
                        ) : (
                            <button onClick={() => comenzarEdicion(index)}>Editar</button>
                        )}

                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ListaTareas;