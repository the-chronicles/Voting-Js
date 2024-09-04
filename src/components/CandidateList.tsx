import { useState, useEffect } from 'react';

interface Candidate {
  _id: string;
  name: string;
}

function ViewCandidates() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    async function fetchCandidates() {
      try {
        const response = await fetch('https://evotingts.onrender.com/api/candidates');
        const data = await response.json();
        setCandidates(data);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      }
    }

    fetchCandidates();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Candidates</h1>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate._id} className="mb-4 border p-2">
            {candidate.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewCandidates;
