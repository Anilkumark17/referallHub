import React, { useState } from "react";

const features = [
  {
    title: "Organized Medical History",
    desc: "Store all your prescriptions, lab reports, and doctor notes in structured projects with multiple cards.",
  },
  {
    title: "Smart Medication Tracker",
    desc: "AI automatically reads your prescriptions and sets up a personalized medication schedule with reminders.",
  },
  {
    title: "Emergency Access",
    desc: "Generate one-time codes or QR to give ER doctors instant, secure, read-only access to your critical health info.",
  },
  {
    title: "Insurance & Health Updates",
    desc: "Get personalized insurance suggestions and health insights based on your medical history.",
  },
];

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 text-green-600 font-bold text-2xl">
              TakeCare
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/signup"
                className="text-green-600 font-medium hover:text-green-800 transition"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="text-gray-700 font-medium hover:text-gray-900 transition"
              >
                Features
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-green-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 bg-white shadow">
            <a
              href="/signup"
              className="block py-2 text-green-700 font-medium hover:text-green-900"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="block py-2 text-gray-700 font-medium hover:text-gray-900"
            >
              Features
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 py-32 bg-gradient-to-br from-green-500 to-teal-600 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          TakeCare – Your Health, Organized
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in delay-100">
          Centralize your medical history, track medications, and share records securely.
        </p>
        <a
          href="#features"
          className="inline-block px-8 py-3 bg-white text-green-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Explore Features
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why TakeCare?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold mb-2 text-green-600">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-green-600 text-white text-center rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-3xl font-bold mb-4">Take Control of Your Health Today</h2>
        <p className="mb-8 text-lg">
          Create your TakeCare account and organize your medical history effortlessly.
        </p>
        <a
          href="/signup"
          className="bg-white text-green-600 font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 TakeCare. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
