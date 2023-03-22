import React from "react";
import carsData from "@/data/carsData";
import CarsPage from "@/Components/template/CarsPage";

const Details = () => {
  return (
    <div className="flex justify-content-center" style={{ margin: "0 auto" }}>
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
