import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <h1 className="text-xl font-bold text-blue-500">JobPortal</h1>
      <div>
        <Link
          to="/jobs"
          className="mr-4 text-gray-700 font-medium hover:text-blue-500"
        >
          Jobs
        </Link>
        <Link
          to="/upload-resume"
          className="mr-4 text-gray-700 font-medium hover:text-blue-500"
        >
          Upload Resume
        </Link>
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-blue-500"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}