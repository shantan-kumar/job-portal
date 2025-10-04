import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Briefcase, Rocket, UserPlus, LogIn } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white relative overflow-hidden">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Briefcase size={60} className="text-white opacity-30" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Rocket size={60} className="text-white opacity-30" />
      </motion.div>

      {/* Main Section */}
      <div className="text-center px-4 z-10">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find Your Dream Job Today 💼
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl mb-8 max-w-xl mx-auto text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover opportunities that match your skills and passion.  
          Build your career with our AI-powered job portal designed for success.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button
            onClick={() => navigate("/register")}
            className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            <UserPlus size={20} /> Register
          </button>

          <button
            onClick={() => navigate("/login")}
            className="flex items-center justify-center gap-2 bg-transparent border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
          >
            <LogIn size={20} /> Login
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="absolute bottom-4 text-sm text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        © {new Date().getFullYear()} JobPortal — Empowering Careers 🌟
      </motion.footer>
    </div>
  );
}

export default LandingPage;