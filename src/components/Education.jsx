import React from "react";
import Certificat from "../assets/Certificat.jpg";

const Qualification = () => {
  return (
    <section className="section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-kicker">Qualification</p>
          <h2 className="section-title">Education and strengths</h2>
          <p className="mt-2 text-slate-600">
            A snapshot of my education and professional skills.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-14 font-medium">
          <h2 className="flex items-center gap-2 text-2xl text-[#0f172a]">
            Education
          </h2>
          <h2 className="flex items-center gap-2 text-2xl text-[#0f172a]">
            Soft Skills
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Left - Education */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Bachelor of Information Technology
              </h3>
              <p className="text-slate-600">Royal University of Phnom Penh</p>
              <p className="text-sm text-slate-400 mt-1">2022 - 2025</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Web Frontend Development
              </h3>
              <p className="text-slate-600">ISTAD</p>
              <p className="text-sm text-slate-400 mt-1">2025</p>
            </div>
          </div>

          {/* Center Line */}
          <div className="relative flex justify-center">
            <span className="absolute w-0.5 h-full bg-emerald-200"></span>

            <div className="space-y-24">
              <span className="block w-3 h-3 bg-emerald-500 rounded-full shadow-md"></span>
              <span className="block w-3 h-3 bg-emerald-500 rounded-full shadow-md"></span>
            </div>
          </div>

          {/* Right - Soft Skills */}
          <div className="space-y-8">
            <p className="text-slate-600 leading-relaxed">
              Strong problem-solving and communication skills with a passion for
              frontend development and continuous learning.
            </p>

            <ul className="space-y-3 text-slate-700">
              <li>- Problem Solving and Critical Thinking</li>
              <li>- Communication and Teamwork</li>
              <li>- Fast Learner and Adaptable</li>
              <li>- Frontend Technology Enthusiast</li>
              <li>- Responsible and Respectful</li>
            </ul>
          </div>
        </div>

        <div className="text-center m-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificate</h2>
          <div className="flex justify-center">
            <img
              className="h-128 object-cover rounded-lg shadow-lg"
              src={Certificat}
              alt="Certificate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
