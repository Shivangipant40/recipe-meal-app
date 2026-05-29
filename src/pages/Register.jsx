import { useState } from "react";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  setLoading(true);

  setTimeout(() => {
    setLoading(false);

    // ✅ AFTER SUCCESSFUL REGISTRATION
    navigate("/home");

  }, 1500);
};
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#07130a] via-[#0f2415] to-[#050d08]">

      {/* LEFT PANEL (same branding style as login) */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden">

        <div className="absolute w-[400px] h-[400px] bg-green-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[300px] h-[300px] bg-lime-400/10 blur-[100px] rounded-full bottom-[-80px] right-[-80px]" />

        <div className="text-center z-10">
          <h1 className="text-6xl font-bold text-white">
            RecipeNest
          </h1>
          <p className="text-green-300 text-xs tracking-[6px] mt-3">
            JOIN • COOK • GROW
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-[450px] flex items-center justify-center px-6">

        <div className="w-full max-w-sm">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

            <h2 className="text-3xl font-bold text-white">
              Create Account
            </h2>

            <p className="text-gray-300 text-sm mt-1 mb-6">
              Join RecipeNest and start cooking
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div className="relative">
                <User className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full pl-10 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full pl-10 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-3 text-gray-300"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-green-300" size={18} />
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 outline-none border border-white/10 focus:border-green-400"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-3 text-gray-300"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-green-400 to-lime-300 hover:scale-[1.02] transition"
              >
                {loading ? "Creating account..." : "Create Account"}
              </button>

            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-xs text-gray-300 mt-5">
              Already have an account?{" "}
              <span className="text-green-300 cursor-pointer hover:text-green-200">
                Sign in
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}