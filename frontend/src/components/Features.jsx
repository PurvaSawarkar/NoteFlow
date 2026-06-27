import { NotebookPen, ShieldCheck, Cloud, Zap } from "lucide-react";

const features = [
  {
    icon: <NotebookPen size={36} />,
    title: "Smart Notes",
    description: "Create, organize and edit notes with a clean interface.",
  },
  {
    icon: <Cloud size={36} />,
    title: "Cloud Ready",
    description: "Deploy easily with Docker, AWS and Kubernetes.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "Secure",
    description: "JWT authentication keeps your notes safe and private.",
  },
  {
    icon: <Zap size={36} />,
    title: "Lightning Fast",
    description: "Built with React and optimized for speed.",
  },
];

function Features() {
  return (
    <section id="features" className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-5">
          Why Choose
          <span className="text-indigo-500"> NoteFlow?</span>
        </h2>

        <p className="text-slate-400 text-center mb-16">
          Everything you need to manage notes like a professional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-indigo-400 mb-6">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;