'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PASSWORD = 'Tugun'; // Set your password here
const EXPIRATION_TIME = 5 * 60 * 1000; // 5 minutes in milliseconds

export default function ProtectedEditor({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  // Check local storage for previous authentication
  useEffect(() => {
    const lastLoginTime = localStorage.getItem('lastLoginTime');
    if (lastLoginTime) {
      const elapsedTime = Date.now() - parseInt(lastLoginTime, 10);
      if (elapsedTime < EXPIRATION_TIME) {
        setAuthenticated(true); // If login was within the last 5 minutes, authenticate automatically
      }
    }
  }, []);

  const handlePasswordSubmit = () => {
    if (input === PASSWORD) {
      localStorage.setItem('lastLoginTime', Date.now().toString()); // Store current login time in local storage
      setAuthenticated(true);
      console.log('Password correct, setting authenticated to true...');
      alert('Password correct, redirecting to editor...');
    } else {
      setError('Incorrect password, please try again.');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handlePasswordSubmit();
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
        onKeyDown={handleKeyDown} // Add keydown event for Enter key
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
