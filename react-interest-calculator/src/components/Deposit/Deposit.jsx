import Button from "react-bootstrap/Button";
import "./Deposit.css";

// This component handles the deposit functionality.
// It takes handleDeposit, amount, and setAmount as props.
export default function Deposit({ handleDeposit, amount, setAmount }) {
  // This function is called when the deposit form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    handleDeposit(amount); // Call the handleDeposit function with the current amount.
    setAmount(""); // Reset the amount input field.
  };

  return (
    <div className="deposit">
      <div className="mb-3">
        <label htmlFor="deposit">Deposit Amount: </label>
        {/* Input field for entering the deposit amount */}
        <input
          type="number"
          id="deposit"
          className="form-control"
          onChange={(e) => setAmount(e.target.value)} // Update the amount state on change.
        />
        {/* Button to submit the deposit */}
        <Button variant="success" className="mt-2" onClick={handleSubmit}>
          Deposit
        </Button>
      </div>
    </div>
  );
}
