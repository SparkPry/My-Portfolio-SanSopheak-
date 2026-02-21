export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      description: "Building responsive, accessible, and interactive interfaces.",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "UI/UX",
      description: "Designing clear layouts with consistent typography and spacing.",
      skills: ["Responsive Design", "Flexbox", "CSS Grid", "Figma Basics"],
    },
    {
      title: "Tools",
      description: "Working efficiently with modern tooling and collaboration.",
      skills: ["Git", "GitHub", "VS Code", "Vite"],
    },
  ]

  const learning = ["TypeScript", "REST APIs", "State Management"]

  return (
    <section className="section px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">A focused toolkit</h2>
          <p className="mt-3 text-slate-600">
            A practical mix of frontend, UI, and tooling for modern web
            experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-surface rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                {group.title}
              </h3>
              <p className="text-slate-600 mb-5">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card-surface rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {learning.map((item) => (
              <span
                key={item}
                className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
