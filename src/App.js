import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(`Name: ${process.env.REACT_APP_NAME}`);
  console.log(`First Name: ${process.env.REACT_APP_FIRST_NAME}`);
  console.log(`Last Name: ${process.env.REACT_APP_LAST_NAME}`);
  console.log(`Age: ${process.env.REACT_APP_AGE}`);
  console.log(`State: ${process.env.REACT_APP_STATE}`);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name: {process.env.REACT_APP_NAME}</p>
        <p>First Name: {process.env.REACT_APP_FIRST_NAME}</p>
        <p>Last Name: {process.env.REACT_APP_LAST_NAME}</p>
        <p>Age: {process.env.REACT_APP_AGE}</p>
        <p>State: {process.env.REACT_APP_STATE}</p>
      </header>
    </div>
  );
}

export default App;
