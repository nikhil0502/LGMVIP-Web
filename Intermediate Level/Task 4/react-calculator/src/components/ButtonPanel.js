import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../css/ButtonPanel.css';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);

  return (
    <div className="ButtonPanel">
      <div className="ButtonPanelGroup">
        <Button clickHandler={handleClick} name="AC" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="+/-" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="%" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="÷" textColor="white" />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={handleClick} name="7" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="8" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="9" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="×" textColor="white" />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={handleClick} name="4" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="5" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="6" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="-" textColor="white" />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={handleClick} name="1" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="2" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="3" color="#E0E0E0" />
        <Button clickHandler={handleClick} name="+" textColor="white" />
      </div>
      <div className="ButtonPanelGroup">
        <Button clickHandler={handleClick} name="0" wide color="#E0E0E0" />
        <Button clickHandler={handleClick} name="." color="#E0E0E0" />
        <Button clickHandler={handleClick} name="=" textColor="white" />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;