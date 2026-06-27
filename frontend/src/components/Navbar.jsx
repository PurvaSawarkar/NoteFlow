import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">
        <Link to="/" className="text-3xl font-bold text-indigo-500">
          NoteFlow
        </Link>

        <div className="flex gap-8 text-lg">
          <a href="#features" className="hover:text-indigo-400">Features</a>
          <a href="#about" className="hover:text-indigo-400">About</a>
          <a href="#contact" className="hover:text-indigo-400">Contact</a>
        </div>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg hover:bg-slate-800"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;