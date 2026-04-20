'use client';

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const router = useRouter();
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
  const redirect = searchParams.get('redirect') || '/';

  const handleLogin = () => {
    // Simulate login by setting a cookie
    document.cookie = 'auth-token=demo-token; path=/';
    router.push(redirect);
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-6">
      <h1 className="text-3xl font-bold text-center">Login Page</h1>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <p className="text-gray-600 mb-4">
          This is a demo login page. Click the button below to simulate logging in.
        </p>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Login (Demo)
        </button>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}