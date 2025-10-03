import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate(); // initialize navigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with actual API call
    console.log("Register data:", formData);
    alert("Registration successful! Redirecting to login.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      password: "",
      age: "",
      gender: "",
    });

    // Redirect to login page
    navigate("/"); // assumes your login route is "/login"
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            placeholder="Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Email */}
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Password */}
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Age */}
          <select
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Age</option>
            {Array.from({ length: 45 }, (_, i) => i + 21).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>

          {/* Gender */}
          <div className="flex justify-evenly">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                className="mr-2"
                required
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;