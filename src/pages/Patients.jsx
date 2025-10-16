import { useEffect, useState } from 'react';
import React from 'react';

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [newPatient, setNewPatient] = useState({ name: '', age: '', contact: '', email: '', address: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const mapped = data.map((user, i) => ({
          id: user.id,
          name: user.name,
          age: 20 + (i * 3) % 30,
          contact: user.phone,
          email: user.email,
          address: user.address.city
        }));
        setPatients(mapped);
        setFiltered(mapped);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setFiltered(
      patients.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, patients]);

  const handleAddPatient = (e) => {
    e.preventDefault();
    const id = patients.length + 1;
    const newP = { id, ...newPatient };
    setPatients([newP, ...patients]);
    setFiltered([newP, ...patients]);
    setNewPatient({ name: '', age: '', contact: '', email: '', address: '' });
    setShowForm(false);
  };

  if (loading) return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">Failed to load data.</p>;

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Patient Records</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded w-full sm:w-2/3 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => setShowForm(true)}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add New Patient
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map(p => (
          <div key={p.id} className="bg-white shadow p-4 rounded-lg">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-600">Age: {p.age}</p>
            <p className="text-sm text-gray-600">Contact: {p.contact}</p>
            <button
              className="mt-3 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => setSelected(p)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelected(null)}
            >✕</button>
            <h3 className="text-xl font-semibold mb-2">{selected.name}</h3>
            <p><strong>Age:</strong> {selected.age}</p>
            <p><strong>Email:</strong> {selected.email}</p>
            <p><strong>Contact:</strong> {selected.contact}</p>
            <p><strong>City:</strong> {selected.address}</p>
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <form
            onSubmit={handleAddPatient}
            className="bg-white p-6 rounded-lg w-96 space-y-3 relative"
          >
            <button
              type="button"
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setShowForm(false)}
            >✕</button>
            <h3 className="text-xl font-semibold mb-2 text-center">Add New Patient</h3>
            <input
              type="text"
              placeholder="Full Name"
              value={newPatient.name}
              onChange={e => setNewPatient({ ...newPatient, name: e.target.value })}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="number"
              placeholder="Age"
              value={newPatient.age}
              onChange={e => setNewPatient({ ...newPatient, age: e.target.value })}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={newPatient.contact}
              onChange={e => setNewPatient({ ...newPatient, contact: e.target.value })}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={newPatient.email}
              onChange={e => setNewPatient({ ...newPatient, email: e.target.value })}
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="City/Address"
              value={newPatient.address}
              onChange={e => setNewPatient({ ...newPatient, address: e.target.value })}
              required
              className="w-full border p-2 rounded"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Add Patient
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
