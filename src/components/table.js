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
              <td>{record.yearlyEarnings}</td>
              <td>{record.totalContribution}</td>
              <td>{record.savingsEoy}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
