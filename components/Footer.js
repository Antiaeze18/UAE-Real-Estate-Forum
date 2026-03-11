function Footer() {
  try {
    return (
      <footer className="bg-[var(--text-dark)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mr-3">
                  <div className="icon-building text-xl text-white"></div>
                </div>
                <span className="text-xl font-bold">UAE Real Estate Forum</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                The premier platform for UAE real estate professionals to connect, 
                share insights, and drive the property market forward together.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-linkedin text-lg"></div>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </div>
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => window.location.href = 'forum.html'} className="text-gray-300 hover:text-white transition-colors">Forum</button></li>
                <li><button onClick={() => window.location.href = 'news.html'} className="text-gray-300 hover:text-white transition-colors">News</button></li>
                <li><button onClick={() => window.location.href = 'contact.html'} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
                <li><button onClick={() => window.location.href = 'register.html'} className="text-gray-300 hover:text-white transition-colors">Join Forum</button></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="icon-mail mr-3 text-[var(--primary-color)]"></div>
                  <span className="text-gray-300">info@uaerealestateforum.com</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-phone mr-3 text-[var(--primary-color)]"></div>
                  <span className="text-gray-300">+971 4 XXX XXXX</span>
                </div>
                <div className="flex items-center">
                  <div className="icon-map-pin mr-3 text-[var(--primary-color)]"></div>
                  <span className="text-gray-300">Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 UAE Real Estate Forum. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}