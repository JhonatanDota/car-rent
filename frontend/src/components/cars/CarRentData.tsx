import { useState, useEffect } from "react";
import moment from "moment";
import { DayRange } from "@hassanmojab/react-modern-calendar-datepicker";
import CalendarFormatModel from "../../models/CalendarFormatModel";
import { parseMonetaryValue } from "../../functions/parsers";

interface CarRentDataProps {
  dayRange: DayRange;
  carRentDayValue: number;
}

export default function CarRentData(props: CarRentDataProps) {
  const { dayRange, carRentDayValue } = props;

  const [rentStartDate, setRentStartDate] = useState<string>("");
  const [rentEndDate, setRentEndDate] = useState<string>("");
  const [rentTotalValue, setRentTotalValue] = useState<string>("");

  useEffect(() => {
    const formattedStartDate = dayRange.from
      ? dayRangeToDate(dayRange.from)
      : "";
    const formattedEndDate = dayRange.to ? dayRangeToDate(dayRange.to) : "";

    setRentStartDate(formattedStartDate);
    setRentEndDate(formattedEndDate);

    if (formattedStartDate && formattedEndDate) {
      let daysDiff = getDiffDaysBetweenStartDateAndEndDate(
        formattedStartDate,
        formattedEndDate
      );
      let totalRentValue = getRentTotalValue(daysDiff);

      setRentTotalValue(parseMonetaryValue(totalRentValue));
    }
  }, [dayRange]);

  function getRentTotalValue(totalDays: number): number {
    return totalDays * carRentDayValue;
  }

  function getDiffDaysBetweenStartDateAndEndDate(
    startDate: string,
    endDate: string
  ): number {
    const fromFormat = "DD-MM-YYYY";

    let startDateMomentType = moment(startDate, fromFormat);
    let endDateMomentType = moment(endDate, fromFormat);

    return endDateMomentType.diff(startDateMomentType, "days") + 1;
  }

  function dayRangeToDate(dateCalendarFormat: CalendarFormatModel): string {
    let date = moment({
      year: dateCalendarFormat.year,
      month: dateCalendarFormat.month - 1,
      day: dateCalendarFormat.day,
    });

    return date.format("DD/MM/YYYY");
  }

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <label className="text-lg">Início</label>
          <input
            className="text-center text-lg font-bold w-full pointer-events-none"
            type="text"
            value={rentStartDate}
            readOnly
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-lg">Termino</label>
          <input
            className="text-center text-lg font-bold w-full pointer-events-none"
            type="text"
            value={rentEndDate}
            readOnly
          />
        </div>
      </div>
      {rentTotalValue && (
        <div className="flex flex-col items-center">
          <label className="text-lg">Valor total do aluguel</label>
          <input
            className="text-center text-lg font-bold w-full pointer-events-none"
            type="text"
            value={rentTotalValue}
            readOnly
          />
        </div>
      )}
    </div>
  );
}
