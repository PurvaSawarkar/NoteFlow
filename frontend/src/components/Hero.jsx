import { Link } from "react-router-dom";
import DashboardPreview from "./DashboardPreview";
import FloatingBlobs from "./FloatingBlobs";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white py-24">
      <FloatingBlobs />

      <div className="relative max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        <div>

          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium">
            🚀 Cloud Ready • Secure • Fast
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Organize Your
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ideas Beautifully
            </span>
          </h1>

          <p className="mt-8 text-slate-400 text-xl leading-9">
            A modern cloud-ready notes platform built with React,
            Node.js, MongoDB and deployed using Docker,
            Kubernetes and AWS.
          </p>

          <div className="mt-10 flex gap-5">

            <Link
              to="/register"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 transition duration-300 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-indigo-600/30"
            >
              Get Started
            </Link>

            <Link
              to="/login"
              className="border border-slate-700 hover:border-indigo-500 hover:bg-slate-900 transition duration-300 px-8 py-4 rounded-xl"
            >
              Login
            </Link>

          </div>

        </div>

        <div className="relative flex justify-center">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}

export default Hero;