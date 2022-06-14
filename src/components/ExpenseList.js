import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import Expense from "./Expense";
import Chart from "./Chart";

const ExpenseList = (props) => {
  const date_select = new Date();
  const [filterYr, setFilterYr] = useState(`${date_select.getFullYear()}`);

  const onDropDownHandler = (year) => {
    setFilterYr(year);
  };

  const filterResult = props.items.filter(
    (data) => data.date.getFullYear().toString() === filterYr
  );

  return (
    <div>
      <ExpenseFilter selected={filterYr} onDropDown={onDropDownHandler} />
      <Chart items={filterResult} />
      <Expense items={filterResult} />
    </div>
  );
};

export default ExpenseList;
