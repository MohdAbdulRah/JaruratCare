import React from "react";

export default function Home() {
    return (
    <div className="text-center mt-10">
    <h2 className="text-3xl font-semibold mb-4">Welcome to Jarurat Care</h2>
    <p className="text-gray-600 max-w-lg mx-auto">
    Manage patient records efficiently and securely with our easy-to-use dashboard.
    </p>
    <a href="/patients" className="text-purple-600 underline">
        Get Started 
    </a>
    </div>
    );
    }