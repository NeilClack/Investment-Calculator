import LogoImage from "./assets/investment-calculator-logo.png";
import UserForm from "./components/form";
import InvestmentTable from "./components/table";
import styled from "styled-components";
import { useState } from "react";

const Main = styled.div `
height: 100vh;
width: 100%;
margin: auto;
text-align: center;
`

const Image = styled.img`
margin-top: 4rem;
height: 10rem;
width: auto;
`

const Heading = styled.h1`
  margin: auto;
  text-align: center;
  padding: 1rem;
  `

function App() {
  const [investmentData, setInvestmentData] = useState(null);
  const records = [];

  const calcHandler = (investmentData) => {
    setInvestmentData(investmentData);
  };

  if (investmentData) {
    let currentSavings = investmentData["currentSavings"];
    const yearlyContribution = investmentData["yearlyContribution"];
    const expectedReturn = investmentData["expectedReturn"] / 100;
    const duration = investmentData["duration"];
    let totalContributions = investmentData["currentSavings"];
    for (let i = 0; i < duration; i++) {
      const yearlyEarnings = currentSavings * expectedReturn;
      currentSavings += yearlyEarnings + yearlyContribution;
      totalContributions += yearlyContribution;
      records.push({
        year: i + 1,
        yearlyEarnings: yearlyEarnings,
        savingsEoy: currentSavings,
        totalContribution: totalContributions,
      });
    }
    console.log(records);
  }

  return (
    <Main className="app">
      <Image src={LogoImage} alt="logo"></Image>
      <Heading>Investment Calculator</Heading>
      <UserForm onCalc={calcHandler} />
      {records.length >= 1 ? (
        <InvestmentTable className="userForm" records={records} />
      ) : (
        <p>Nothing to show</p>
      )}
    </Main>
  );
}

export default App;
