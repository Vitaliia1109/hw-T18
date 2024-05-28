import Deposit from "../Deposit/Deposit";
import Withdraw from "../Withdraw/Withdraw";
import { useState } from "react";

// The Transactions component handles deposit and withdrawal operations.
// It takes balance and setBalance as props to manage the bank balance.
export default function Transactions({ balance, setBalance }) {
  // State to keep track of the current transaction amount.
  const [amount, setAmount] = useState("");

  // Function to handle deposit operations.
  // It updates the balance by adding the deposit amount.
  const handleDeposit = (amount) => {
    setBalance(balance + parseFloat(amount));
  };

  // Function to handle withdrawal operations.
  // It updates the balance by subtracting the withdrawal amount.
  const handleWithdraw = (amount) => {
    setBalance(balance - parseFloat(amount));
  };

  return (
    <div className="transactions">
      {/* Deposit component for handling deposits */}
      <Deposit
        handleDeposit={handleDeposit}
        amount={amount}
        setAmount={setAmount}
      />
      {/* Withdraw component for handling withdrawals */}
      <Withdraw
        handleWithdraw={handleWithdraw}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
}
