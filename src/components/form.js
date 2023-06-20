import { useState } from "react";

const UserForm = (props) => {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0.0,
    duration: 0,
  });

  const handleSubmission = (event) => {
    event.preventDefault();
    console.log(investmentData);
  };

  const handleChange = (target, value) => {
    // Remember to update state using a function when depending on the previous state.
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [target]: value,
      };
    });
    console.log(investmentData);
  };

  return (
    <form onSubmit={handleSubmission}>
      <fieldset>
        <div className="leftContainer">
          <div className="fieldContainer">
            <label htmlFor="currentSavings">Current Savings ($)</label>
            <input
              id="currentSavings"
              min="0"
              type="number"
              placeholder="1000"
              onChange={(event) => {
                handleChange("currentSavings", event.target.value);
              }}
              value={investmentData.currentSavings}
            ></input>
          </div>
          <div className="fieldContainer">
            <label htmlFor="yearlyContnribution">Yearly Contribution ($)</label>
            <input
              id="yearlyContribution"
              type="number"
              min="0"
              placeholder="1000"
              onChange={(event) => {
                handleChange("yearlyContribution", event.target.value);
              }}
              value={investmentData.yearlyContribution}
            ></input>
          </div>
        </div>
        <div className="rightContainer">
          <div className="fieldContainer">
            <label htmlFor="expectedReturn">Interest Rate</label>
            <input
              id="expectedReturn"
              type="float"
              min="0"
              max="100"
              placeholder="7.25"
              onChange={(event) => {
                handleChange("expectedReturn", event.target.value);
              }}
              value={investmentData.expectedReturn}
            ></input>
          </div>
          <div className="fieldContainer">
            <label htmlFor="investmentDuration">
              Investment Duration (Years)
            </label>
            <input
              id="investmentDuration"
              type="number"
              min="1"
              max="100"
              step="1"
              placeholder="10"
              onChange={(event) => {
                handleChange("duration", event.target.value);
              }}
              value={investmentData.duration}
            ></input>
          </div>
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default UserForm;
