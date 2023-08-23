import { useState } from "react";

function App() {
  const [bill, setBill] = useState(null);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  function handleBill(e) {
    setBill(e.target.value);
  }

  function handleReset() {
    setBill(0);
  }

  return (
    <div className="app">
      <BillInput bill={bill} handleBill={handleBill}>
        <p>How much was the bill? </p>
      </BillInput>
      <PercentageInput percents={percentage1} onChange={setPercentage1}>
        <p>How did you like the service? </p>
      </PercentageInput>
      <PercentageInput percents={percentage2} onChange={setPercentage2}>
        <p>How did your friend like the service? </p>
      </PercentageInput>
      <br />
      {bill && bill > 0 ? (
        <div>
          <Result bill={bill} percentage={(+percentage1 + +percentage2) / 2} />
          <br />
          <ResetButton handleReset={handleReset} />
        </div>
      ) : null}
    </div>
  );
}

function BillInput({ children, bill, handleBill }) {
  return (
    <div className="input-label">
      {children}
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={e => handleBill(e)}
      ></input>
    </div>
  );
}

function PercentageInput({ children, percents, onChange }) {
  return (
    <div className="input-label">
      {children}
      <select value={percents} onChange={e => onChange(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Result({ bill, percentage }) {
  const tip = (bill * percentage) / 100;

  return (
    <div className="result">
      <p>
        You pay ${+bill + tip} (${+bill} + ${+tip} tip)
      </p>
    </div>
  );
}

function ResetButton({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

export default App;
