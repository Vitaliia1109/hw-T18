import Button from "react-bootstrap/Button";
import "./Withdraw.css";

// This component handles the withdraw functionality.
// It takes handleWithdraw, amount, and setAmount as props.
export default function Withdraw({ handleWithdraw, amount, setAmount }) {
  // This function is called when the withdraw form is submitted.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior.
    handleWithdraw(amount); // Call the handleWithdraw function with the current amount.
    setAmount(""); // Reset the amount input field.
  };

  return (
    <div className="withdraw">
      <div className="mb-3">
        <label htmlFor="withdraw">Withdraw Amount: </label>
        {/* Input field for entering the withdraw amount */}
        <input
          type="number"
          id="withdraw"
          className="form-control"
          onChange={(e) => setAmount(e.target.value)} // Update the amount state on change.
        />
        {/* Button to submit the withdraw */}
        <Button variant="secondary" className="mt-2" onClick={handleSubmit}>
          Withdraw
        </Button>
      </div>
    </div>
  );
}
