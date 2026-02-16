import Sopheak from "../assets/sopheak-removebg-preview.png";

export default function Hero({ scrollToSection }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in delay-100">
            San Sopheak
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold animate-fade-in delay-200">
            Frontend Web Developer
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in delay-300">
            I build clean, responsive, and user-friendly web interfaces that
            users love. Passionate about creating functional and beautiful
            digital experiences.
          </p>
          <button
            onClick={() => scrollToSection("projects")}
            aria-label="Navigate to projects section"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-fade-in delay-400"
          >
            View My Projects
          </button>
        </div>

        {/* Image Section */}
        <div className="relative animate-fade-in delay-500 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-15 group-hover:opacity-20 transition duration-500"></div>

            {/* <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-600 rounded-3xl opacity-20"></div>
    <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-600 rounded-3xl opacity-20"></div> */}

            <div className="w-60 md:w-72 h-60 md:h-72 mx-auto rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
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
