import React from "react";
import Certificat from "../assets/Certificat.jpg";
const Qualification = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Qualification</h2>
          <p className="mt-2 text-gray-500">
            A snapshot of my education and professional skills
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-50 mb-14 font-medium">
          <h2 className="flex items-center gap-2 text-2xl">Education</h2>
          <h2 className="flex items-center gap-2 text-2xl">Soft Skills</h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-3 gap-8  max-w-4xl mx-auto">
          {/* Left - Education */}
          <div className="space-y-12 ">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Bachelor of Information Technology
              </h3>
              <p className="text-gray-500">Royal University of Phnom Penh</p>
              <p className="text-sm text-gray-400 mt-1">2022 – 2025</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Web Frontend Development
              </h3>
              <p className="text-gray-500">ISTAD</p>
              <p className="text-sm text-gray-400 mt-1">2025</p>
            </div>
          </div>

          {/* Center Line */}
          <div className="relative flex justify-center">
            <span className="absolute w-0.5 h-full bg-indigo-500"></span>

            <div className="space-y-24">
              <span className="block w-3 h-3 bg-indigo-500 rounded-full shadow-md"></span>
              <span className="block w-3 h-3 bg-indigo-500 rounded-full shadow-md"></span>
            </div>
          </div>

          {/* Right - Soft Skills */}
          <div className="space-y-8">
            <p className="text-gray-600 leading-relaxed">
              Strong problem-solving and communication skills with a passion for
              frontend development and continuous learning.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Problem Solving & Critical Thinking</li>
              <li>• Communication & Teamwork</li>
              <li>• Fast Learner & Adaptable</li>
              <li>• Frontend Technology Enthusiast</li>
              <li>• Responsible & Respectful</li>
            </ul>
          </div>
        </div>
        <div className="text-center m-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Certificate</h2>
          <div className="flex justify-center">
            
            <img className="items-center" src={Certificat} alt="Certificate" />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
