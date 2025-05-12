export const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-10">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Ready to start your project? Contact us for a free consultation and
            quote.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="md:flex">
              <div className="bg-indigo-600 p-8 text-white md:w-1/3">
                <h3 className="mb-6 text-2xl font-semibold">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="mr-3 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <p className="text-lg">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mr-3 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="text-lg">contact@dvelite.dev</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="mr-3 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-lg">
                        123 Tech Street, San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:w-2/3">
                <form>
                  <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-medium text-gray-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="mb-2 block font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="mb-2 block font-medium text-gray-700">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-indigo-700">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
