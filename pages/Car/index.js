import React from 'react';
import carsData from '@/data/carsData';
import CarsPage from '@/Components/template/CarsPage';

const Details = () => {
  return (
    <div>
        <CarsPage data={carsData}/>
    </div>
  )
}

export default Details