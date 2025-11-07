export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

  return (
    <section id="skills" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white shadow-md p-6 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
