import React from "react";
import PropTypes from "prop-types";
import "../css/Display.css";

const Display = ({ result }) => (
  <div className="Display">
    <div className="display-text">{result}</div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
