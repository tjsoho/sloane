'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import the useRouter hook

const PASSWORD = 'Tugun'; // Set your password here

export default function ProtectedEditor({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the useRouter hook

  const handlePasswordSubmit = () => {
    if (input === PASSWORD) {
      setAuthenticated(true);
      console.log('Password correct, setting authenticated to true...');
      alert('Password correct, redirecting to editor...');
    } else {
      setError('Incorrect password, please try again.');
    }
  };

  useEffect(() => {
    if (authenticated) {
      console.log('Authenticated is true, navigating to /editor...');
      router.push('/editor'); // Redirect to /editor upon successful password entry
    }
  }, [authenticated, router]);

  return authenticated ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-cream">
      <h2 className="mb-4 text-xl font-semibold">Enter Password to Access Editor</h2>
      <input
        type="password"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded-full"
        placeholder="Enter password"
      />
      <button
        onClick={handlePasswordSubmit}
        className="px-4 py-2 bg-brand-green text-brand-cream rounded-full font-Archivo uppercase hover:bg-brand-green-dark"
      >
        Submit
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </div>
  );
}
