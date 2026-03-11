function LoginForm() {
  try {
    const [formData, setFormData] = React.useState({
      email: '',
      password: ''
    });
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const auth = window.firebaseAuth;
        await auth.signInWithEmailAndPassword(formData.email, formData.password);
        alert('Login successful!');
        // Optionally redirect to forum or dashboard
        window.location.href = 'forum.html';
      } catch (error) {
        alert(error.message || 'Login failed.');
      } finally {
        setLoading(false);
      }
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4" data-name="login-form" data-file="components/LoginForm.js">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-xl flex items-center justify-center">
                <div className="icon-building text-2xl text-white"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-dark)]">Welcome Back</h2>
            <p className="mt-2 text-[var(--text-light)]">
              Sign in to your account to access the forum
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl card-shadow space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-[var(--text-light)]">Remember me</span>
              </label>
              <button type="button" className="text-sm text-[var(--primary-color)] hover:underline">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="w-full btn-primary" disabled={loading}>
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="text-center">
              <span className="text-[var(--text-light)]">Don't have an account? </span>
              <button
                type="button"
                onClick={() => window.location.href = 'register.html'}
                className="text-[var(--primary-color)] hover:underline font-medium"
              >
                Join the forum
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('LoginForm component error:', error);
    return null;
  }
}
