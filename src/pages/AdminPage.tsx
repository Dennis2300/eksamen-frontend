import { NavLink } from "react-router-dom";

export default function AdminPage() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Velkommen til Administrator siden</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary mx-3 text-3xl">
                <NavLink to="/participants">Alle Deltager</NavLink>
            </button>
            <button className="btn btn-primary mx-3 text-3xl">
                <NavLink to="/results">Alle Resultater</NavLink>
            </button>
            <button className="btn btn-primary mx-3 text-3xl">
                <NavLink to="/disciplines">Alle Discipliner</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
