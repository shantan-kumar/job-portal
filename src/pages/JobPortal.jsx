import { useState } from "react";
import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

export default function JobPortal() {
  const [search, setSearch] = useState("");
  const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Bangalore", experience: 2 },
    { title: "Backend Engineer", company: "Microsoft", location: "Hyderabad", experience: 3 },
    { title: "Data Scientist", company: "Amazon", location: "Chennai", experience: 1 },
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <input
          type="text"
          placeholder="Search jobs by role, company, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-3 border rounded-lg"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job, idx) => (
            <JobCard key={idx} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}