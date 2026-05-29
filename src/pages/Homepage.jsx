import { useState } from "react";
import API from "../services/api";
import Dashboardlayout from "../layouts/Dashboardlayout";

export default function Homepage() {

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    cookingTime: "",
    ingredients: "",
    instructions: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("FORM DATA:", formData);

    // validation
    if (
      !formData.title.trim() ||
      !formData.ingredients.trim() ||
      !formData.instructions.trim()
    ) {

      console.log("Validation Failed");

      alert("Please fill all required fields");

      return;
    }

    try {

      setLoading(true);

      console.log("Sending Data To Backend...");

      const res = await API.post(
        "/recipes/create",
        formData
      );

      console.log("BACKEND RESPONSE:", res.data);

      alert("Recipe Created Successfully");

      // clear form
      setFormData({
        title: "",
        category: "",
        cookingTime: "",
        ingredients: "",
        instructions: "",
        image: "",
      });

    } catch (error) {

      console.log("FULL ERROR:", error);

      console.log("ERROR RESPONSE:", error.response);

      console.log("ERROR DATA:", error.response?.data);

      console.log("ERROR MESSAGE:", error.message);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (

    <Dashboardlayout>

      <div className="min-h-screen text-white p-6">

        {/* Heading */}
        <div className="mb-8">

          <h1 className="text-4xl font-bold text-green-300">
            Recipe Dashboard
          </h1>

          <p className="text-gray-400 mt-2">
            Create and manage your recipes
          </p>

        </div>



        {/* FORM CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl max-w-3xl">

          <h2 className="text-2xl font-semibold mb-6">
            Create Recipe
          </h2>


          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* TITLE */}
            <div>

              <label className="block mb-2 text-sm text-green-300">
                Recipe Title *
              </label>

              <input
                required
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter recipe title"
                className="w-full p-3 rounded-xl bg-[#161616] border border-white/10 outline-none focus:border-green-400"
              />

            </div>



            {/* CATEGORY */}
            <div>

              <label className="block mb-2 text-sm text-green-300">
                Category
              </label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Veg / Dessert / Non-Veg"
                className="w-full p-3 rounded-xl bg-[#161616] border border-white/10 outline-none focus:border-green-400"
              />

            </div>



            {/* COOKING TIME */}
            <div>

              <label className="block mb-2 text-sm text-green-300">
                Cooking Time
              </label>

              <input
                type="text"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleChange}
                placeholder="30 mins"
                className="w-full p-3 rounded-xl bg-[#161616] border border-white/10 outline-none focus:border-green-400"
              />

            </div>



            {/* INGREDIENTS */}
            <div>

              <label className="block mb-2 text-sm text-green-300">
                Ingredients *
              </label>

              <textarea
                required
                rows="4"
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                placeholder="Enter ingredients"
                className="w-full p-3 rounded-xl bg-[#161616] border border-white/10 outline-none focus:border-green-400 resize-none"
              />

            </div>



            {/* INSTRUCTIONS */}
            <div>

              <label className="block mb-2 text-sm text-green-300">
                Instructions *
              </label>

              <textarea
                required
                rows="5"
                name="instructions"
                value={formData.instructions}
                onChange={handleChange}
                placeholder="Enter cooking instructions"
                className="w-full p-3 rounded-xl bg-[#161616] border border-white/10 outline-none focus:border-green-400 resize-none"
              />

            </div>



            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-black bg-gradient-to-r from-green-400 to-lime-300 hover:scale-[1.01] transition"
            >
              {loading ? "Creating Recipe..." : "Create Recipe"}
            </button>

          </form>

        </div>

      </div>

    </Dashboardlayout>
  );
}