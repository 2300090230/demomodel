import { useAuth } from "../context/AuthContext";

export default function ResumeUpload() {
  const { setResumeUploaded } = useAuth();

  const handleUpload = (e) => {
    e.preventDefault();
    setResumeUploaded(true);
    alert("Resume uploaded successfully!");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white shadow-xl rounded-xl p-8 border-t-4 border-gov-orange">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gov-blue mb-2">Upload Resume</h2>
          <p className="text-gov-gray-500">Upload your resume to complete your profile</p>
        </div>
        
        <form onSubmit={handleUpload} className="space-y-6">
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gov-gray-700 mb-2">
              Resume File
            </label>
            <input 
              id="resume"
              type="file" 
              accept=".pdf,.doc,.docx" 
              className="w-full px-4 py-3 border border-gov-gray-300 rounded-lg focus:ring-2 focus:ring-gov-orange focus:border-gov-orange transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-gov-orange file:text-white hover:file:bg-gov-orange-dark"
              required
            />
            <p className="mt-2 text-sm text-gov-gray-500">
              Supported formats: PDF, DOC, DOCX (Max 5MB)
            </p>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gov-green hover:bg-gov-green-dark text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gov-green focus:ring-offset-2"
          >
            Upload Resume
          </button>
        </form>
      </div>
    </div>
  );
}
