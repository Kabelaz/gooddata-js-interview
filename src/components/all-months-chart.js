import React from "react";
import { ColumnChart } from "@gooddata/react-components";

function AllMonthsChart({ measures, viewBy, projectId, title }) {
  return (
    <>
      <h1>{title}</h1>
      <div>
        <ColumnChart
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    </>
  );
}

export default AllMonthsChart;
