import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would typically send to a backend
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-amber-900 mb-4">Contact Us</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Have questions about membership, our facilities, or upcoming events? We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-900 text-white flex items-center justify-center mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-amber-900 mb-2">Address</h3>
                  <p className="text-stone-600">
                    Bell Recreation Center<br />
                    16820 N 99th Ave<br />
                    Sun City, AZ 85351
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-900 text-white flex items-center justify-center mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-amber-900 mb-2">Phone</h3>
                  <p className="text-stone-600">
                    (623) 977-2345
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-900 text-white flex items-center justify-center mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-amber-900 mb-2">Email</h3>
                  <p className="text-stone-600">
                    info@bellwoodclub.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-900 text-white flex items-center justify-center mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-amber-900 mb-2">Shop Hours</h3>
                  <div className="text-stone-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 shadow-md">
              <h2 className="text-amber-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-stone-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-stone-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-stone-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-stone-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900"
                    >
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="tour">Schedule a Tour</option>
                      <option value="workshop">Workshop Information</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-stone-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-900"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-16 bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-amber-900 text-center mb-8">Find Us</h2>
          <div className="bg-stone-300 h-96 flex items-center justify-center">
            <p className="text-stone-600">Map of Bell Recreation Center, Sun City, AZ</p>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/place/Sun+City,+AZ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-900 hover:bg-amber-800 text-white px-6 py-3 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-amber-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-amber-900 mb-2">How do I become a member?</h3>
              <p className="text-stone-600">
                Contact us to schedule a tour of our facility. After your tour, you can complete a membership application and pay annual dues. New members receive an orientation session on shop safety and equipment use.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-amber-900 mb-2">What are the membership fees?</h3>
              <p className="text-stone-600">
                Annual membership is $150 for individuals or $225 for couples. This includes unlimited access to the shop, all equipment use, and participation in workshops and events.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-amber-900 mb-2">Do I need to bring my own tools?</h3>
              <p className="text-stone-600">
                No! Our shop is fully equipped with all major power tools and hand tools. However, some members prefer to bring their own specialty tools or supplies for specific projects.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-amber-900 mb-2">What skill level is required?</h3>
              <p className="text-stone-600">
                We welcome all skill levels, from complete beginners to master craftsmen. Our experienced members are always happy to help newcomers learn the basics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}