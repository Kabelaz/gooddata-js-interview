// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";

import SingleMonthChart from "./components/single-month-chart";
import AllMonthsChart from "./components/all-months-chart";

const grossProfitMeasure = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/6877";
const dateAttributeInMonths =
  "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2142";
const dateAttribute = "/gdc/md/xms7ga4tf3g3nzucd8380o2bev8oeknp/obj/2180";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: 1,
      lastDay: 31,
      year: 2016,
    };
  }

  getMonthFilter() {
    return {
      absoluteDateFilter: {
        dataSet: {
          uri: dateAttribute,
        },
        from: `${this.state.year}-${this.state.month}-01`,
        to: `${this.state.year}-${this.state.month}-${this.state.lastDay}`,
      },
    };
  }

  setMonth = (event) => {
    if (event) {
      this.setState({
        month: event.target.value,
        lastDay: new Date(this.state.year, event.target.value, 0).getDate(),
      });
    }
  };

  getMeasures() {
    return [
      {
        measure: {
          localIdentifier: "m1",
          definition: {
            measureDefinition: {
              item: {
                uri: grossProfitMeasure,
              },
            },
          },
          alias: "$ Gross Profit",
        },
      },
    ];
  }

  getViewBy() {
    return {
      visualizationAttribute: {
        displayForm: {
          uri: dateAttributeInMonths,
        },
        localIdentifier: "a1",
      },
    };
  }

  render() {
    const projectId = "xms7ga4tf3g3nzucd8380o2bev8oeknp";
    const filters = [this.getMonthFilter()];
    const measures = this.getMeasures();
    const viewBy = this.getViewBy();

    return (
      <div className="App">
        <SingleMonthChart
          className="SingleMonthChart"
          measures={measures}
          filters={filters}
          projectId={projectId}
          title={"$ Gross Profit in month"}
          onMonthChange={this.setMonth}
        />
        <AllMonthsChart
          className="AllMonthsChart"
          title="$ Gross Profit - All months"
          measures={measures}
          viewBy={viewBy}
          projectId={projectId}
        />
      </div>
    );
  }
}

export default App;
