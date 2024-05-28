import Interest from "../Interest/Interest";
import Fees from "../Fees/Fees";
import { useState } from "react";

// This component handles the interest and fees functionality.
// It takes balance and setBalance as props.
export default function InterestFees({ balance, setBalance }) {
  // State to manage the interest rate, initially set to 5%
  const [interestRate, setInterestRate] = useState(5);
  // State to manage the fee rate, initially set to 1%
  const [feeRate, setFeeRate] = useState(1);

  // Function to handle adding interest to the balance
  const handleAddInterest = (e) => {
    setBalance(balance + balance * (interestRate / 100));
  };

  // Function to handle charging fees from the balance
  const handleChargeFee = (e) => {
    setBalance(balance - balance * (feeRate / 100));
  };

  return (
    <div className="interest-fees">
      {/* Component to manage interest-related operations */}
      <Interest
        interestRate={interestRate}
        setInterestRate={setInterestRate}
        handleAddInterest={handleAddInterest}
      />
      {/* Component to manage fee-related operations */}
      <Fees
        feeRate={feeRate}
        setFeeRate={setFeeRate}
        handleChargeFee={handleChargeFee}
      />
    </div>
  );
}
