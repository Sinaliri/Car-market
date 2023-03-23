import React, { useState } from "react";
import style from "./searchfield.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Searchfield = () => {
  const [min, setmin] = useState("");
  const [max, setmax] = useState("");
  const router=useRouter();
  const searchHandler=()=>{
    if(max && min){
        router.push(`/filter/${min}/${max}` )

    }
    else{
        alert("fill inputs")

    }
  }
  return (
    <div className={`${style.container} grid justify-content-center align-items-center w-25rem mx-auto mt-2`}>
      <div className="col-10">
        <div className="flex flex-column justify-content-center align-items-left">
          <label>Minimum</label>
          <input
            className={``}
            value={min}
            type="text"
            placeholder="Enter Minimum amount"
            onChange={(e) => setmin(e.target.value)}
          />
        </div>
        <div className="flex flex-column justify-content-center align-items-left ">
          <label>Maximum</label>
          <input
          value={max}
            type="text"
            placeholder="Enter Maximum amount"
            onChange={(e) => setmax(e.target.value)}
          />
        </div>
      </div>
     <div className={`col-2 flex justify-content-center align-items-center ${style.searchButton}`} onClick={searchHandler}>
    <p className="border-round-xl">search</p>
    </div>
    </div>
  );
};

export default Searchfield;
