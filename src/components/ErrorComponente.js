import React from "react";

const ErrorComponente = ({mensaje}) => {
    return (
        <div id="hideMe"
        style={{
        backgroundColor: "red",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        width: "50%",
        border: "1px solid #ccc",
        margin: "10px auto"
        }}>

            <h2>Error</h2>
            <p>{mensaje}</p>
        </div>
    );
}
export default ErrorComponente;