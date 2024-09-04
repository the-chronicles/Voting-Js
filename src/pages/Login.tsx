import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // const response = await fetch('http://localhost:5000/api/login', {
    const response = await fetch('https://evotingts.onrender.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();
    if (data.success) {
      navigate('/enroll');
    } else {
      alert(data.message);
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        className="w-full p-2 mb-4 border" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-2 mb-4 border" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        />
      <button 
        className="bg-blue-500 text-white p-2 w-full"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
        </>
  );
}

export default Login;
