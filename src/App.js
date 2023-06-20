import LogoImage from "./assets/investment-calculator-logo.png";
import UserForm from "./components/form";
import { useState } from "react";

function App() {
  const [investmentData, setInvestmentData] = useState(null);
  const calcHandler = (investmentData) => {
    setInvestmentData(investmentData);
  };

  if (investmentData) {
    const records = [];
    let currentSavings = investmentData["currentSavings"];
    const yearlyContribution = investmentData["yearlyContribution"];
    const expectedReturn = investmentData["expectedReturn"] / 100;
    const duration = investmentData["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyEarnings = currentSavings * expectedReturn;
      currentSavings += yearlyEarnings + yearlyContribution;
      records.push({
        year: i + 1,
        yearlyEarnings: yearlyEarnings,
        savingsEoy: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(records);
  }

  return (
    <div className="app">
      <img src={LogoImage} alt="logo"></img>
      <h1>Investment Calculator</h1>
      <UserForm onCalc={calcHandler} />
    </div>
  );
}

export default App;
