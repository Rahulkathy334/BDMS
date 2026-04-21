import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestBlood = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    hospital: "",
    neededOn: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8000/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Blood request submitted successfully ✅");
        setFormData({
          patientName: "",
          bloodGroup: "",
          hospital: "",
          neededOn: "",
          contact: "",
        });
        navigate("/donors");
      } else {
        setMessage(data.message || "Something went wrong ❌");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setMessage("Server error, please try again ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-red-800 mb-6">
          Request Blood
        </h1>

        {message && (
          <p className="text-center mb-4 text-green-600 font-medium">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="patientName"
            placeholder="Patient Name"
            value={formData.patientName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <input
            type="text"
            name="hospital"
            placeholder="Hospital Name"
            value={formData.hospital}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="date"
            name="neededOn"
            value={formData.neededOn}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-500 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestBlood;
