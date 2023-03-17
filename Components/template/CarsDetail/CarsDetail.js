import React from "react";
import Company from "../../../Components/icons/Company";
import Model from "../../../Components/icons/Model";
import Calender from "../../../Components/icons/Calender";
import Road from "../../../Components/icons/Road";
import Locaion from "../../../Components/icons/Location";
import style from "./CarsDetail.module.scss";
import Minidetail from "@/Components/module/Card/Minidetail";
import Money from "@/Components/icons/Money";
import { Button } from "primereact/button";

function CarsDetail({ CarDetailInfo }) {
  console.log(CarDetailInfo);
  return (
    <div className={`grid flex m-0 justify-content-center ${style.container} `}>
      <div
        className={`sm:col-12 lg:col-5  ${style.imgContainer} border-round-2xl`}
      >
        <img
          className="border-round-2xl mr-1"
          src={CarDetailInfo.image}
          alt={CarDetailInfo.name}
        />
      </div>
      <div
        className={`sm:col-12 lg:col-7 mx-0 ${style.minidetailContainer} border-round-2xl`}
      >
        <h1 className="mx-6">{`${CarDetailInfo.name} ${CarDetailInfo.model}`}</h1>
        <Minidetail title="Comapany" result={CarDetailInfo.name}>
          <Company />
        </Minidetail>

        <Minidetail title="Model" result={CarDetailInfo.model}>
          <Model />
        </Minidetail>
        <Minidetail title="First Registration" result={CarDetailInfo.year}>
          <Calender />
        </Minidetail>
        <Minidetail title="Kms driven" result={CarDetailInfo.distance}>
          <Road />
        </Minidetail>
        <Minidetail title="Location" result={CarDetailInfo.location}>
          <Locaion />
        </Minidetail>
        <Minidetail title="Price" result={`$ ${CarDetailInfo.price}`}>
          <Money />
        </Minidetail>
        <div className="flex justify-content-end mr-5 mt-2">
          <Button
            className="py-1 mb-2 px-8 p-button-text-100"
            label="Buy"
            severity="success"
            raised
          />
        </div>
      </div>
      <div
        className={`${style.desc} flex flex-column justify-content-center align-items-start py-4 px-5 my-4 mx-auto border-round-2xl`}
      >
        <h2 className="pb-3 px-2">Information</h2>
        <div className="px-3">{CarDetailInfo.description}</div>
      </div>
    </div>
  );
}

export default CarsDetail;
