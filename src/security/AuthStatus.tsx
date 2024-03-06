import { useAuth } from "./AuthProvider";
import { NavLink } from "react-router-dom";

export default function AuthStatus() {
  const auth = useAuth();

  //TODO: Replace with code to switch between login and logout
  if (!auth.isLoggedIn()) {
    return (
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    );
  } else {
    return (
      <li>
        <NavLink to="/logout">Logout (Logged in as {auth.username}) </NavLink>
      </li>
    );
  }
}


