function ContactForm() {
  try {
    const [formData, setFormData] = React.useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-name="contact-form" data-file="components/ContactForm.js">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl card-shadow">
          <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Your full name"
              />
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
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Message subject"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[var(--text-dark)] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                placeholder="Your message..."
              />
            </div>
            
            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl card-shadow">
            <h2 className="text-2xl font-semibold text-[var(--text-dark)] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="icon-mail text-xl text-[var(--primary-color)]"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-dark)] mb-1">Email</h3>
                  <p className="text-[var(--text-light)]">info@uaerealestateforum.com</p>
                  <p className="text-[var(--text-light)]">support@uaerealestateforum.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="icon-phone text-xl text-[var(--secondary-color)]"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-dark)] mb-1">Phone</h3>
                  <p className="text-[var(--text-light)]">+971 4 XXX XXXX</p>
                  <p className="text-[var(--text-light)]">+971 50 XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <div className="icon-map-pin text-xl text-blue-600"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-dark)] mb-1">Office</h3>
                  <p className="text-[var(--text-light)]">Business Bay, Dubai</p>
                  <p className="text-[var(--text-light)]">United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl card-shadow">
            <h3 className="text-xl font-semibold text-[var(--text-dark)] mb-4">Business Hours</h3>
            <div className="space-y-2 text-[var(--text-light)]">
              <div className="flex justify-between">
                <span>Sunday - Thursday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>9:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ContactForm component error:', error);
    return null;
  }
}