import Button from "react-bootstrap/Button";
import "./Interest.css";

export default function Interest({
  interestRate, // The current interest rate
  setInterestRate, // Function to update the interest rate
  handleAddInterest, // Function to handle adding interest to the balance
}) {
  return (
    <div className="mb-3">
      {/* Label for the interest rate input */}
      <label>Interest Rate (%): </label>
      {/* Input field for entering the interest rate */}
      <input
        type="number"
        className="form-control"
        value={interestRate} // The current value of the interest rate
        onChange={(e) => setInterestRate(parseFloat(e.target.value))} // Update the interest rate state on change
      />
      {/* Button to add interest to the balance */}
      <Button variant="success" className="mt-2" onClick={handleAddInterest}>
        Add Interest
      </Button>
    </div>
  );
}
