import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Register</Link></li>
        <li><Link to="/login" className="text-white">Login</Link></li>
        <li><Link to="/enroll" className="text-white">Enroll</Link></li>
        <li><Link to="/candidates" className="text-white">Candidates</Link></li>
        <li><Link to="/vote" className="text-white">Vote</Link></li>
        <li><Link to="/result" className="text-white">Result</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar