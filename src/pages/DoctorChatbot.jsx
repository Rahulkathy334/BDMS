import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function DoctorChatbot() {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I’m your health assistant. What symptoms do you have today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);

    // Basic dummy AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text:
            "Based on your message, it seems like you may need rest and hydration. Please consult a real doctor if symptoms persist.",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <button
        onClick={() => navigate("/doctors")}
        className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        ⬅ Back
      </button>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 flex flex-col h-[80vh]">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Doctor Chatbot 💬
        </h2>

        <div className="flex-1 overflow-y-auto mb-4 border border-gray-200 rounded-lg p-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`my-2 p-3 rounded-lg w-fit max-w-[80%] ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
            placeholder="Type your health issue..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default DoctorChatbot;
