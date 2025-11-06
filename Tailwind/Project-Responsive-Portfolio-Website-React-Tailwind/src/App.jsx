import React from "react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* 🌐 Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">Shiv.dev</h1>
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Skills</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="md:hidden text-2xl">☰</button>
      </nav>

      {/* 💫 Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-[70vh]">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Shiv 👋</h1>
          <p className="text-lg md:text-xl mb-6">
            A passionate Web Developer who loves building modern and responsive websites.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition">
            View My Work 🚀
          </button>
        </div>
      </section>

      {/* 👤 About Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 bg-gray-100">
        <img
          src="https://i.pinimg.com/736x/7c/89/ae/7c89aef83b0b0a7a2c1b78843dcba6da.jpg"
          alt="profile"
          className="w-60 h-60 rounded-full mx-auto border-4 border-blue-500 shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-6">
            I’m a frontend developer focused on creating responsive, user-friendly web
            applications using React, Tailwind CSS, and modern JavaScript.
          </p>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Download CV 📄
          </button>
        </div>
      </section>

      {/* ⚙️ Skills Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-md p-6 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* 🧩 Projects Section */}
      <section className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition"
            >
              <img
                src={`https://picsum.photos/400/200?random=${num}`}
                alt={`Project ${num}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">Project {num}</h3>
                <p className="text-gray-600 mt-2">
                  A brief description of what this project is about.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📞 Contact Section */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="mb-6 text-gray-700">
          Have a project or want to collaborate? Let’s connect!
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition">
          Say Hello 👋
        </button>
      </section>

      {/* 🦶 Footer */}
      <footer className="p-6 bg-gray-800 text-white text-center">
        <p>© {new Date().getFullYear()} Shiv.dev | All Rights Reserved</p>
      </footer>
    </div>
  );
}
