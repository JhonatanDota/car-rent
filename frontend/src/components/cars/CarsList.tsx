import { useState, useEffect } from "react";
import { getCars } from "./requests";
import { parseMonetaryValue } from "../../functions/parsers";
import {
  BsSpeedometer2,
  BsCalendar2,
  BsGear,
  BsFuelPump,
} from "react-icons/bs";
import {
  BRANDS,
  FUEL_TYPES,
  CAR_TRANSMITIONS,
} from "../../readables/carReadables";
import CarModel from "../../models/CarModel";
import { CarsFilters } from "./CarsFilters";

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
    <div className="flex flex-col md:flex-row p-8">
      <CarsFilters/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl m-auto">
        {cars.map((car) => (
          <div className="flex flex-col gap-y-4 box-sh shadow-2xl	">
            <img className="rounded-xl" src={car.image} alt="" />
            <div className="flex flex-col p-2 gap-1">
              <div className="flex flex-col gap-y-2 items-center lg:items-start">
                <h3 className="text-lg font-bold">{`${BRANDS[car.brand]} - ${
                  car.name
                }`}</h3>

                <h3 className="text-2xl font-bold">
                  {parseMonetaryValue(car.value)}{" "}
                  <span className="text-sm"> / dia</span>
                </h3>
              </div>

              <div className="flex p-4 justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-lg">
                    <BsSpeedometer2 />
                    <h4>{car.kilometers}</h4>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <BsCalendar2 />
                    <h4>{car.year}</h4>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-lg">
                    <BsGear />
                    <h4>{CAR_TRANSMITIONS[car.transmision_type]}</h4>
                  </div>

                  <div className="flex items-center gap-2 text-lg">
                    <BsFuelPump />
                    <h4>{FUEL_TYPES[car.fuel_type]}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
