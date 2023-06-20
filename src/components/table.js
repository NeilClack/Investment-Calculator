const InvestmentTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Year Earnings</th>
          <th>Total Contributions</th>
          <th>EOY Savings</th>
        </tr>
      </thead>
      <tbody>
        {props.records.map((record) => {
          return (
            <tr key={record.year}>
              <td>{record.year}</td>
              <td>{parseFloat(record.yearlyEarnings).toFixed(2)}</td>
              <td>{record.totalContribution}</td>
              <td>{parseFloat(record.savingsEoy).toFixed(2)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
