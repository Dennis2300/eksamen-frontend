import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"

interface Discipline {
    id: number;
    disciplineName: string;
}

export default function DisciplinesPage() {
    const [disciplines, setDisciplines] = useState<Discipline[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/disciplines")
            .then((response) => response.json())
            .then((data) => setDisciplines(data))
            .catch((error) => console.error("Error fetching disciplines:", error));
    }
    , []);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="overflow-x-auto">
                    <div className="text-center">
                        <h1 className="text-center text-8xl mb-10">Alle Discipliner</h1>
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
                                <th>Disciplin ID</th>
                                <th>Disciplin</th>
                            </tr>
                        </thead>
                        <tbody className="text-3xl text-center">
                            {disciplines.map((discipline) => (
                                <tr key={discipline.id}>
                                    <td></td>
                                    <td>{discipline.id}</td>
                                    <td>{discipline.disciplineName}</td>
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
    )
}