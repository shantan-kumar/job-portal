export default function JobCard({ job }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-xl border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>
      <p className="text-sm text-gray-400">Experience: {job.experience}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Apply Now
      </button>
    </div>
  );
}