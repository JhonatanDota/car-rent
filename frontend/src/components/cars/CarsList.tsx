import { useState, useEffect } from "react";
import { getCars, getCarsByPage } from "./requests";
import { parseMonetaryValue } from "../../functions/parsers";
import {
  BsSpeedometer2,
  BsCalendar2,
  BsGear,
  BsFuelPump,
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
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
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");

  async function fetchCars() {
    try {
      const carsResponse = await getCars();

      setCars(carsResponse.data);
      setNextPage(carsResponse.next_page_url);
      setPreviousPage(carsResponse.prev_page_url);
    } catch {}
  }

  async function fetchCarsByPage(url: string) {
    try {
      const carsResponse = await getCarsByPage(url);

      setCars(carsResponse.data);
      setNextPage(carsResponse.next_page_url);
      setPreviousPage(carsResponse.prev_page_url);
    } catch {}
  }

  function handleNextPageButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchCarsByPage(nextPage);
  }

  function handlePreviousPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchCarsByPage(previousPage);
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="flex flex-col p-8 max-w-5xl m-auto">
      <CarsFilters />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="flex flex-col gap-y-4 box-sh shadow-2xl	">
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
      <div className="flex justify-evenly font-bold mt-5">
        {previousPage && (
          <button
            className="flex items-center"
            onClick={() => handlePreviousPage()}
          >
            <BsFillArrowLeftSquareFill size={20} />
            <span className="ml-2">Anterior</span>
          </button>
        )}
        {nextPage && (
          <button
            className="flex items-center"
            onClick={() => handleNextPageButton()}
          >
            <span className="mr-2">Próximo</span>
            <BsFillArrowRightSquareFill size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
