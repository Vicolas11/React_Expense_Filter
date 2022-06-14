import ExpenseDate from "./ExpenseDate";
import "./style.css";

const ExpenseItem = (props) => {
  return (
    <div className="expenses">
      <div className="expense-item">
        <ExpenseDate date={props.items.date} />
        <div className="expense-item__description">
          <h2>{props.items.item}</h2>
          <div className="expense-item__price">${props.items.amount}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
