import FingerprintScanner from '../components/FingerprintScanner';
import Navbar from '../components/NavBar';

function Enroll() {
  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Enroll with Fingerprint</h1>
      <FingerprintScanner />
    </div>
    </>
  );
}

export default Enroll;
