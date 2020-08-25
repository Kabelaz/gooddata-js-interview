import React from "react";
import { ColumnChart } from "@gooddata/react-components";
import MonthFilter from "./month-filter";

function SingleMonthChart({
  measures,
  projectId,
  title,
  onMonthChange,
  year,
  filters,
}) {
  return (
    <>
      <h1>
        {title}{" "}
        <MonthFilter className="MonthFilter" onMonthChange={onMonthChange} />{" "}
        {year}
      </h1>
      <div>
        <ColumnChart
          measures={measures}
          filters={filters}
          projectId={projectId}
        />
      </div>
    </>
  );
}

export default SingleMonthChart;
