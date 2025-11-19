import React from "react";
import { useNavigate } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Rahul Mehta",
    specialization: "General Physician",
    image:
      "https://cdn-icons-png.flaticon.com/512/387/387561.png",
  },
  {
    id: 2,
    name: "Dr. Neha Sharma",
    specialization: "Cardiologist",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  },
  {
    id: 3,
    name: "Dr. Arjun Patel",
    specialization: "Neurologist",
    image:
      "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
  },
];

function BloodDonationCards() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {doctors.map((doc) => (
        <div
          key={doc.id}
          onClick={() => navigate(`/chat/${doc.id}`)}
          className="cursor-pointer bg-blue-100 border border-blue-300 rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg text-center"
        >
          <img
            src={doc.image}
            alt={doc.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-blue-700 mb-2">{doc.name}</h2>
          <p className="text-blue-800 font-semibold">
            {doc.specialization}
          </p>
          <p className="text-sm text-blue-600 mt-2">
            Click to chat and get all health solutions 💬
          </p>
        </div>
      ))}
    </div>
  );
}

export default BloodDonationCards;
