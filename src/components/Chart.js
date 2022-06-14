import "./style.css";

const Chart = (props) => {

  const chart_data = [
    { label: "Jan", height: "0" },
    { label: "Feb", height: "0" },
    { label: "Mar", height: "0" },
    { label: "Apr", height: "0" },
    { label: "May", height: "0" },
    { label: "Jun", height: "0" },
    { label: "Jul", height: "0" },
    { label: "Aug", height: "0" },
    { label: "Sep", height: "0" },
    { label: "Oct", height: "0" },
    { label: "Nov", height: "0" },
    { label: "Dec", height: "0" },
  ];

  let totalAmt = 0;
  let amtArray = [];
  let monthArray = [];

  props.items.map((data) => {
    const item_month = data.date.toLocaleString("default", { month: "short" });
    monthArray.push(item_month);

    chart_data.map((i) => {
      if (i.label === item_month) {
        amtArray.push(parseFloat(data.amount));
        totalAmt += parseFloat(data.amount);
      }
    });
  });

  for (let i = 0; i < amtArray.length; i++) {
    let finalVal = `${(amtArray[i] / totalAmt) * 100}%`;
    chart_data.map((data) => {
      if (data.label === monthArray[i]) {
        data.height = finalVal;
      }
    });
  }

  return (
    <div className="chart">
      {chart_data.map((data, idx) => (
        <div key={idx}>
          <div className="chart-bar">
            <div className="chart-bar__inner">
              <div
                className="chart-bar__fill"
                style={{ height: data.height }}
              ></div>
            </div>
          </div>
          <div className="chart-bar__label">{data.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Chart;
