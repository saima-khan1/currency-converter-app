import { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([""]);
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState(null);
  async function handleCurrencyConversion() {
    const response = await fetch(`https://api.frankfurter.dev/v1/currencies`);
    const data = await response.json();

    setCurrencies(Object.keys(data));
    const responseData = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    );

    const queryData = await responseData.json();
    setConvertedCurrency(queryData.rates[toCurrency]);
  }
  useEffect(() => {
    handleCurrencyConversion();
  }, []);
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
        {currencies.map((curVal) => (
          <option key={curVal} value={curVal}>
            {curVal}
          </option>
        ))}
      </select>

      <label>To:</label>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((curVal) => (
          <option key={curVal} value={curVal}>
            {curVal}
          </option>
        ))}
      </select>
      <button onClick={handleCurrencyConversion}>calculate</button>
      <h1>
        {amount}
        {"" + fromCurrency}={convertedCurrency}
        {"" + toCurrency}
      </h1>
    </div>
  );
};

export default CurrencyConverter;
