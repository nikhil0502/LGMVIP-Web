import React from "react";
import PropTypes from "prop-types";
import "../css/Button.css";

const CalcButton = ({
  name,
  color,
  wide,
  clickHandler,
  textColor,
  fontSize,
}) => (
  <button
    style={{
      width: wide ? "50%" : "25%",
      backgroundColor: color,
      color: textColor,
    }}
    className="Button"
    onClick={() => {
      clickHandler(name);
    }}
    type="submit"
  >
    {name}
  </button>
);

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

CalcButton.defaultProps = {
  color: "#F5923E",
  textColor: "black",
  wide: false,
};

export default CalcButton;
