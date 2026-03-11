class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function ForumApp() {
  try {
    return (
      <div className="min-h-screen bg-[var(--background-light)]" data-name="forum-app" data-file="forum-app.js">
        <Header />
        <div className="pt-8 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[var(--text-dark)] mb-4">Discussion Forum</h1>
              <p className="text-xl text-[var(--text-light)]">
                Connect with UAE real estate professionals and share your insights
              </p>
            </div>
            <ForumCategories />
          </div>
        </div>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('ForumApp component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <ForumApp />
  </ErrorBoundary>
);