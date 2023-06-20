const InvestmentTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Year Earnings</th>
          <th>Yearly Contribution</th>
          <th>EOY Savings</th>
        </tr>
      </thead>
      <tbody>
        {props.records.map((record) => {
          return (
            <tr key={record.year}>
              <td>{record.year}</td>
              <td>{record.yearlyEarnings}</td>
              <td>{record.yearlyContribution}</td>
              <td>{record.savingsEoy}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentTable;
