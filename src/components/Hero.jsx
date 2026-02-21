import Sopheak from "../assets/sopheak-removebg-preview.png";

export default function Hero({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center section">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6 animate-fade-in">
          <span className="section-kicker">Available for frontend roles</span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] animate-fade-in delay-100">
            San Sopheak
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#0f766e] font-semibold animate-fade-in delay-200">
            Frontend Web Developer
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed animate-fade-in delay-300">
            I build clean, responsive, and user-friendly web interfaces that
            feel fast, intentional, and easy to use. Focused on modern React
            apps and sharp UI details.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            aria-label="Navigate to projects section"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-200 btn-primary animate-fade-in delay-400"
          >
            View My Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="relative animate-fade-in delay-500 group">
          <div className="relative card-surface rounded-3xl p-6">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-100 rounded-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-100 rounded-3xl"></div>
            <div className="w-64 md:w-72 h-64 md:h-72 mx-auto rounded-2xl shadow-2xl overflow-hidden border-4 border-white relative">
              <img
                src={Sopheak}
                alt="San Sopheak - Frontend Web Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
