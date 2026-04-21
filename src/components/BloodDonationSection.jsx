// BloodDonationSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Droplet, Smile, Activity, ShieldCheck, Users } from "lucide-react";

const bloodTypes = [
  { type: "A+", color: "bg-red-500" },
  { type: "A-", color: "bg-red-400" },
  { type: "B+", color: "bg-rose-500" },
  { type: "B-", color: "bg-rose-400" },
  { type: "O+", color: "bg-pink-500" },
  { type: "O-", color: "bg-pink-400" },
  { type: "AB+", color: "bg-red-600" },
  { type: "AB-", color: "bg-rose-600" },
];

const benefits = [
  { icon: <HeartPulse className="text-red-500 w-6 h-6" />, text: "Helps save up to three lives with one donation." },
  { icon: <Droplet className="text-red-500 w-6 h-6" />, text: "Reduces excess iron in your body, improving health." },
  { icon: <Activity className="text-red-500 w-6 h-6" />, text: "Stimulates the production of new blood cells." },
  { icon: <ShieldCheck className="text-red-500 w-6 h-6" />, text: "Lowers risk of heart and liver diseases." },
  { icon: <Smile className="text-red-500 w-6 h-6" />, text: "Boosts mental well-being and happiness." },
  { icon: <Users className="text-red-500 w-6 h-6" />, text: "Promotes community service and social connection." },
];

const BloodDonationSection = () => {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center text-red-600 mb-12"
        >
          Blood Types & Donation Benefits
        </motion.h2>

        {/* Blood Type Cards */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {bloodTypes.map((blood, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className={`${blood.color} text-white text-3xl font-bold rounded-2xl shadow-lg flex items-center justify-center h-25 w-35 transition-transform`}
            >
              {blood.type}
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-lg p-10"
        >
          <h3 className="text-2xl font-semibold text-center text-red-600 mb-8">
            Benefits of Donating Blood
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {item.icon}
                <p className="text-gray-700 text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BloodDonationSection;
