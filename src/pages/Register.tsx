import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    const response = await fetch('https://evotingts.onrender.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, password, age: parseInt(age) }),
    });
    
    const data = await response.json();
    if (data.success) {
      navigate('/login');
    } else {
      alert(data.message);
    }
  };

  return (
    <>
    <NavBar />
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Register</h1>
      <input 
        type="text" 
        placeholder="Name" 
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
      <input 
        type="number" 
        placeholder="Age" 
        className="w-full p-2 mb-4 border" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
      />
      <button 
        className="bg-blue-500 text-white p-2 w-full"
        onClick={handleRegister}
      >
        Register
      </button>
    </div>
    </>
  );
}

export default Register;
