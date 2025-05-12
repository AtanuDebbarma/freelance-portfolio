export const Team = () => {
  const team = [
    {
      name: 'Alex Morgan',
      role: 'Full-Stack Lead Developer',
      bio: '10+ years of experience in web development with expertise in MERN stack and system architecture.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Sarah Chen',
      role: 'Backend Specialist',
      bio: 'Expert in database design, API development, and server optimization with Java and Node.js.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Frontend Developer',
      bio: 'Passionate about creating intuitive user interfaces with React and modern CSS frameworks.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Priya Patel',
      role: 'Full-Stack Developer',
      bio: 'Specializes in e-commerce solutions and payment integrations with MERN stack and Firebase.',
      image: '/api/placeholder/300/300',
    },
  ];

  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We're a group of passionate developers dedicated to delivering
            exceptional digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card rounded-lg bg-white p-6 text-center shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="mb-1 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="mb-3 font-medium text-indigo-600">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
