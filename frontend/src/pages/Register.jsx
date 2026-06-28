import { useState } from "react";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Register() {
const [showPassword, setShowPassword] = useState(false);

return ( <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 flex items-center justify-center relative overflow-hidden">

```
  <div className="absolute w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20 top-10 left-10"></div>
  <div className="absolute w-96 h-96 bg-pink-500 rounded-full blur-[120px] opacity-20 bottom-10 right-10"></div>

  <div className="relative z-10 w-full max-w-md px-6">

    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

      <h1 className="text-4xl font-bold text-center text-white">
        Create Account 🚀
      </h1>

      <p className="text-center text-gray-300 mt-2 mb-8">
        Join NoteFlow and organize your knowledge.
      </p>

      <form className="space-y-5">

        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-white"
        >
          Create Account
        </button>

        <button
          type="button"
          className="w-full py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
        >
          Sign up with Google
        </button>

        <p className="text-center text-gray-300">
          Already have an account?

          <Link
            to="/login"
            className="text-purple-400 ml-2 hover:text-purple-300"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  </div>

</div>
);
}
