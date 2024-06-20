import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AddResult from "../components/AddResult";

interface Result {
  id: number;
  resultType: string;
  date: string;
  result: number;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/results")
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((error) => console.error("Error fetching results:", error));
  }, []);

  return (
    <div>
      <div className="bg-base-200">
        <div className="overflow-x-auto">
          <div className="text-center">
            <h1 className="text-center text-8xl mb-10">Alle Resultater</h1>
            <button>
              <NavLink to="/admin" className="btn btn-primary">
                Tilbage til Admin side
              </NavLink>
            </button>
          </div>
          <table className="table">
            {/* head */}
            <thead className="text-4xl text-center">
              <tr>
                <th></th>
                <th>Resultat ID</th>
                <th>Disciplin</th>
                <th>Resultat</th>
                <th>Dato</th>
              </tr>
            </thead>
            <tbody className="text-3xl text-center">
              {results.map((result) => (
                <tr key={result.id}>
                  <td></td>
                  <td>{result.id}</td>
                  <td>{result.resultType}</td>
                  <td>{result.result}</td>
                  <td>{formatDate(result.date)}</td>
                  <td>
                    <button className="btn btn-primary mx-1">Rediger</button>
                    <button className="btn btn-primary mx-1">Slet</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="my-32">
          <AddResult />
        </div>
      </div>
    </div>
  );
}
