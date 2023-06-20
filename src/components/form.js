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
  margin: 1rem;
`;

const SubmitButton = styled.button`
  margin: auto;
`;

const ButtonContainer = styled(FieldContainer)`
  text-align: center;
`;

const UserForm = (props) => {
  const [investmentData, setInvestmentData] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    duration: "",
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
          <FieldContainer>
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
          <div>
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
          <div>
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
          <div>
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
        <ButtonContainer>
          <SubmitButton type="submit" value="Submit">
            Submit
          </SubmitButton>
        </ButtonContainer>
      </Fieldset>
    </StyledForm>
  );
};

export default UserForm;
