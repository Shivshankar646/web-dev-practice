export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
        <img
          className="rounded-full w-64 h-64 mx-auto shadow-md border-4 border-indigo-500"
          src="https://img.freepik.com/premium-photo/simple-man-formal-attire-classic-style-illustration_1029469-183756.jpg"
          alt="profile"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-6">
            I love bringing ideas to life through code — creating responsive and modern websites using React & Tailwind CSS.
          </p>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700 transition">
            Download CV 📄
          </button>
        </div>
      </div>
    </section>
  );
}
