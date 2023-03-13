import style from "./Card.module.scss";
import React from "react";
import Location from "@/Components/icons/Location";
import Link from "next/link";

const Card = (props) => {
  const { id, location, name, model, year, distance, image, price } = props;
  return (
    <Link href={`/Car/${id}`}>
      <div className={`col-12 sm:col-6  md:col-4 lg:col-4 ${style.container} `}>
        <div className="flex justify-content-center">
          <img className={style.image} src={image} alt={model} />
        </div>
        <div className="mx-0 my-1">
          <h4>{`${name} ${model}`}</h4>
        </div>
        <div className={`my-2 ${style.detail}`}>
          <p>{`${year} . ${distance}km`}</p>
        </div>
        <div className="flex justify-content-between align-items-center">
          <p className={style.price}>{`$ ${price}`}</p>
          <div
            className={`flex justify-content-center align-items-center  ${style.location}`}
          >
            <p>{location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
