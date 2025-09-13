import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", location: "", skills: "" });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(form); // fake register
    navigate("/login");
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" placeholder="Name" className="border p-2 w-full"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="border p-2 w-full"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" className="border p-2 w-full"
          value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <input type="text" placeholder="Location" className="border p-2 w-full"
          value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
        <input type="text" placeholder="Skills (comma separated)" className="border p-2 w-full"
          value={form.skills} onChange={(e) => setForm({ ...form, skills: e.target.value })} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}
