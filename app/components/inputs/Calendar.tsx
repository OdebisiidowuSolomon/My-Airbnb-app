"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

export default function Calendar({
  value,
  disabledDate,
  onChange,
}: {
  value: Range;
  disabledDate?: Date[];
  onChange: (value: RangeKeyDict) => void;
}) {
  return (
    <DateRange
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      onChange={onChange}
      direction="vertical"
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDate}
    />
  );
}
