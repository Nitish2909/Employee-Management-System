import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
      <div className="border-2 rounded-2xl border-pink-900">
        <form onSubmit={handleSubmit} className="flex flex-col p-15 gap-3">
          <label className="text-xl">Eamil:</label>
          <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            placeholder="Enter Your Eamil"
            required
            className="bg-transparent outline-none border-2 border-gray-700 text-lg font-bold py-2 px-10 placeholder:text-gray-600 rounded-2xl"
          />
          <label className="text-xl">Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            placeholder="Enter Your Password"
            required
            className="bg-transparent outline-none border-2 border-gray-700 text-lg font-bold py-2 px-6 placeholder:text-gray-600 rounded-2xl"
          />
          <button
            className="w-full bg-green-400 mt-4 py-3 rounded-2xl font-bold text-xl active:scale-95"
            type="submit"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
