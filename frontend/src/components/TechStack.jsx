import { techStack } from "../data/data";

const TechStack = () => {
  return (
    <section className="py-24 px-6 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-4">
          Built With Modern Technologies
        </h2>

        <p className="text-gray-400 mb-14">
          Designed for speed, scalability and cloud-native deployment.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {techStack.map((tech) => (
            <div
              key={tech}
              className="bg-white/5 border border-white/10 rounded-2xl py-6 hover:bg-purple-600 transition duration-300 cursor-pointer"
            >
              <h3 className="font-semibold">{tech}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechStack;