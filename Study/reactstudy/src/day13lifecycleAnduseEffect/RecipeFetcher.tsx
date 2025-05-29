import React, { useEffect, useState } from "react";

type Recipe = {
  id: number;
  name: string;
  tags: string[];
};

async function sleep(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchRecipeById(id: number): Promise<Recipe> {
  await sleep(1000);
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await res.json();
  return data;
}

export default function RecipeFetcher() {
  const [recipeId, setRecipeId] = useState(1);
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetchRecipeById(recipeId);
        setRecipe(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [recipeId]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2>No.{recipe?.id} recipe</h2>
      <h2>{recipe?.name}</h2>
      <div>
        {recipe?.tags.map((tag) => (
          <span key={tag} style={{ marginRight: "8px" }}>{tag}</span>
        ))}
      </div>
      <div style={{ marginTop: "10px" }}>
        {recipeId > 1 && (
          <button onClick={() => setRecipeId((prev) => prev - 1)}>Prev</button>
        )}
        <button onClick={() => setRecipeId((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
}