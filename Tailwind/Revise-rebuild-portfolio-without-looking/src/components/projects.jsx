export default function Projects() {
  const projects = [
    {
      title: "Spotify Clone",
      img: "https://s3-alpha.figma.com/hub/file/5266409206/resized/1200x720/52cdf2e2-f990-40c0-becd-4ed2034eca08-cover.png",
    },
    {
      title: "Portfolio",
      img: "https://contentwriting101.com/wp-content/uploads/2020/09/Build-Your-Portfolio.png",
    },
    {
      title: "Skysense Weather App",
      img: "https://static.vecteezy.com/system/resources/previews/020/330/631/original/3d-glassmorphism-weather-forecast-app-template-mobile-interface-template-weather-icons-set-isolated-on-blue-background-vector.jpg",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition"
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                See Live Project 🔗
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
