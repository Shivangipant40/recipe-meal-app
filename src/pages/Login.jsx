import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RECIPES = [
  { emoji: "🍝", title: "Truffle Carbonara", meta: "Chef Marco · 25 min", rating: "4.9" },
  { emoji: "🍜", title: "Miso Ramen Bowl", meta: "Yuki T · 40 min", rating: "4.8" },
  { emoji: "🥗", title: "Summer Grain Salad", meta: "Priya S · 15 min", rating: "4.7" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    // after login success
    navigate("/home");

  }, 1500);
};
    

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#07130a] via-[#0f2415] to-[#050d08]">

      {/* LEFT VISUAL PANEL */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center overflow-hidden">

        {/* glowing orbs */}
        <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-lime-400/10 blur-[100px] rounded-full bottom-[-80px] right-[-80px]" />

        <div className="z-10 text-center">

          <h1 className="text-6xl font-bold text-white tracking-tight">
            RecipeNest
          </h1>

          <p className="text-green-300 tracking-[6px] text-xs mt-3">
            COOK • SHARE • DISCOVER
          </p>

          {/* cards */}
          <div className="mt-10 space-y-3 w-[280px] mx-auto">
            {RECIPES.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-[1.02] transition"
              >
                <span className="text-2xl">{r.emoji}</span>
                <div className="flex-1 text-left">
                  <p className="text-white text-sm font-medium">{r.title}</p>
                  <p className="text-green-300 text-xs">{r.meta}</p>
                </div>
                <span className="text-yellow-400 text-xs font-semibold">
                  ★ {r.rating}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT FORM PANEL */}
      <div className="w-full lg:w-[420px] flex items-center justify-center px-6">

        <div className="w-full max-w-sm">

          {/* CARD */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8">

            <h2 className="text-3xl font-bold text-white">
              Welcome back 👋
            </h2>

            <p className="text-gray-300 text-sm mt-1 mb-6">
              Sign in to continue your cooking journey
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400 transition"
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 text-gray-300 hover:text-white"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* FORGOT */}
              <div className="flex justify-end text-xs text-green-300">
                <span className="cursor-pointer hover:text-green-200">
                  Forgot password?
                </span>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-green-400 to-lime-300 hover:scale-[1.02] transition"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>

            </form>

            {/* FOOTER */}
            <p className="text-center text-xs text-gray-300 mt-5">
              New here?{" "}
              <span
                  onClick={() => navigate("/register")}
                  className="text-green-300 cursor-pointer hover:text-green-200">
              Create account
              </span>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}