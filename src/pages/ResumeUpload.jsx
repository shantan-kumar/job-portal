import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a resume before submitting.");
      return;
    }
    console.log("Uploaded File:", file);
    alert("Resume uploaded successfully! Fetching curated jobs...");
    navigate("/jobs");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Upload Your Resume
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full mb-4 border p-2 rounded-lg cursor-pointer"
            onChange={handleFileChange}
          />
          {file && (
            <p className="text-sm text-gray-600 mb-2">
              Selected: <span className="font-semibold">{file.name}</span>
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-purple-500 text-white p-3 rounded-lg font-semibold hover:bg-purple-600"
          >
            Upload & Get Jobs
          </button>
        </form>
      </div>
    </div>
  );
}