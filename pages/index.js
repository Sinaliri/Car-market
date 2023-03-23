import Searchfield from "@/Components/module/Searchfield/Searchfield";
import Categories from "@/Components/module/Categories/Categories";
import CarsPage from "@/Components/template/CarsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const cars=carsData.slice(0,3)
  return (
    <div
      className="flex justify-content-center flex-column"
      style={{ margin: "0 auto" }}
    >
      <Searchfield />
      <div className={`grid m-0`}>
        <Categories />
      </div>

      <CarsPage data={cars} />
    </div>
  );
}
