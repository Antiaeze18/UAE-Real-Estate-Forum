function Hero() {
  try {
    return (
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(200, 16, 46, 0.7), rgba(0, 150, 57, 0.7)), url(https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
        data-name="hero" 
        data-file="components/Hero.js"
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            UAE Real Estate <br />
            <span className="text-[var(--accent-color)]">Professional Network</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Connect with industry professionals, investors, and clients. Share opportunities, 
            discuss market trends, and access expert advice in the UAE property market.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => window.location.href = 'forum.html'}
              className="bg-[var(--accent-color)] text-[var(--text-dark)] px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all duration-200 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center">
                <div className="icon-users mr-2 text-xl"></div>
                Join the Discussion
              </div>
            </button>
            
            <button 
              onClick={() => window.location.href = 'news.html'}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-200 w-full sm:w-auto"
            >
              <div className="flex items-center justify-center">
                <div className="icon-newspaper mr-2 text-xl"></div>
                Latest Market News
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}