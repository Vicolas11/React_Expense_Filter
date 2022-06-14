import { useState } from "react";
import Card from "./components/Card";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./components/style.css";

const expenses_data = [
  {
    id: "e0",
    date: new Date("2022-08-03"),
    amount: 345.99,
    item: "Food",
  },
  {
    id: "e1",
    date: new Date("2021-05-28"),
    amount: 561.99,
    item: "Water",
  },
  {
    id: "e2",
    date: new Date("2020-10-15"),
    amount: 8900.99,
    item: "House",
  },
];

function App() {
  const date_select = new Date();
  const [expenseData, setExpensesData] = useState(expenses_data);

  const onExpenseAddedHandler = (data) => {
    
    for (const i of expenseData) {
      if (i.item === data.item && i.amount === data.amount && i.date === data.date) {
        alert("Expenses already added");
        return;
      }
    }
    setExpensesData((prevData) => [data, ...prevData]);
  };

  return (
    <div>
      <ExpenseForm
        onExpenseAdded={onExpenseAddedHandler}
        dataLength={expenseData.length}
      />
      <Card className="expenses">
        <ExpenseList items={expenseData} />
      </Card>
    </div>
  );
}

export default App;
