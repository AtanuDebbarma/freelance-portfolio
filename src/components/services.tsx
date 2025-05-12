export const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Web Development',
      description:
        'Custom, responsive websites and web applications tailored to your business needs.',
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description:
        'Cross-platform mobile applications that work flawlessly on all devices.',
    },
    {
      icon: '⚙️',
      title: 'Backend Solutions',
      description:
        'Robust, scalable backend systems with secure API development.',
    },
    {
      icon: '🔍',
      title: 'UI/UX Design',
      description:
        'User-centered design that enhances engagement and conversion rates.',
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description:
        'Ongoing technical support and maintenance to keep your systems running smoothly.',
    },
    {
      icon: '🔐',
      title: 'Security Solutions',
      description:
        'Advanced security measures to protect your data and applications.',
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We provide end-to-end development services to help businesses
            achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-8 shadow-md transition duration-300 hover:shadow-lg">
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
