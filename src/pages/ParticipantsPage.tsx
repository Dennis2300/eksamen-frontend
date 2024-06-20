import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Define the Participant type
interface Participant {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  club: string;
}

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/participants")
      .then((response) => response.json())
      .then((data) => setParticipants(data))
      .catch((error) => console.error("Error fetching participants:", error));
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="overflow-x-auto">
          <div className="text-center">
            <h1 className="text-center text-8xl mb-10">Alle Deltager</h1>
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
                <th>Deltager ID</th>
                <th>Klub</th>
                <th>Fornavn</th>
                <th>Etternavn</th>
                <th>Køn</th>
                <th>Alder</th>
              </tr>
            </thead>
            <tbody className="text-3xl text-center">
              {participants.map((participant) => (
                <tr key={participant.id}>
                  <td></td>
                  <td>{participant.id}</td>
                  <td>{participant.club}</td>
                  <td>{participant.firstName}</td>
                  <td>{participant.lastName}</td>
                  <td>{participant.gender}</td>
                  <td>{participant.age} år</td>
                  <td>
                    <button className="btn btn-primary mx-1">Rediger</button>
                    <button className="btn btn-primary mx-1">Slet</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
