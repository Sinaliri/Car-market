import React from "react";
import carsData from "@/data/carsData";
import Categories from "@/Components/module/Categories/Categories";
import CarsPage from "@/Components/template/CarsPage";
import Searchfield from "@/Components/module/Searchfield/Searchfield";
import Back from "@/Components/icons/Back";
import { useRouter } from "next/router";
const Details = () => {
  const router=useRouter()
  return (
    <div className="flex justify-content-center flex-column" style={{ margin: "0 auto" }}>
      <Searchfield/>
      <div className={`grid m-0`}>
      <Categories/>
      </div>
      <div
        className="flex justify-content-center p-2 border-round-2xl ml-3 align-items-center cursor-pointer"
        onClick={() => router.back()}
        style={{width:"120px", backgroundColor:"#bbdefb"}}
      >
        <Back />
        <p className="ml-3">Back</p>
      </div>
      <CarsPage data={carsData} />
    </div>
  );
};

export default Details;
