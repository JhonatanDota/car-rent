import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCarById, getNextRentDaysByCarId } from "./requests";
import CarModel from "../../models/CarModel";
import CarCardSkeleton from "./CarCardSkeleton";
import { CAR_TRANSMITIONS, FUEL_TYPES } from "../../readables/carReadables";
import RentDaysModel from "../../models/RentDaysModel";
import CarRentCalendar from "./CarRentCalendar";
import {
  BsSpeedometer2,
  BsCalendar2,
  BsGear,
  BsFuelPump,
  BsDoorClosed,
  BsCloudFog2,
} from "react-icons/bs";
import { parseMonetaryValue } from "../../functions/parsers";

export default function CarCard() {
  const { id } = useParams();

  const [car, setCar] = useState<CarModel>();
  const [disabledRentDays, setDisabledRentDays] = useState<
    Array<RentDaysModel>
  >([]);

  async function fetchCar(id: number) {
    try {
      const carResponse = await getCarById(id);
      setCar(carResponse.data);
    } catch {}
  }

  async function fetchNextRentDays(id: number) {
    try {
      const nextRentDaysResponse = await getNextRentDaysByCarId(id);
      setDisabledRentDays(nextRentDaysResponse.data);
    } catch {}
  }

  useEffect(() => {
    fetchCar(Number(id));
    fetchNextRentDays(Number(id));
  }, []);

  function carInformationCard(
    info: string,
    value: string | number,
    icon: React.ReactNode
  ) {
    return (
      <div className="flex flex-col gap-y-2 text-sm md:text-lg items-center p-6 bg-slate-100 rounded-xl">
        {icon}
        <div className="flex flex-col items-center">
          <span className="text-slate-500">{info}</span>
          <span className="font-bold">{value}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl m-auto">
      {car ? (
        <div className="flex flex-col items-center">
          <img className="w-full" src={car.image} alt="" />
          <div className="p-2 mt-8 w-full bg-green-200 text-center rounded-lg">
            <span className="font-bold text-lg md:text-2xl">{parseMonetaryValue(car.value)}</span>
            <span className="text-sm"> / dia</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
            {carInformationCard("Ano", car.year, <BsCalendar2 />)}
            {carInformationCard("Km", car.kilometers, <BsSpeedometer2 />)}
            {carInformationCard(
              "Combustível",
              FUEL_TYPES[car.fuel_type],
              <BsFuelPump />
            )}
            {carInformationCard(
              "Transmissão",
              CAR_TRANSMITIONS[car.transmision_type],
              <BsGear />
            )}
            {carInformationCard("Portas", car.doors, <BsDoorClosed />)}
            {carInformationCard(
              "Ar Condicionado",
              car.air_conditioning ? "Possui" : "Não Possui",
              <BsCloudFog2 />
            )}
          </div>
          <CarRentCalendar rawDisabledDates={disabledRentDays} />
        </div>
      ):(
        <CarCardSkeleton/>
      )}
    </div>
  );
}
