export const Technologies = () => {
  const technologies = [
    {name: 'MongoDB', category: 'Database'},
    {name: 'Express.js', category: 'Backend'},
    {name: 'React', category: 'Frontend'},
    {name: 'Node.js', category: 'Backend'},
    {name: 'PostgreSQL', category: 'Database'},
    {name: 'MySQL', category: 'Database'},
    {name: 'Firebase', category: 'Backend/Database'},
    {name: 'Java', category: 'Backend'},
    {name: 'TypeScript', category: 'Language'},
    {name: 'Next.js', category: 'Frontend'},
    {name: 'Tailwind CSS', category: 'Frontend'},
    {name: 'Docker', category: 'DevOps'},
  ];

  return (
    <section id="tech" className="py-16">
      <div className="container mx-auto px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Technologies We Master
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Our team is proficient in a wide range of modern technologies to
            deliver the best solutions.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card rounded-lg bg-white p-4 text-center shadow-md hover:shadow-lg">
              <h3 className="mb-1 text-lg font-semibold text-gray-800">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-500">{tech.category}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-indigo-50 p-6">
          <h3 className="mb-2 text-xl font-semibold text-indigo-700">
            Our Tech Stack Approach
          </h3>
          <p className="text-gray-700">
            We carefully select the most appropriate technologies for each
            project based on specific requirements, scalability needs, and
            long-term maintainability. Our MERN stack expertise allows us to
            deliver seamless full-stack solutions, while our experience with SQL
            databases ensures data integrity and performance.
          </p>
        </div>
      </div>
    </section>
  );
};
