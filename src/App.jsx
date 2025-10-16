import React from "react"
import './App.css'
import { Routes, Route, Link,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Patients from './pages/Patients';
import About from './pages/About';


export default function App() {
return (
<div className="min-h-screen flex flex-col bg-gray-50">
<header className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
<h1 className="text-2xl font-bold">Jarurat Care</h1>
<nav className="space-x-4">
<Link to="/home" className="hover:underline">Home</Link>
<Link to="/patients" className="hover:underline">Patients</Link>
<Link to="/about" className="hover:underline">About</Link>
</nav>
</header>


<main className="flex-grow p-6">
<Routes>
      {/* Default route redirects to /patients */}
      <Route path="/" element={<Navigate to="/patients" replace />} />

      <Route path="/patients" element={<Patients />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />

      {/* Fallback route for unmatched URLs */}
      <Route path="*" element={<Navigate to="/patients" replace />} />
    </Routes>
</main>


<footer className="bg-gray-800 text-white text-center py-3">
© 2025 Jarurat Care. All rights reserved.
</footer>
</div>
);
}