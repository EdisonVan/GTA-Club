import React from "react";
import PropTypes from "prop-types";

interface todoPros {
  onClick: () => void
  completed: boolean
  text: any
}
const Todo = ({ onClick, completed, text }: todoPros) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
