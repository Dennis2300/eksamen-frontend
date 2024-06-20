import { Route, Routes } from "react-router-dom";
//import Recipes from "./recipes/RecipeList";
import Layout from "./Layout";
import Home from "./Home";
import Login from "./security/Login";
import AdminPage from "./pages/AdminPage";
import "./App.css";

export default function App() {
  //const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}
