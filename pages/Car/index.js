import React from "react";
import carsData from "@/data/carsData";
import Categories from "@/Components/module/Categories/Categories";
import CarsPage from "@/Components/template/CarsPage";
import Searchfield from "@/Components/module/Searchfield/Searchfield";

const Details = () => {
  return (
    <div className="flex justify-content-center flex-column" style={{ margin: "0 auto" }}>
      <Searchfield/>
      <div className={`grid m-0`}>
      <Categories/>
      </div>
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
