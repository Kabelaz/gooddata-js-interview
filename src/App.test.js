// Copyright (C) 2007-2019, GoodData(R) Corporation. All rights reserved.

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MonthFilter from "./components/month-filter";
import SingleMonthChart from "./components/single-month-chart";
import AllMonthsChart from "./components/all-months-chart";

it("app renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("month filter renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MonthFilter />, div);
});

it("single month chart renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SingleMonthChart />, div);
});

it("all months renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AllMonthsChart />, div);
});
