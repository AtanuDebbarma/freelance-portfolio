export const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 gap-8 pl-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">DevElite</h3>
            <p className="text-gray-400">
              Professional web development services tailored to your business
              needs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Database Design
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  API Development
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contact@dvelite.dev</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} DevElite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
