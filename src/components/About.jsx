export default function About() {
  return (
    <section className=" px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a junior Frontend Web Developer with a passion for creating functional and
              user-friendly web interfaces. I focus on clean, well-structured code and modern
              design principles.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              My journey in web development started with learning the fundamentals of HTML, CSS,
              and JavaScript, and I've since expanded my skills to include responsive design,
              React, and API integration.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I believe in continuous learning and staying updated with the latest web development
              trends. I'm committed to delivering quality work and contributing to team success.
            </p>
          </div>

          {/* Stats/Highlights */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-600 text-2xl mb-2">Passion</h3>
              <p className="text-gray-700">
                Building clean and responsive web interfaces that provide excellent user experiences
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-600 text-2xl mb-2">Focus</h3>
              <p className="text-gray-700">
                Writing clean, maintainable code with best practices and proper documentation
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-600 text-2xl mb-2">Goal</h3>
              <p className="text-gray-700">
                Securing an entry-level frontend developer position where I can grow and contribute
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
