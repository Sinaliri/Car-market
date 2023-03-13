import React from 'react'
import Company from "../../../Components/icons/Company";
import Model from "../../../Components/icons/Model";
import Calender from "../../../Components/icons/Calender";
import Road from "../../../Components/icons/Road";

function CarsDetail({CarDetailInfo}) {
  return (
    <div className="grid-nogutter">
      <div>
        <img src={CarDetailInfo.image} alt={CarDetailInfo.name} />
      </div>
      <h1>{`${CarDetailInfo.name} ${CarDetailInfo.model}`}</h1>
      <div>
        <div>
          <div className="flex">
            <Company />
            <p>Company</p>
          </div>
          <span></span>
        </div>
        <div>
          <div className="flex">
            <Model />
            <p>model</p>
          </div>
          <span></span>
        </div>
        <div>
          <div className="flex">
            <Calender />
            <p>First Registration</p>
          </div>
          <span></span>
        </div>
        <div>
          <div className="flex">
            <Road />
            <p>Kms driven</p>
          </div>
          <span></span>
        </div>
        <div>
          <div></div>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default CarsDetail