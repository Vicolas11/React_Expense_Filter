import ExpenseItem from "./ExpenseItem";
import "./style.css";

const Expense = (props) => {
  if (props.items.length === 0) {
    return <h2 className="no-filter">No Expense for this year</h2>;
  }

  return props.items.map((itm) => (<ExpenseItem items={itm} key={itm.id} />));
};

export default Expense;
