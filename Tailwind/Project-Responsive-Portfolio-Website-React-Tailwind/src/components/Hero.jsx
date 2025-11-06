export default function Hero() {
  return (
    <div className="pt-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Shiv 👋</h1>
        <p className="text-lg mb-6 text-gray-100">
          Frontend Developer | Building modern, responsive web apps 🚀
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition-all"
        >
          View My Work
        </a>
      </div>
  );
}
