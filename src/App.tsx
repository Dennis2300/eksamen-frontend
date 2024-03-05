import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
//import Logout from "./security/_Logout";
import Layout from "./Layout";
import Home from "./Home";
import Contact from "./Contact";
import "./App.css";
import RecipesLayout from "./recipes/RecipesLayout";

export default function App() {
  //const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout />}>
          <Route path="test" element={<h1>Test</h1>} />

          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route path="/add" element={<RecipeForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layout>
  );
}
