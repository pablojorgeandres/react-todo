import React from "react";
import '../Styles/TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                <i className="fa fa-check"></i>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <i className="fa fa-close"></i>
            </span>
        </li>
    );
}

export { TodoItem };
