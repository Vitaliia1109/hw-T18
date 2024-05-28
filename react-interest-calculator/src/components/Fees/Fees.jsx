import Button from "react-bootstrap/Button";
import "./Fees.css";

// This component handles the fees functionality.
// It takes feeRate, setFeeRate, and handleChargeFee as props.
export default function Fees({ feeRate, setFeeRate, handleChargeFee }) {
  return (
    <div className="mb-3">
      <label>Fee Rate (%): </label>
      {/* Input field for entering the fee rate */}
      <input
        type="number"
        className="form-control"
        value={feeRate} // The current fee rate
        onChange={(e) => setFeeRate(parseFloat(e.target.value))} // Update the fee rate state on change
      />
      {/* Button to charge fees */}
      <Button variant="secondary" className="mt-2" onClick={handleChargeFee}>
        Charge Fees
      </Button>
    </div>
  );
}
