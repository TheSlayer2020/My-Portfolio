import { useState, useEffect } from "react";
import jsPDF from "jspdf";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Hello! This is my CV content.", 10, 10);
    doc.save("MyCV.pdf");
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-500">

      {/* Background Glow */}
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] bg-red-500 opacity-20 blur-[150px] rounded-full"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="mx-auto max-w-6xl flex justify-between items-center
        px-6 py-4 mt-4 rounded-2xl
        bg-white/10 dark:bg-black/30
        backdrop-blur-xl border border-white/10 shadow-lg">

          <div className="flex items-center gap-4">

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full bg-white/10 hover:bg-red-500 hover:text-white transition"
            >
              {dark ? "🌙" : "🌞"}
            </button>

            <div className="flex items-center gap-3">
              {/* <div className="w-9 h-9 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div> */}
              <h1 className="font-semibold text-lg tracking-wide">Crausus Joshua</h1>
            </div>

          </div>

          <div className="hidden md:flex gap-10 text-sm font-medium">

            {["home", "about", "skills", "services"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative capitalize hover:text-red-500 transition
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-red-500
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                {item}
              </a>
            ))}

          </div>

          <button
            onClick={scrollToContact}
            className="px-5 py-2 rounded-xl text-white
            bg-gradient-to-r from-red-500 to-pink-500
            hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
            transition-all duration-300"
          >
            Contact
          </button>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex flex-col justify-center items-center text-center min-h-screen px-6 pt-24 overflow-hidden"
      >
        {/* Background Gradient Circles */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-500 opacity-20 blur-[150px] rounded-full animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[150px] rounded-full animate-float-slow"></div>

        {/* Subtitle */}
        <p className="text-red-500 tracking-widest mb-4 text-sm md:text-base font-semibold uppercase">
          Visual Storytelling & Graphic Design
        </p>

        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl relative z-10">
          <span className="text-red-500">Graphic Designer</span>
          <br />
          & Visual Editor
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-400 text-base md:text-lg z-10">
          I create professional posters, banners, advertisements, and engaging visual content for brands, businesses, and creators. Video editing is also available upon request.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8 z-10">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-transform duration-300"
          >
            Hire Me
          </button>

          <a
            href="#Project"
            className="px-8 py-3 rounded-xl border-2 border-gray-400 text-gray-700 font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300"
          >
            View Work
          </a>
        </div>

        {/* Optional Floating Design Elements */}
        <div className="absolute top-10 right-10 w-12 h-12 bg-red-500 opacity-20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-pink-500 opacity-20 rounded-full animate-spin-slow"></div>

        {/* Animations */}
        <style>{`
    @keyframes float-slow {
      0% { transform: translateY(0px); }
      50% { transform: translateY(20px); }
      100% { transform: translateY(0px); }
    }
    .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }

    @keyframes spin-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
  `}</style>
      </section>

      {/* ABOUT ME */}

      <section
        id="about"
        className="relative min-h-screen flex items-center px-6 py-24 overflow-hidden"
      >
        {/* Paper Plane */}
        <div className="paper-plane">
          <svg
            className="w-8 h-8 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10l9-4 7 7-9 4-7-7z"
            />
          </svg>
        </div>

        {/* About Me Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
          {/* Left: Text */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-red-500">
              About Me
            </h2>

            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
  About Me
</h2>

<p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-4">
  I'm a passionate Graphic Designer and Visual Editor specializing in creating posters, banners, flyers, advertisements, and other engaging visual content for brands, businesses, and creators. My focus is on delivering designs that capture attention and communicate messages effectively.
</p>

<p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
  While I primarily focus on graphic design, I also offer video editing for social media content and promotional materials. My goal is to help brands stand out with creative, modern, and professional visuals.
</p>

            <a
              href="https://drive.google.com/uc?export=download&id=1MnJ6yRLZ5JS9DX2k4sAp3FVISqrpxcW5"
              download="Crausus_CV.pdf"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition"
            >
              Download CV
            </a>
          </div>

          {/* Right: Picture */}
          {/* Right Side: Picture */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative group">
              {/* Floating Image */}
              <img
                src="/src/assets/ME.png"
                alt="My Portrait"
                className="rounded-2xl shadow-xl w-80 md:w-96 transform transition duration-500 group-hover:scale-105 group-hover:rotate-1 animate-float"
              />

              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl opacity-20 blur-xl animate-glow group-hover:opacity-40 transition duration-500"></div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
    .paper-plane {
      position: absolute;
      top: 10%;
      left: -50px;
      width: 32px;
      height: 32px;
      animation: fly 10s linear infinite;
      z-index: 5;
    }

    @keyframes fly {
      0% { transform: translate(0, 0) rotate(0deg); }
      25% { transform: translate(50vw, 10vh) rotate(20deg); }
      50% { transform: translate(70vw, 40vh) rotate(-10deg); }
      75% { transform: translate(30vw, 60vh) rotate(15deg); }
      100% { transform: translate(0, 0) rotate(0deg); }
    }
  `}</style>
      </section>

      {/* MY WORK */}
      <section
        id="Project"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <h2 className="text-3xl font-bold text-red-500 text-center mb-12">
          My Work
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-auto">
          {[
            { src: "/images/Poster 1.jpg", title: "Banner Poster" },
            { src: "/images/Poster 2.png", title: "Flyer Design" },
            { src: "/images/Poster 3.jpg", title: "Tarp Layout" },
            { src: "/images/Poster 4.png", title: "Social Media Graphic" },
            { src: "/images/Poster 5.png", title: "Event Poster" },
            { src: "/images/Poster 6.png", title: "Advertisement Banner" },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-contain"
              />
              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="https://dribbble.com/occ-crausus-joshua"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-transform duration-300 text-center"
    >
      Dribbble
    </a>
    <a
      href="https://mediamarketin.my.canva.site/business-logo"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-transform duration-300 text-center"
    >
      Canva
    </a>
    <a
      href="https://www.behance.net/gallery/244219441/Professional-Brand-Identity-Logo-Design"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-500/40 transition-transform duration-300 text-center"
    >
      Behance
    </a>
  </div>
      </section>


      {/* VIDEO CLIPS */}
{/* VIDEO CLIPS */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <h2 className="text-3xl font-bold text-red-500 text-center mb-16">
    Video Edits
  </h2>

  <div className="flex flex-col items-center gap-8">

    {/* SVG Animation */}
    <div className="w-48 h-48 animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-full h-full text-red-500"
      >
        <rect x="2" y="12" width="60" height="40" rx="4" ry="4" stroke="currentColor" strokeWidth="2" />
        <polygon points="26,20 46,32 26,44" fill="currentColor" />
        <line x1="10" y1="10" x2="10" y2="54" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
        <line x1="54" y1="10" x2="54" y2="54" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
      </svg>
    </div>

    {/* Simple text description */}
    <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl">
      Professional video editing services including **cutting, merging, trimming, transitions, and basic color correction**. Perfect for short clips or highlight reels to complement your visual content.
    </p>

  </div>
</section>

      {/* SKILLS */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-red-500 text-center mb-16">
          Tools & Skills
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Video Editing", desc: "Premiere Pro, CapCut Pro , Canva Pro", img: "/images/tool 1.png" },
            { title: "Graphics Design", desc: "Photoshop , Canva Pro", img: "/images/tool 2.png" }
          ].map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-red-500 hover:scale-105 transform transition-all duration-300 flex flex-col items-center text-center shadow-lg"
            >
              {/* Skill Icon */}
              <img
                src={skill.img}
                alt={skill.title}
                className="w-20 h-20 mb-4 object-contain"
              />

              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>

              <p className="text-gray-600 dark:text-gray-400">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-3xl font-bold text-red-500 text-center mb-16">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "Video Editing",
            "Graphic Design",
            "Social Media Content",
            "YouTube Editing",
            "Brand Visual Design",
            "Short-Form Content"
          ].map((service) => (

            <div
              key={service}
              className="p-8 rounded-2xl bg-white/5 border border-white/10
        hover:border-red-500 hover:bg-white/10
        hover:scale-105 hover:shadow-lg hover:shadow-red-500/30
        transition-all duration-300 text-center"
            >
              <h3 className="text-xl font-semibold">
                {service}
              </h3>
            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative max-w-4xl mx-auto px-6 py-32 text-center"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-red-500 opacity-10 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-pink-500 opacity-10 blur-[80px] rounded-full -z-10"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">
          Get in Touch
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Let's work together on your next project.
        </p>

        {/* Email Button */}
        <a
          href="mailto:occ.crausus.joshua@gmail.com"
          className="inline-block px-8 py-3 rounded-xl
      bg-gradient-to-r from-red-500 to-pink-500
      text-white font-semibold
      hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
      transition-all duration-300 mb-8"
        >
          occ.crausus.joshua@gmail.com
        </a>

        {/* Quick Links */}
        <div className="flex justify-center gap-6 flex-wrap">
          {["Home", "About", "Skills", "Services", "Project"].map((nav) => (
            <a
              key={nav}
              href={`#${nav.toLowerCase()}`}
              className="px-4 py-2 rounded-lg
          bg-white/10 dark:bg-black/30
          border border-white/20 dark:border-black/30
          text-sm font-medium
          hover:bg-red-500 hover:text-white
          hover:scale-105 transition-all duration-300"
            >
              {nav}
            </a>
          ))}
        </div>

        {/* Send Message Button */}
        <button
          className="mt-12 px-10 py-3 rounded-xl
      bg-gradient-to-r from-red-500 to-pink-500
      text-white font-semibold
      hover:scale-105 hover:shadow-lg hover:shadow-red-500/40
      transition-all duration-300"
        >
          Send Message
        </button>
      </section>

    </div>
  );
}