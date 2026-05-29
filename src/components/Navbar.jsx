import { Search, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">

      {/* Left */}
      <h1 className="text-green-300 font-bold text-lg">
        RecipeNest
      </h1>

      {/* Center Search (optional global search) */}
      <div className="hidden md:flex items-center bg-white/10 px-3 py-2 rounded-xl w-[300px]">
        <Search size={16} className="text-gray-400" />
        <input
          placeholder="Search recipes..."
          className="bg-transparent ml-2 outline-none w-full text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <User className="text-gray-300" />

        <button
          onClick={() => {
            localStorage.removeItem("token"); // future backend
            navigate("/");
          }}
          className="flex items-center gap-1 text-red-400 hover:text-red-300"
        >
          <LogOut size={16} />
          Logout
        </button>

      </div>

    </div>
  );
}