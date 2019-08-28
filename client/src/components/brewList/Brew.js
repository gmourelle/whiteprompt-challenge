import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Brew = ({ brew }) => {
  const { id, name, image } = brew;
  return (
    <Link className="brew-container" to={`/brews/${id}`}>
      <img className="img" src={image} alt={name} />
      <span>{name}</span>
    </Link>
  );
};

Brew.propTypes = {
  brew: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Brew;
