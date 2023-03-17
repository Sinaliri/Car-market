import style from "./CarsPage.module.scss";
import React from "react";
import Card from "../module/Card/Card";

const CarsPage = ({data}) => {
  return (
    <div className={`grid m-0 ${style.container}`}>
      {data.map((car) => {
     return  <Card key={car.id} {...car}/>
})}
    </div>
  );
};

export default CarsPage;
