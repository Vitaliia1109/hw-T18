import { useState } from "react";
import "./App.css";
import Balance from "./components/Balance/Balance.jsx";
import Transactions from "./components/Transactions/Transactions.jsx";
import InterestFees from "./components/InterestFees/InterestFees.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [balance, setBalance] = useState(0);

  return (
    <>
      <h1>My Interest Calculator</h1>
      <Balance balance={balance} />
      <Transactions balance={balance} setBalance={setBalance} />
      <InterestFees balance={balance} setBalance={setBalance} />
      {balance < 0 && (
        <div className="alert alert-danger">Warning: Negative Balance!</div>
      )}
    </>
  );
}

export default App;
