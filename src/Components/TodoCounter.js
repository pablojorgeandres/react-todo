import React from "react";
import '../Styles/TodoCounter.css';

function TodoCounter ({total, completed}) {
    return (
        <h2 className="TodoCounter">Completaste {completed} tareas de {total}!</h2>
    );
}

export { TodoCounter };