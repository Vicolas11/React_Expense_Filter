import "./style.css";

const ExpenseDate = (props) => {
  const date = props.date;
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const day = date.getDate();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__date"><h2>{day}</h2></div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
