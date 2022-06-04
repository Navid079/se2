import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import './Expendable.css';

const Expendable = ({ onClick }) => {
  return (
    <div className="expandable" onClick={onClick}>
      <AiOutlinePlus className="expandable-icon" />
    </div>
  );
};

export default Expendable;
