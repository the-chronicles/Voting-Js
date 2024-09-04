import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

interface Candidate {
  id: string;
  name: string;
}

function ViewCandidates() {
  //   const [candidates, setCandidates] = useState([]);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    async function fetchCandidates() {
      const response = await fetch("https://evotingts.onrender.com/api/candidates");
      const data: Candidate[] = await response.json();
      setCandidates(data);
    }
    fetchCandidates();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-4 text-2xl">Candidates</h1>
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id} className="mb-4 border p-2">
              {candidate.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ViewCandidates;
