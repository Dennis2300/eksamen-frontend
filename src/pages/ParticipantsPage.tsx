import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import AddParticipants from "../components/AddParticipants";

//Define types for the Discipline object
interface Discipline {
  id: number;
  disciplineName: string;
}

//Define types for the Participant object
interface Participant {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  club: string;
  disciplines: Discipline[]; //We use the Discipline type here
}

export default function ParticipantsPage() {
  //Define a state variable to store the participants
  const [participants, setParticipants] = useState<Participant[]>([]);

  //Function to fetch participants from the backend
  async function fetchParticipants() {
    fetch("http://localhost:8080/api/participants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch participants");
        }        
        return response.json();
      })
      .then((data) => setParticipants(data))
      .catch((error) => console.error("Error fetching participants:", error));
  }

  //We use the useEffect hook to fetch participants when the component mounts
  useEffect(() => { // This is a side effect
    fetchParticipants();
  }, []); // Fetch participants on component mount

  //Function to refetch participants
  const handleRefetch = () => {
    fetchParticipants(); // Refetch participants
  };

  return (
    <div>
      <div className="bg-base-200">
        <div className="overflow-x-auto">
          <div className="text-center">
            <h1 className="text-center text-8xl mb-10">Alle Deltager</h1>
            <button>
              <NavLink to="/admin" className="btn btn-primary">
                Tilbage til Admin side
              </NavLink>
            </button>
            <button className="btn btn-primary ml-3" onClick={handleRefetch}>
              Opdater Liste
            </button>
          </div>
          <table className="table overflow-auto">
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
                <th>Disciplines</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="text-3xl text-center">
              {/* Loop through the participants from DB*/}
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
                    {/* Loop through the disciplines of the participant */}
                    {participant.disciplines.map((discipline) => (
                      <div key={discipline.id}>{discipline.disciplineName}</div>
                    ))}
                  </td>
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
          <AddParticipants />
        </div>
      </div>
    </div>
  );
}
