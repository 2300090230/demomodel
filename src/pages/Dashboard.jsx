export default function Dashboard() {
  // constant profile
  const user = {
    name: "Laxman",
    email: "laxman@gmail.com",
    location: "Hyderabad",
    skills: ["React", "JavaScript"],
    resumeUploaded: true,
  };

  // constant opportunities
  const opportunities = [
    {
      title: "Frontend Intern",
      company: "TechCorp",
      location: "Hyderabad",
      skills: ["React", "JavaScript"],
    },
   
    {
      title: "Data Analyst Intern",
      company: "DataLabs",
      location: "Hyderabad",
      skills: ["SQL", "Python","React"],
    },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      {/* Profile */}
      <div className="mb-6 space-y-1">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">Location:</span> {user.location}</p>
        <p><span className="font-semibold">Skills:</span> {user.skills.join(", ")}</p>
        <p>
          <span className="font-semibold">Resume:</span>{" "}
          {user.resumeUploaded ? "✅ Uploaded" : "❌ Not Uploaded"}
        </p>
      </div>

      {/* Opportunities */}
      <h3 className="text-lg font-semibold mb-3">Opportunities</h3>
      <div className="grid gap-4">
        {opportunities.map((opp, index) => (
          <div key={index} className="border p-4 rounded shadow-sm">
            <h4 className="font-bold">{opp.title}</h4>
            <p>Company: {opp.company}</p>
            <p>Location: {opp.location}</p>
            <p>Required Skills: {opp.skills.join(", ")}</p>
            <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2">
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
