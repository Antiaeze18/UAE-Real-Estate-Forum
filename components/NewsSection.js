function NewsSection() {
  try {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const newsArticles = [
      {
        id: 1,
        title: 'Dubai Property Market Shows Strong Recovery in Q4 2024',
        excerpt: 'Latest data reveals significant growth in property transactions across Dubai, with luxury segments leading the recovery.',
        category: 'Market Analysis',
        author: 'Real Estate Insights Team',
        date: '2024-12-15',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 2,
        title: 'New Visa Regulations Impact on UAE Property Investment',
        excerpt: 'Understanding how recent visa policy changes affect property ownership and investment opportunities for expatriates.',
        category: 'Legal Updates',
        author: 'Legal Advisory Team',
        date: '2024-12-10',
        image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 3,
        title: 'Abu Dhabi Rental Market Trends: What Investors Need to Know',
        excerpt: 'Comprehensive analysis of rental yields and market dynamics in Abu Dhabi\'s key residential areas.',
        category: 'Investment',
        author: 'Market Research Team',
        date: '2024-12-08',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      }
    ];

    const categories = ['all', 'Market Analysis', 'Legal Updates', 'Investment', 'Development News'];

    const filteredArticles = newsArticles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    return (
      <div className="space-y-8" data-name="news-section" data-file="components/NewsSection.js">
        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl card-shadow">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="icon-search absolute left-3 top-3 text-gray-400"></div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
              </div>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-shadow duration-300">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-[var(--primary-color)] text-white px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-[var(--text-light)]">{article.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-3 hover:text-[var(--primary-color)] cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-[var(--text-light)] mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--text-light)]">By {article.author}</span>
                  <button className="text-[var(--primary-color)] font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('NewsSection component error:', error);
    return null;
  }
}