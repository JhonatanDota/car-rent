import { useState, useEffect } from "react";
import moment from "moment";
import { DayRange } from "@hassanmojab/react-modern-calendar-datepicker";
import CalendarFormatModel from "../../models/CalendarFormatModel";

interface CarRentDataProps {
  dayRange: DayRange;
}

export default function CarRentData(props: CarRentDataProps) {
  const { dayRange } = props;

  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  useEffect(() => {
    const formattedStartDate = dayRange.from
      ? dayRangeToDate(dayRange.from)
      : "";
    const formattedEndDate = dayRange.to ? dayRangeToDate(dayRange.to) : "";

    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
  }, [dayRange]);

  function dayRangeToDate(dateCalendarFormat: CalendarFormatModel): string {
    let date = moment({
      year: dateCalendarFormat.year,
      month: dateCalendarFormat.month - 1,
      day: dateCalendarFormat.day,
    });

    return date.format("DD/MM/YYYY");
  }

  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col items-center">
        <label>Inicio</label>
        <input type="text" value={startDate} readOnly />
      </div>
      <div className="flex flex-col items-center">
        <label>Termino</label>
        <input type="text" value={endDate} readOnly />
      </div>
    </div>
  );
}
