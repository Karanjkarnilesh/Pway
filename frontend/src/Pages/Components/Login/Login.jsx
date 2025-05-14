import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Submitted:', { email, password });
  };

  return (
    <div className="bg-gradient-to-br from-[#BB133E] to-[#002e5b] flex items-center justify-center min-h-screen">
      <div className=" bg-white shadow-xl rounded-md p-10 w-full max-w-md relative">
        {/* Logos */}
        <div className="flex flex-col items-center">
          <img
            src="/images/aaca-net.png"
            alt="AACA Net"
            className="h-12 object-contain"
          />
          <img
            src="/images/pipeway-logo.png"
            alt="Pipeway"
            className="h-10 object-contain"
          />
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-800 transition"
          >
            LOG IN
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center mt-4">
          <a href="forgetpassword" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* LinkedIn Icon */}
        {/* <div className="absolute bottom-4 right-4">
          <a href="#" className="bg-blue-700 p-1 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-11h2.5v11zm-1.25-12.25c-.83 0-1.5-.68-1.5-1.5s.67-1.5 1.5-1.5 1.5.68 1.5 1.5-.67 1.5-1.5 1.5zm13 12.25h-2.5v-5.5c0-1.38-.03-3.17-1.93-3.17-1.94 0-2.24 1.51-2.24 3.07v5.6h-2.5v-11h2.4v1.5h.03c.34-.65 1.18-1.34 2.43-1.34 2.6 0 3.08 1.71 3.08 3.94v6.9z" />
            </svg>
          </a>
        </div> */}
      </div>
    </div>
  );
}


export default Login;
