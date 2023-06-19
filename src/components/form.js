const UserForm = (props) => {
  return (
    <form>
      <fieldset>
        <div className="leftContainer">
          <div className="fieldContainer">
            <label for="currentSavings">Current Savings ($)</label>
            <input
              id="currentSavings"
              min="0"
              step="100"
              type="number"
              placeholder="1000"
            ></input>
          </div>
          <div className="fieldContainer">
            <label for="yearlyContnribution">Yearly Contribution ($)</label>
            <input
              id="yearlyContribution"
              type="number"
              min="0"
              step="100"
              placeholder="1000"
            ></input>
          </div>
        </div>
        <div className="rightContainer">
          <div className="fieldContainer">
            <label for="interestRate">Interest Rate</label>
            <input
              id="interestRate"
              type="number"
              min="0"
              max="100"
              step=".25"
              placeholder="7.25"
            ></input>
          </div>
          <div className="fieldContainer">
            <label for="investmentDuration">Investment Duration (Years)</label>
            <input
              id="investmentDuration"
              type="number"
              min="1"
              max="100"
              step="1"
              placeholder="10"
            ></input>
          </div>
        </div>
        <button type="submit" value="Submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default UserForm;
