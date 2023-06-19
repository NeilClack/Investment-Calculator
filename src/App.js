import LogoImage from "./assets/investment-calculator-logo.png";
import UserForm from './components/form';

function App() {
  return (
    <div className="app">
      <img src={LogoImage} alt="logo"></img>
      <h1>Investment Calculator</h1>
      <UserForm />
    </div>
  );
}

export default App;
