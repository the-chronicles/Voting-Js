function FingerprintScanner() {
    const handleScan = () => {
      // Placeholder for fingerprint scanning logic
      alert('Scanning fingerprint...');
    };
  
    return (
      <button 
        className="bg-gray-500 text-white p-2 w-full"
        onClick={handleScan}
      >
        Scan Fingerprint
      </button>
    );
  }
  
  export default FingerprintScanner;
  