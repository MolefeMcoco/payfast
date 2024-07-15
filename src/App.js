import "./App.css";
import { useState } from "react";
import axios from "axios";
function App() {
  const [formData, setFormData] = useState({
    merchant_id: "10026352",
    merchant_key: "cineal5irguom",
    amount: "",
    item_name: "Product Name",
    email_confirmation: 1,
    confirmation_address: "molefe@mmwebdesign.co.za",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://sandbox.payfast.co.za/eng/process",
        formData
      );
      console.log(response);
      // Optionally, redirect to PayFast payment page
      // window.location.replace(response.data);
    } catch (error) {
      console.error("Error submitting payment:", error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        required
      />
      <input type="submit" value="Pay Now" />
    </form>
  );
}

export default App;
