import CarsPage from '@/Components/template/CarsPage';
import carsData from '@/data/carsData'
import { useRouter } from 'next/router'
import React from 'react'
import Back from '@/Components/icons/Back';


const Filtercar = () => {
  const router=useRouter();
  const [min,max]=router.query.slug || [];
  const filterData=carsData.filter(car=>car.price>=min && car.price<=max)
if(!filterData.length) return <h3>notFound</h3>
    return (
        <>
        <div
        className="flex justify-content-center p-2 border-round-2xl ml-3 align-items-center cursor-pointer"
        onClick={() => router.back()}
        style={{width:"120px", backgroundColor:"#bbdefb"}}
      >
        <Back />
        <p className="ml-3">Back</p>
      </div>
    <CarsPage data={filterData}/>
        </>
  )
}

export default Filtercar