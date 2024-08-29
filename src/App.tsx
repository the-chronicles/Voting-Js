import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Enroll from "./pages/Enroll";
import Vote from "./pages/Vote";
import Results from "./pages/Results";
import Login from "./pages/Login";
import ViewCandidates from "./pages/ViewCandidates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/candidates" element={<ViewCandidates />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/result" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
