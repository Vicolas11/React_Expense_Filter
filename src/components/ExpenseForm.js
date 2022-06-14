import { useState } from "react";
import "./style.css";

const ExpenseForm = (props) => {
  let dataLen = props.dataLength;
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [show, setShow] = useState(false);

  const onChangeTitleHandler = (evt) => setEnteredTitle(evt.target.value);

  const onChangeAmountHandler = (evt) => setEnteredAmount(evt.target.value);

  const onChangeDateHandler = (evt) => setEnteredDate(evt.target.value);

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    let count_idx = dataLen++;
    const expense_data = {
      id: `e${count_idx}`,
      item: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // Sent Data to Parent
    props.onExpenseAdded(expense_data);
    // Reset Form
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense">
        {show && (
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="item">Item</label>
              <input
                type="text"
                id="item"
                value={enteredTitle}
                onChange={onChangeTitleHandler}
                required
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                step=".01"
                min="100"
                max="1500"
                id="amount"
                value={enteredAmount}
                onChange={onChangeAmountHandler}
                required
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                min="2000-01-01"
                max="2022-06-14"
                id="date"
                value={enteredDate}
                onChange={onChangeDateHandler}
                required
              />
            </div>
          </div>
        )}
        <div className={show ? "new-expense__actions" : "text-center"}>
          {show && <button onClick={() => setShow(false)}>Cancel</button>}
          <button onClick={() => setShow(true)} type="submit">
            Add New Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
