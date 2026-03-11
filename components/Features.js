function Features() {
  try {
    const features = [
      {
        icon: 'message-circle',
        title: 'Discussion Forums',
        description: 'Engage in discussions about property sales, rentals, investment tips, and market trends with industry experts.',
        color: 'bg-red-100 text-[var(--primary-color)]'
      },
      {
        icon: 'trending-up',
        title: 'Market Analysis',
        description: 'Access comprehensive market reports, trends analysis, and investment insights from UAE real estate professionals.',
        color: 'bg-green-100 text-[var(--secondary-color)]'
      },
      {
        icon: 'users',
        title: 'Professional Network',
        description: 'Connect with real estate agents, developers, investors, and legal advisors across the UAE property market.',
        color: 'bg-yellow-100 text-yellow-600'
      },
      {
        icon: 'bell',
        title: 'Latest Updates',
        description: 'Stay informed with real-time notifications about new opportunities, market changes, and forum discussions.',
        color: 'bg-blue-100 text-blue-600'
      }
    ];

    return (
      <section className="py-20 bg-[var(--background-light)]" data-name="features" data-file="components/Features.js">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[var(--text-dark)] mb-4">
              Why Join Our Forum?
            </h2>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              Our platform brings together the UAE real estate community to share knowledge, 
              opportunities, and insights that drive the property market forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl card-shadow hover:shadow-lg transition-shadow duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <div className={`icon-${feature.icon} text-2xl`}></div>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-4">{feature.title}</h3>
                <p className="text-[var(--text-light)] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button 
              onClick={() => window.location.href = 'register.html'}
              className="btn-primary text-lg px-12 py-4"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}