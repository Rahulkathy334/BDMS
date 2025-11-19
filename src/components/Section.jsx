import React from "react";
import { motion } from "framer-motion";

const Section = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600959907703-1222e55d8b76?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay for dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Give Blood, Save Lives ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 mb-8"
        >
          Every drop counts. Your donation can bring someone back to life.
          Become a hero today and make a difference.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-red-600 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition"
        >
          Request Blood
        </motion.button>
      </div>

      {/* Optional animated blood drop */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 right-10"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/9976/9976262.png"
          alt="Blood Drop"
          className="w-16 h-16"
        />
      </motion.div>
    </section>
  );
};

export default Section;
