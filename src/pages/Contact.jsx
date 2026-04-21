import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulate sending message
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-xl rounded-2xl p-8 border border-red-200">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
          Contact Us ❤️
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-red-800 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-red-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-red-800 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-red-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-red-800 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full border border-red-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              ✅ Message Sent Successfully!
            </h3>
            <p className="text-gray-700">
              Thank you for reaching out. We'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-5 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
