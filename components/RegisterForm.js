function RegisterForm() {
  try {
    const [formData, setFormData] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      company: '',
      role: '',
      agreeToTerms: false
    });
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (!formData.agreeToTerms) {
        alert('You must agree to the terms to register.');
        return;
      }
      setLoading(true);
      try {
        const auth = window.firebaseAuth;
        await auth.createUserWithEmailAndPassword(formData.email, formData.password);
        alert('Registration successful! Please check your email for verification.');
        // Optionally, send verification email:
        if (auth.currentUser) {
          await auth.currentUser.sendEmailVerification();
        }
        // Optionally, save extra user info to Firestore here
      } catch (error) {
        alert(error.message || 'Registration failed.');
      } finally {
        setLoading(false);
      }
    };

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };

    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4" data-name="register-form" data-file="components/RegisterForm.js">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[var(--primary-color)] rounded-xl flex items-center justify-center">
                <div className="icon-building text-2xl text-white"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[var(--text-dark)]">Join Our Community</h2>
            <p className="mt-2 text-[var(--text-light)]">
              Create your account to start connecting with UAE real estate professionals
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl card-shadow space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  placeholder="First name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  placeholder="Last name"
                />
              </div>
            </div>

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
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              >
                <option value="">Select your role</option>
                <option value="agent">Real Estate Agent</option>
                <option value="developer">Developer</option>
                <option value="investor">Investor</option>
                <option value="legal">Legal Advisor</option>
                <option value="other">Other</option>
              </select>
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
                placeholder="Create a password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
                className="mt-1 mr-3"
              />
              <label className="text-sm text-[var(--text-light)]">
                I agree to the <button type="button" className="text-[var(--primary-color)] hover:underline">Terms of Service</button> and <button type="button" className="text-[var(--primary-color)] hover:underline">Privacy Policy</button>
              </label>
            </div>

            <button type="submit" className="w-full btn-primary" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="text-center">
              <span className="text-[var(--text-light)]">Already have an account? </span>
              <button
                type="button"
                onClick={() => window.location.href = 'login.html'}
                className="text-[var(--primary-color)] hover:underline font-medium"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error('RegisterForm component error:', error);
    return null;
  }
}