import "./Balance.css"; // Importing the CSS file for styling the Balance component

// Defining the Balance functional component
// The component takes a prop `balance` which represents the current bank balance
export default function Balance({ balance }) {
  return (
    // The outer div with a class name for styling purposes
    <div className="balance">
      {/* Displaying the current balance in an h2 element */}
      <h2 className="balance">Current Balance: ${balance}</h2>
    </div>
  );
}
