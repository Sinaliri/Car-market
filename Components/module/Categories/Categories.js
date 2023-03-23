import React from 'react'
import Sedan from "../../icons/Sedan"
import Suv from "../../icons/Suv"
import Hatchback from "../../icons/Hatchback"
import Sport from "../../icons/Sport"
import CategoriesPart from '@/Components/CategoriesPart'
import style from "./Categories.module.scss"

const Categories = () => {
  return (
    <div className={`col-12 md:col-6 md:col-offset-3 flex justify-content-center align-items-center ${style.container}`} >
        <CategoriesPart title="Suv">
            <Suv/>
        </CategoriesPart>
        <CategoriesPart title="Hatchback">
            <Hatchback/>
        </CategoriesPart>
        <CategoriesPart title="Sport">
            <Sport/>
        </CategoriesPart>
        <CategoriesPart title="Sedan">
            <Sedan/>
        </CategoriesPart>
        <CategoriesPart title="All Cars">
            <Hatchback/>
            <Sedan/>
        </CategoriesPart>
    </div>
  )
}

export default Categories