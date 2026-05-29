import { Home, PlusCircle, Bookmark, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const menu = [
    { name: "Home", icon: Home, path: "/home" },
    { name: "Add Recipe", icon: PlusCircle, path: "/home" },
    { name: "Saved", icon: Bookmark, path: "/home" },
    { name: "Reviews", icon: Star, path: "/home" },
  ];

  return (
    <div className="w-60 bg-white/5 border-r border-white/10 p-4 hidden md:block">

      <h2 className="text-green-300 font-bold text-xl mb-6">
        Dashboard
      </h2>

      <div className="space-y-3">

        {menu.map((item, i) => {
          const Icon = item.icon;

          return (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-white/10 transition"
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </button>
          );
        })}

      </div>
    </div>
  );
}