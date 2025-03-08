import { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("pkr");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedCurrency, setConvertedCurrency] = useState(null);

  return (
    <div>
      <h1>Currency Converter</h1>
      <label>Amount</label>
      <input
        value={amount}
        type="number"
        onChange={(e) => setAmount(e.target.value)}
      ></input>
      <label>From:</label>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option>inr</option>
        <option>pkr</option>
        <option>usd</option>
        <option>krona</option>
      </select>

      <label>To:</label>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option>inr</option>
        <option>pkr</option>
        <option>usd</option>
        <option>krona</option>
      </select>
      <button>calculate</button>
      <h1>
        {amount}
        {"" + fromCurrency}={convertedCurrency}
        {"" + toCurrency}
      </h1>
    </div>
  );
};

export default CurrencyConverter;
