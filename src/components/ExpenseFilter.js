const ExpenseFilter = (props) => {

    const onChangeHandler = (evt) => {
        props.onDropDown(evt.target.value);
    }

  return (
    <div className="expenses-filter__control">
      <div className="expenses-filter">
        <label>Filter by Year</label>
      </div>
      <div className="expenses-filter">
        <select value={props.selected} onChange={onChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
