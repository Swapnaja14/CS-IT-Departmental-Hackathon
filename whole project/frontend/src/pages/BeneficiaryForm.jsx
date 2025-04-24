import React, { useState } from "react";

const BeneficiaryForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [amountRequested, setAmountRequested] = useState("");
  const [reason, setReason] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [hospitalNumber, setHospitalNumber] = useState("");
  const [hospitalBill, setHospitalBill] = useState(null);
  const [aadharCard, setAadharCard] = useState(null);
  const [status, setStatus] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !fullName ||
      !email ||
      !amountRequested ||
      !reason ||
      !phoneNumber ||
      !address ||
      !hospitalName ||
      !hospitalNumber ||
      !hospitalBill ||
      !aadharCard
    ) {
      setStatus("Please fill all fields and upload the required documents.");
      return;
    }

    try {
      // Example logic for sending beneficiary data to backend (Placeholder)
      // Here you would typically send the form data to your server or smart contract
      // For now, we're just logging the data and assuming successful submission.
      console.log("Beneficiary Form Submitted:", {
        fullName,
        email,
        amountRequested,
        reason,
        phoneNumber,
        address,
        hospitalName,
        hospitalNumber,
        hospitalBill,
        aadharCard,
      });

      setStatus("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center border-t-4 border-green-400">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Beneficiary Form</h1>
        <p className="text-gray-600 mb-6">Please provide the details to request funds from the donation pool.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            placeholder="Amount Requested (in INR)"
            value={amountRequested}
            onChange={(e) => setAmountRequested(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Reason for Request"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="4"
          ></textarea>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            rows="3"
          ></textarea>

          {/* Hospital Info */}
          <input
            type="text"
            placeholder="Hospital Name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            placeholder="Hospital Contact Number"
            value={hospitalNumber}
            onChange={(e) => setHospitalNumber(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* File Uploads */}
          <div className="space-y-2">
            <label htmlFor="hospitalBill" className="block text-left text-sm font-medium text-gray-600">
              Upload Hospital Bill
            </label>
            <input
              type="file"
              id="hospitalBill"
              accept="image/*,application/pdf"
              onChange={(e) => setHospitalBill(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="aadharCard" className="block text-left text-sm font-medium text-gray-600">
              Upload Aadhar Card (for identity verification)
            </label>
            <input
              type="file"
              id="aadharCard"
              accept="image/*,application/pdf"
              onChange={(e) => setAadharCard(e.target.files[0])}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition duration-200 w-full"
          >
            Submit Request
          </button>
        </form>

        {status && (
          <div className="mt-4 text-lg font-semibold text-gray-700">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default BeneficiaryForm;
