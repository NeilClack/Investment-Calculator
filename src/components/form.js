import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  margin: auto;
  padding: 1rem;
  text-align: left;
`;

const Fieldset = styled.fieldset`
  border: 0;
`;

const Label = styled.label`
  display: block;
  margin: auto;
  text-align: center;
`;

const Input = styled.input`
  display: block;
  margin: auto;
  text-align: left;
`;

const FieldContainer = styled.div`
  $.fieldContainer {
    margin: 1rem;
  }
`

const UserForm = (props) => {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: '',
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
        [target]: value,
      };
    });
    console.log(investmentData);
  };

  return (
    <StyledForm onSubmit={handleSubmission}>
      <Fieldset className="noBorder">
        <div className="leftContainer">
          <FieldContainer className="fieldContainer">
            <Label htmlFor="currentSavings">Current Savings ($)</Label>
            <Input
              id="currentSavings"
              min="0"
              type="number"
              onChange={(event) => {
                handleChange("currentSavings", event.target.value);
              }}
              value={investmentData.currentSavings}
              required
            ></Input>
          </FieldContainer>
          <div className="fieldContainer">
            <Label htmlFor="yearlyContnribution">Yearly Contribution ($)</Label>
            <Input
              id="yearlyContribution"
              type="number"
              min="0"
              onChange={(event) => {
                handleChange("yearlyContribution", event.target.value);
              }}
              value={investmentData.yearlyContribution}
              required
            ></Input>
          </div>
        </div>
        <div className="rightContainer">
          <div className="fieldContainer">
            <Label htmlFor="expectedReturn">Expected Return</Label>
            <Input
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
            ></Input>
          </div>
          <div className="fieldContainer">
            <Label htmlFor="investmentDuration">
              Investment Duration (Years)
            </Label>
            <Input
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
            ></Input>
          </div>
        </div>
        <button type="submit" value="Submit">
          Submit
        </button>
      </Fieldset>
    </StyledForm>
  );
};

export default UserForm;
