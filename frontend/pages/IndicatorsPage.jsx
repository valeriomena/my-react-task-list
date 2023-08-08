import React from "react";
import TaskCounter from "./TaskCounter";
import ResponsibleBarChart from "./ResponsibleBarChart";

const IndicatorsPage = () => {
  return (
    <div>
      <div>
        <TaskCounter />
      </div>
      <div>
        <ResponsibleBarChart />
      </div>
    </div>
  );
};

export default IndicatorsPage;
