import styled from "styled-components";

const Table = styled.table`
border-collapse: collapse;
margin: 0 1rem;
`
const TRow = styled.tr`

`
const TBody = styled.tbody`
  ${TRow}:nth-child(even){
    background-color: #c6ebf7;
  }
`


const InvestmentTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Year Earnings</th>
          <th>Total Contributions</th>
          <th>EOY Savings</th>
        </tr>
      </thead>
      <TBody>
        {props.records.map((record) => {
          return (
            <TRow key={record.year}>
              <td>{record.year}</td>
              <td>{parseFloat(record.yearlyEarnings).toFixed(2)}</td>
              <td>{record.totalContribution}</td>
              <td>{parseFloat(record.savingsEoy).toFixed(2)}</td>
            </TRow>
          );
        })}
      </TBody>
    </Table>
  );
};

export default InvestmentTable;
