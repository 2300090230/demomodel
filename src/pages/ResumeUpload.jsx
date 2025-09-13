import { useAuth } from "../context/AuthContext";

export default function ResumeUpload() {
  const { setResumeUploaded } = useAuth();

  const handleUpload = (e) => {
    e.preventDefault();
    setResumeUploaded(true);
    alert("Resume uploaded successfully!");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
      <form onSubmit={handleUpload} className="space-y-3">
        <input type="file" accept=".pdf" className="border p-2 w-full" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Upload</button>
      </form>
    </div>
  );
}
