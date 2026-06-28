import { faqs } from "../data/data";

const FAQ = () => {
  return (
    <section className="py-24 bg-[#111827] text-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-2">
                {faq.question}
              </h3>

              <p className="text-gray-400">
                {faq.answer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;