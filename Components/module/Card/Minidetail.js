import React from "react";
import Company from "../../icons/Company";
import Model from "../../icons/Model";
import Calender from "../../icons/Calender";
import Road from "../../icons/Road";
const Minidetail = ({ title, result, children }) => {
  return (
    <div className="flex justify-content-between align-items-center mt-4 mx-6">
      <div className="flex justify-content-center align-items-center">
        {children}
        <p className="mx-2">{title}</p>
      </div>
      <span>{result}</span>
    </div>
  );
};

export default Minidetail;
