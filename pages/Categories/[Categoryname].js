import { useRouter } from "next/router";
import React from "react";
import carsData from "@/data/carsData";
import Card from "@/Components/module/Card/Card";
import CarsPage from "@/Components/template/CarsPage";
import Back from "@/Components/icons/Back";

const EachCategory = () => {
  const router = useRouter();
  const { Categoryname } = router.query;
  const SelectedCar = carsData.filter(
    (car) => car.category === Categoryname.toLowerCase()
  );
  console.log(SelectedCar);
  return (
    <div className="m-auto" style={{ maxWidth: "1000px" }}>
      <div
        className="flex justify-content-center p-2 border-round-2xl ml-3 align-items-center cursor-pointer"
        onClick={() => router.back()}
        style={{width:"120px", backgroundColor:"#bbdefb"}}
      >
        <Back />
        <p className="ml-3">Back</p>
      </div>
      <CarsPage data={SelectedCar} />
    </div>
  );
};

export default EachCategory;
