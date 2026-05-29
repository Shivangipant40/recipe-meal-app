import { useEffect, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import API from "../services/api";

export default function Saved() {

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true);



  // GET ALL RECIPES
  const fetchRecipes = async () => {

    try {

      const res = await API.get("/recipes");

      console.log("Fetched Recipes:", res.data);

      setRecipes(res.data);

    } catch (error) {

      console.log("Fetch Error:", error);

    } finally {

      setLoading(false);

    }
  };



  useEffect(() => {

    fetchRecipes();

  }, []);




  return (

    <DashboardLayout>

      <div className="min-h-screen text-white p-6">

        {/* HEADING */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-green-300">
            Saved Recipes
          </h1>

          <p className="text-gray-400 mt-2">
            All created recipes from database
          </p>

        </div>



        {/* LOADING */}
        {loading ? (

          <div className="text-center mt-20 text-lg">
            Loading recipes...
          </div>

        ) : recipes.length === 0 ? (

          <div className="text-center mt-20 text-gray-400">
            No recipes found
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {recipes.map((recipe) => (

              <div
                key={recipe._id}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-lg hover:border-green-400 transition"
              >

                {/* TITLE */}
                <h2 className="text-2xl font-bold text-green-300 mb-2">
                  {recipe.title}
                </h2>


                {/* CATEGORY */}
                <p className="text-sm text-gray-400 mb-2">
                  Category: {recipe.category || "Not Added"}
                </p>


                {/* COOKING TIME */}
                <p className="text-sm text-gray-400 mb-4">
                  Cooking Time: {recipe.cookingTime || "Not Added"}
                </p>


                {/* INGREDIENTS */}
                <div className="mb-4">

                  <h3 className="text-green-200 font-semibold mb-1">
                    Ingredients
                  </h3>

                  <p className="text-gray-300 text-sm line-clamp-4">
                    {recipe.ingredients}
                  </p>

                </div>


                {/* INSTRUCTIONS */}
                <div>

                  <h3 className="text-green-200 font-semibold mb-1">
                    Instructions
                  </h3>

                  <p className="text-gray-300 text-sm line-clamp-5">
                    {recipe.instructions}
                  </p>

                </div>

              </div>
            ))}
          </div>
        )}
      </div>

    </DashboardLayout>
  );
}