import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
?        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
