import { testimonials } from "../data/data";

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Loved by Developers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((user) => (
            <div
              key={user.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <p className="text-gray-300 mb-6">
                "{user.text}"
              </p>

              <h3 className="font-bold text-xl">
                {user.name}
              </h3>

              <p className="text-purple-400">
                {user.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;