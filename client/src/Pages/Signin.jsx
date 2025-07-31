import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate=useNavigate();
  const {email,password}=form;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(res=>{
      console.log(res);
      if(res.data==="Success"){
        navigate('/Home');
      }
      else{
        alert("Invalid Password");
      }
      })

    .catch(err=>console.log(err))
  
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default Signin;
