import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";

interface Result {
  candidateId: string;
  candidateName: string;
  votes: number;
}

function Result() {
  // const [results, setResults] = useState([]);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    async function fetchResults() {
      const response = await fetch("http://localhost:5000/api/results");
      const data: Result[] = await response.json();
      setResults(data);
    }
    fetchResults();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-md p-4">
        <h1 className="mb-4 text-2xl">Results</h1>
        <ul>
          {results.map((result) => (
            <li key={result.candidateId} className="mb-4 border p-2">
              {result.candidateName}: {result.votes} votes
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Result;
