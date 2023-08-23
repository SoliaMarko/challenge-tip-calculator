import { useState } from "react";

function App() {
  return (
    <div className="app">
      <TipCalculator></TipCalculator>
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(null);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (+percentage1 + +percentage2)) / 2 / 100;

  function handleReset() {
    setBill(0);
  }

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}>
        How much was the bill?
      </BillInput>
      <PercentageInput percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </PercentageInput>
      <PercentageInput percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </PercentageInput>
      <br />
      {bill > 0 && (
        <>
          <Result bill={bill} tip={tip} />
          <br />
          <ResetButton handleReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ children, bill, onSetBill }) {
  function handleBill(e) {
    onSetBill(e.target.value);
  }

  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        placeholder="Bill value"
        value={bill}
        onChange={e => handleBill(e)}
      ></input>
    </div>
  );
}

function PercentageInput({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={e => onSelect(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Result({ bill, tip }) {
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
