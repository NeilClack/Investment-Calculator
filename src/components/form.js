import { useState } from "react";

const UserForm = (props) => {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0.00,
    duration: 0,
  });

  const handleSubmission = (event) => {
    event.preventDefault();
    props.onCalc(investmentData);
  };

  const handleChange = (target, value) => {
    // Remember to update state using a function when depending on the previous state.
    setInvestmentData((prevData) => {
      return {
        ...prevData,
        [target]: +value,
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
              onChange={(event) => {
                handleChange("currentSavings", event.target.value);
              }}
              value={investmentData.currentSavings}
              required
            ></input>
          </div>
          <div className="fieldContainer">
            <label htmlFor="yearlyContnribution">Yearly Contribution ($)</label>
            <input
              id="yearlyContribution"
              type="number"
              min="0"
              onChange={(event) => {
                handleChange("yearlyContribution", event.target.value);
              }}
              value={investmentData.yearlyContribution}
              required
            ></input>
          </div>
        </div>
        <div className="rightContainer">
          <div className="fieldContainer">
            <label htmlFor="expectedReturn">Expected Return</label>
            <input
              id="expectedReturn"
              type="float"
              min="0"
              max="100"
              step="0.01"
              onChange={(event) => {
                handleChange("expectedReturn", event.target.value);
              }}
              value={investmentData.expectedReturn}
              required
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
              onChange={(event) => {
                handleChange("duration", event.target.value);
              }}
              value={investmentData.duration}
              required
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
