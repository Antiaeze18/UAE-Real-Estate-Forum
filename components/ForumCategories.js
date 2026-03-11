function ForumCategories() {
  try {
    const categories = [
      {
        id: 'property-sales',
        title: 'Property Sales',
        description: 'Discuss buying and selling properties across UAE',
        icon: 'home',
        posts: 156,
        color: 'bg-red-100 text-[var(--primary-color)]'
      },
      {
        id: 'rentals',
        title: 'Rentals',
        description: 'Rental market trends, tenant advice, and property management',
        icon: 'key',
        posts: 89,
        color: 'bg-blue-100 text-blue-600'
      },
      {
        id: 'investment-tips',
        title: 'Investment Tips',
        description: 'Share investment strategies and market insights',
        icon: 'trending-up',
        posts: 203,
        color: 'bg-green-100 text-[var(--secondary-color)]'
      },
      {
        id: 'legal-advice',
        title: 'Legal Advice',
        description: 'Legal questions, contracts, and regulatory updates',
        icon: 'scale',
        posts: 67,
        color: 'bg-purple-100 text-purple-600'
      },
      {
        id: 'market-trends',
        title: 'Market Trends',
        description: 'Latest market analysis and price trends',
        icon: 'chart-bar',
        posts: 134,
        color: 'bg-orange-100 text-orange-600'
      },
      {
        id: 'off-plan',
        title: 'Off-plan Projects',
        description: 'New developments and off-plan investment opportunities',
        icon: 'building-2',
        posts: 78,
        color: 'bg-yellow-100 text-yellow-600'
      }
    ];

    return (
      <div className="space-y-8" data-name="forum-categories" data-file="components/ForumCategories.js">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl p-6 card-shadow hover:shadow-lg transition-shadow duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                  <div className={`icon-${category.icon} text-xl`}></div>
                </div>
                <span className="text-sm text-[var(--text-light)] bg-gray-100 px-2 py-1 rounded">
                  {category.posts} posts
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-2">{category.title}</h3>
              <p className="text-[var(--text-light)] mb-4">{category.description}</p>
              
              <button className="text-[var(--primary-color)] font-medium hover:underline">
                View Discussions →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 card-shadow">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-[var(--text-dark)]">Recent Discussions</h2>
            <button className="btn-primary">New Post</button>
          </div>
          
          <div className="space-y-4">
            {[
              {
                title: 'Dubai Marina property prices - Q4 2024 trends',
                author: 'Ahmed Al-Mansouri',
                category: 'Market Trends',
                replies: 12,
                time: '2 hours ago'
              },
              {
                title: 'Best areas for rental investment in Abu Dhabi',
                author: 'Sarah Johnson',
                category: 'Investment Tips',
                replies: 8,
                time: '4 hours ago'
              },
              {
                title: 'New visa regulations impact on property market',
                author: 'Mohammed Hassan',
                category: 'Legal Advice',
                replies: 15,
                time: '6 hours ago'
              }
            ].map((post, index) => (
              <div key={index} className="border-b border-[var(--border-color)] pb-4 last:border-b-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--text-dark)] mb-1 hover:text-[var(--primary-color)] cursor-pointer">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-[var(--text-light)] mb-2">
                      <span className="mr-4">By {post.author}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-4">{post.category}</span>
                      <span>{post.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-[var(--text-light)]">
                    <div className="icon-message-circle mr-1"></div>
                    <span>{post.replies} replies</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ForumCategories component error:', error);
    return null;
  }
}
