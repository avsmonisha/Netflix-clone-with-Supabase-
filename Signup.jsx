import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../helper/supabaseClient";
 // Correct import

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    // Sign in with Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("Login successful");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="relative min-h-screen w-full">
        <div className="absolute inset-0 bg-[url('/n.jpg')] bg-cover"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative z-10">
          {/* logo */}
          <div className="w-full px-6 py-4">
            <img src="/n1.png" alt="Netflix Logo" className="h-20" />
          </div>

          {/* Login form container */}
          <div className="max-w-md w-full bg-black/80 mx-auto mt-6 p-8 rounded-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2 className="text-white text-3xl font-bold">Sign up</h2>

              {/* Email */}
              <div className="relative">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  id="email"
                  placeholder="Email "
                  required
                  className="peer h-14 w-full bg-white/5 border border-gray-400 text-white px-4 pt-1 pb-2 rounded-sm focus:outline-none focus:border-gray-300"
                />
               
              </div>

              {/* Password*/}
              <div className="relative">
  <input
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    type="password"
    id="password"
    name="password"
    placeholder="Password"  
    required
    className="peer h-14 w-full bg-white/5 border border-gray-400 text-white px-4 pt-1 pb-2 rounded-sm  focus:outline-none focus:border-gray-300"
  />
 
</div>


              {/* Show message if any */}
              {message && (
                <p className="text-sm text-red-500 font-medium">{message}</p>
              )}

              {/* Sign In Button */}
              <button
              to="/Home"
                type="submit"
                className="bg-red-600 text-white h-10 w-full rounded-sm hover:bg-red-700 transition duration-300 text-center "
              >
                Sign up
              </button>
             
            
              {/* Remember me */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-white text-sm">Remember me</span>
              </div>

              

              {/* reCAPTCHA */}
              <p className="text-xs text-gray-300 leading-snug">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
                <a href="#" className="text-blue-500 underline">
                  Learn more
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
