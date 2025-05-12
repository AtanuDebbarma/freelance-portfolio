export const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured online store with inventory management, payment processing, and customer analytics.',
      tech: 'React, Node.js, MongoDB, Stripe',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Healthcare Management System',
      description:
        'Secure patient management system with appointment scheduling and medical record tracking.',
      tech: 'Java, PostgreSQL, React, AWS',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Real Estate Marketplace',
      description:
        'Property listing platform with advanced search, virtual tours and agent communication.',
      tech: 'MERN Stack, Firebase, Google Maps API',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Financial Dashboard',
      description:
        'Interactive analytics dashboard with real-time data visualization and reporting tools.',
      tech: 'React, Node.js, MySQL, D3.js',
      image: '/api/placeholder/600/400',
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-16">
      <div className="container mx-auto px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Our Portfolio
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore some of our recent projects that showcase our expertise and
            versatility.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg bg-white shadow-md transition duration-300 hover:shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                  {project.tech}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition duration-300 hover:bg-indigo-700">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};
