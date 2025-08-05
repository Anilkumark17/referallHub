import React, { useState } from 'react';

const features = [
  {
    title: "Post & Track Referrals",
    desc: "Employees can post job roles and manage incoming profiles easily.",
  },
  {
    title: "Auto-Reject & Feedback",
    desc: "No more ghosting. Job seekers receive updates automatically.",
  },
  {
    title: "Smart Match Scoring",
    desc: "Job seekers know their fit before applying.",
  },
  {
    title: "Gamified Trust Score",
    desc: "Build your reputation as a seeker or referrer with performance metrics.",
  },
];

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 text-indigo-600 font-bold text-xl">
              ReferralHub
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="/signup?role=seeker"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition"
              >
                Join as Job Seeker
              </a>
              <a
                href="/signup?role=referrer"
                className="text-indigo-600 font-medium hover:text-indigo-800 transition"
              >
                Join as Referral Provider
              </a>
            </div>
            {/* Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-indigo-700 focus:outline-none"
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
              href="/signup?role=seeker"
              className="block py-2 text-indigo-700 font-medium hover:text-indigo-900"
            >
              Join as Job Seeker
            </a>
            <a
              href="/signup?role=referrer"
              className="block py-2 text-indigo-700 font-medium hover:text-indigo-900"
            >
              Join as Referral Provider
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="w-full px-6 py-32 bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
          Welcome to ReferralHub
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in delay-100">
          The smartest way to give and get job referrals — with transparency and trust.
        </p>
        <a
          href="#features"
          className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Explore Features
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why ReferralHub?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-xl shadow-md transform transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-20 bg-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to simplify job referrals?</h2>
        <p className="mb-8 text-lg">
          Join ReferralHub and experience transparency like never before.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <a
            href="/signup?role=seeker"
            className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Join as Job Seeker
          </a>
          <a
            href="/signup?role=referrer"
            className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Join as Referral Provider
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © 2025 ReferralHub. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
