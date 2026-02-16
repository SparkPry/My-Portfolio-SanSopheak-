import { useState } from "react";
import { Laptop, Palette } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Developer",
    subtitle: "More than 6 projects",
    icon: Laptop, // Lucide icon component
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 60 },
      { name: "JavaScript", level: 40 },
      { name: "React", level: 40 },
    ],
  },
  {
    category: "Designer",
    subtitle: "More than 7 projects",
    icon: Palette, // Lucide icon component
    skills: [
      { name: "Figma", level: 45 },
    ],
  },
];

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="flex items-center py-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Skills
          </h2>
          <p className="text-slate-500 text-lg">My technical level</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillsData.map((section, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl  transition-all duration-300 ${
                  isOpen ? "ring-2 ring-blue-400 shadow-xl" : ""
                }`}
              >
                {/* Accordion Header */}
                <button
                  aria-expanded={isOpen}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center gap-4 p-6 text-left rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-2xl shadow-md">
                    {/* Render Lucide icon */}
                    <section.icon size={28} className="text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">
                      {section.category}
                    </h3>
                    <p className="text-sm text-slate-500">
                      {section.subtitle}
                    </p>
                  </div>

                  <svg
                    className={`w-6 h-6 text-blue-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 space-y-5">
                    {section.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-slate-700">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-blue-600">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isOpen ? `${skill.level}%` : "0%",
                              boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}