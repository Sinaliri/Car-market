import { useRouter } from "next/router";
import carsData from "../../data/carsData.js";
import React from "react";
import CarsDetail from "@/Components/template/CarsDetail/CarsDetail.js";


const CarDetail = () => {
  const router = useRouter();
  const { CarID } = router.query;
  const CarDetailInfo = carsData[CarID - 1];
  console.log(CarDetailInfo);
  return (
    <CarsDetail CarDetailInfo={CarDetailInfo} />
  );
};

export default CarDetail;
