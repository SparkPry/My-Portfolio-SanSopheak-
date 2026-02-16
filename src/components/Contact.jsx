import { useState } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_p8rp5ee", // replace with your EmailJS service ID
        "template_sjckw5l", // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "zfYw9mYOaBJ5CxrP0", // replace with your EmailJS public key
      )
      .then(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Oops! Something went wrong. Please try again later.");
      });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Have a project in mind? Let's connect and create something amazing
          together.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Me a Message
            </h3>
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-semibold">
                  Thanks for your message! I'll get back to you soon.
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:sansopheak686@gmail.com"
                  className="flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <Mail className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Email
                    </h4>
                    <p className="text-gray-600">sansopheak686@gmail.com</p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/SparkPry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <Github className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      GitHub
                    </h4>
                    <p className="text-gray-600">https://github.com/SparkPry</p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/san-sopheak-46924b324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <Linkedin className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      LinkedIn
                    </h4>
                    <p className="text-gray-600">linkedin.com/in/sopheak</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+855978901984"
                  className="flex items-start p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <Phone className="w-8 h-8 text-blue-600 mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Phone
                    </h4>
                    <p className="text-gray-600">0978901984</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
