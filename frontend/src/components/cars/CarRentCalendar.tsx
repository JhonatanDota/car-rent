import { useState, useEffect } from "react";
import moment from "moment";
import { Dispatch, SetStateAction } from "react";
import CalendarFormatModel from "../../models/CalendarFormatModel";
import RentDaysModel from "../../models/RentDaysModel";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import {
  Calendar,
  DayRange,
} from "@hassanmojab/react-modern-calendar-datepicker";

interface CarRentCalendarProps {
  selectedDayRange: DayRange;
  setSelectedDayRange: Dispatch<SetStateAction<DayRange>>;
  rawDisabledDates: Array<RentDaysModel>;
}

export default function CarRentCalendar(props: CarRentCalendarProps) {
  const { selectedDayRange, setSelectedDayRange, rawDisabledDates } = props;

  const [formattedDisabledDates, setFormattedDisabledDates] = useState<
    Array<CalendarFormatModel>
  >([]);

  function calendarFormatter(rawDate: moment.Moment) {
    const formatedDate: CalendarFormatModel = {
      year: rawDate.year(),
      month: rawDate.month() + 1,
      day: rawDate.date(),
    };
    return formatedDate;
  }

  useEffect(() => {
    const formatedDatesList: CalendarFormatModel[] =
      rawDisabledDates.map((rawDisabledDate: RentDaysModel) => {
        return calendarFormatter(moment(rawDisabledDate.date));
      });

    setFormattedDisabledDates(formatedDatesList);
  }, [rawDisabledDates]);

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      disabledDays={formattedDisabledDates}
      minimumDate={calendarFormatter(moment())}
      shouldHighlightWeekends
    />
  );
}
