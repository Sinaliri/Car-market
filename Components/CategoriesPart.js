import Link from "next/link";
import React from "react";

const CategoriesPart = ({ title, children }) => {
  let Path;
  if (title === "All Cars") {
    Path = "/Car";
  }else{
    Path=`/Categories/${title}`
  }
  return (
    <div
      className={`col-2 m-1 flex flex-column justify-content-center align-items-center `}
      style={{ backgroundColor: "#b1e0be", borderRadius: "5px" }}
    >
      <Link
        href={Path}
        className="flex flex-column justify-content-center align-items-center w-full"
      >
        <span>{title}</span>
        <div className="flex justify-content-around">{children}</div>
      </Link>
    </div>
  );
};

export default CategoriesPart;
