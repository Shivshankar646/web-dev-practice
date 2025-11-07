export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Shiv 👋</h1>
      <p className="text-lg mb-6 max-w-lg">
        I’m a Frontend Developer passionate about building beautiful, responsive, and modern web applications.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-100 transition">
        View My Work 🚀
      </button>
    </section>
  );
}
