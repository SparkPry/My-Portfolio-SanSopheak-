export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Learning Platform",
      description:
        "A comprehensive online learning platform where students can enroll in courses and track their progress.",
      features: [
        "Student: Register/login, browse courses, filter by category, course details, dashboard with ongoing courses and progress tracking",
        "Instructor: Create courses and classes, add lessons",
        "Admin: Manage users and courses (UI only)",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"],
      demoLink: "#",
      githubLink: "#",
      image:
        "https://i.pinimg.com/736x/4f/6c/b7/4f6cb77548da3bf4a4e91e2d5d72049d.jpg",
    },
  ];

  return (
    <section className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-surface rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                {/* Project Image */}
                <div className="md:w-1/3 bg-emerald-50 flex items-center justify-center p-8 min-h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-md object-cover w-full h-full"
                  />
                </div>

                {/* Project Details */}
                <div className="p-8 md:w-2/3">
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0f172a] mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-slate-700 flex items-start">
                          <span className="text-emerald-600 mr-3 font-bold">-</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0f172a] mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://academic-hub-delta-jet.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded-lg font-semibold transition-colors btn-primary"
                    >
                      Live Demo
                    </a>

                    <a
                      href="https://github.com/SparkPry/AcademicHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 rounded-lg font-semibold transition-colors btn-ghost"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-12 card-surface rounded-2xl p-8 text-center">
          <p className="text-slate-600 text-lg">
            More projects coming soon as I continue to build and grow!
          </p>
        </div>
      </div>
    </section>
  );
}
