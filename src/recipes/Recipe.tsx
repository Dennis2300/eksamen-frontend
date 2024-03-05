import { useParams } from "react-router-dom";
import { getRecipe, Recipe as ApiRecipe } from "../services/apiFacade";
import { useEffect, useState } from "react";

export default function Recipe() {
  //THIS IS TO GET THE ID FROM THE URL PARAMS (i.e. /recipes/1001)
  const { id } = useParams();
  console.log("id", id);

  //THIS IS TO GET THE RECIPE FROM THE API
  //AND SET THE STATE TO THE RECIPE
  const [recipe, setRecipe] = useState<ApiRecipe | null>(null);
  //THIS IS FOR THE SIDE EFFECT TO GET THE RECIPE
  useEffect(() => {
    //WE USE getRecipe TO GET THE RECIPE WITH THE ID
   getRecipe(Number(id))
   //THEN WE SET THE RECIPE/RESPONSE TO THE RECIPE STATE
   .then((res) => setRecipe(res));
  },
  //WE USE id AS A DEPENDENCY 
  [id]);

  return (
    <>
      {recipe ? (
        <>
          <h3> {recipe.name} ({recipe.id})</h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: 200, margin: 10, flexDirection: "column" }}
              src={recipe.thumb}
              alt={recipe.name}
            />
            <p style={{ display: "inline", flexDirection: "column" }}>
              {recipe.ingredients}
            </p>
          </div>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{recipe.instructions}</p>
        </>
      ) : (
        <h2>Sorry. Recipe not found</h2>
      )}
    </>
  );
}
