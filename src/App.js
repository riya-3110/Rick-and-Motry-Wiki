import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Navbar } from "./components/Navbar/Navbar";
import { Episode } from "./pages/Episode";
import { Location } from "./pages/Location";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";
import { CardDetails } from "./components/Card/CardDetails";

function App() {
  let [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;

  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&species=${species}&gender=${gender}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      setFetchData(data);
    })();
  }, [api]);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="body-container">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  results={results}
                  setSearch={setSearch}
                  setPageNumber={setPageNumber}
                  pageNumber={pageNumber}
                  status={status}
                  setStatus={setStatus}
                  setGender={setGender}
                  setSpecies={setSpecies}
                  fetchData={fetchData}
                />
              }
            />
            <Route path="/episodes" element={<Episode results={results} />} />
            <Route path="/location" element={<Location results={results} />} />
            <Route path="/card-details" element={<CardDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
