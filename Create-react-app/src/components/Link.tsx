import React from "react";
import PropTypes from "prop-types";

interface LinkTypeProps {
  active: boolean
  children: any
  onClick: () => void
}
const Link = ({ active, children, onClick }: LinkTypeProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px",
    }}
  >
    {children}
  </button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
