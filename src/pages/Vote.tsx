import { useState, useEffect } from "react";
import FingerprintScanner from "../components/FingerprintScanner";
import Navbar from "../components/NavBar";

interface Candidate {
  _id: string;
  name: string;
}

function Vote() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(
    null,
  );



  useEffect(() => {
    async function fetchCandidates() {
      try {
        const response = await fetch('http://localhost:5000/api/candidates');
        const data: Candidate[] = await response.json();
        console.log('Fetched candidates:', data);
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    }
  
    fetchCandidates();
  }, []);
  

  const handleVote = async () => {
    if (!selectedCandidate) {
      alert("Please select a candidate.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust token retrieval as needed
        },
        body: JSON.stringify({ candidateId: selectedCandidate }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Vote recorded successfully!");
      } else {
        alert(result.message || "An error occurred while recording your vote.");
      }
    } catch (error) {
      console.error("Error casting vote:", error);
    }
  };

  return (
    <>
    <Navbar />
    <div className="mx-auto max-w-md p-4">
      <h1 className="mb-4 text-2xl">Vote for a Candidate</h1>
      <div className="mb-4">
        {candidates.map((candidate) => (
          <div key={candidate._id} className="mb-2">
            <input
              type="radio"
              id={candidate._id}
              name="candidate"
              value={candidate._id}
              onChange={() => setSelectedCandidate(candidate._id)}
            />
            <label htmlFor={candidate._id} className="ml-2">
              {candidate.name}
            </label>
          </div>
        ))}
      </div>
      <button className="bg-blue-500 p-2 text-white" onClick={handleVote}>
        Vote
      </button>
      <FingerprintScanner />
    </div>
    </>
  );
}

export default Vote;
