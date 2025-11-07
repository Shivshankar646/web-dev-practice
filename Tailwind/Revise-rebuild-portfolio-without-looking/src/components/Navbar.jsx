export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-indigo-600">Shivshankar.dev</div>
      <div className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#home" className="hover:text-indigo-600">Home</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#skills" className="hover:text-indigo-600">Skills</a>
        <a href="#projects" className="hover:text-indigo-600">Projects</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </div>
      <button className="md:hidden text-2xl">☰</button>
    </nav>
  );
}
