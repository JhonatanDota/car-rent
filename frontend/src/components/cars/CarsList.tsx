import { useState, useEffect } from "react";
import { getCars } from "./requests";
import { parseMonetaryValue } from "../../functions/parsers";
import CarModel from "../../models/CarModel";

export default function CarsList() {
  const [cars, setCars] = useState<CarModel[]>([]);

  async function fetchCars() {
    try {
      const carsResponse = await getCars();
      setCars(carsResponse.data);
    } catch {}
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-4 w-full max-w-5xl m-auto">
      {cars.map((car) => (
        <div className="flex flex-col gap-y-2">
          <img className="w-full rounded-xl" src={car.image} alt="" />
          <h3 className="text-sm font-bold">{car.name}</h3>
          <h3 className="text-md font-bold">{parseMonetaryValue(car.value)} <span className="text-xs"> / dia</span></h3>


          <p>{car.kilometers}</p>
          <p>{car.year}</p>
        </div>
      ))}
    </div>
  );
}
