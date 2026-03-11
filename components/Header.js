function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigateToPage = (page) => {
      if (page === 'home') {
        window.location.href = 'index.html';
      } else {
        window.location.href = `${page}.html`;
      }
    };

    return (
      <header className="bg-white shadow-sm border-b border-[var(--border-color)]" data-name="header" data-file="components/Header.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigateToPage('home')}>
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center mr-3">
                <div className="icon-building text-xl text-white"></div>
              </div>
              <span className="text-xl font-bold text-[var(--text-dark)]">UAE Real Estate Forum</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => navigateToPage('home')} className="nav-link">Home</button>
              <button onClick={() => navigateToPage('forum')} className="nav-link">Forum</button>
              <button onClick={() => navigateToPage('news')} className="nav-link">News</button>
              <button onClick={() => navigateToPage('contact')} className="nav-link">Contact</button>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button onClick={() => navigateToPage('login')} className="nav-link">Login</button>
              <button onClick={() => navigateToPage('register')} className="btn-primary">Join Forum</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-[var(--primary-color)]"
            >
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[var(--border-color)]">
              <div className="flex flex-col space-y-4">
                <button onClick={() => navigateToPage('home')} className="nav-link text-left">Home</button>
                <button onClick={() => navigateToPage('forum')} className="nav-link text-left">Forum</button>
                <button onClick={() => navigateToPage('news')} className="nav-link text-left">News</button>
                <button onClick={() => navigateToPage('contact')} className="nav-link text-left">Contact</button>
                <div className="flex space-x-4 pt-4">
                  <button onClick={() => navigateToPage('login')} className="btn-outline flex-1">Login</button>
                  <button onClick={() => navigateToPage('register')} className="btn-primary flex-1">Join Forum</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}