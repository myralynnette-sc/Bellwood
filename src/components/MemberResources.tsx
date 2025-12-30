import { FileText, Video, Book, Calendar, Users, AlertCircle } from 'lucide-react';

export function MemberResources() {
  const resources = [
    {
      title: 'Safety Guidelines',
      description: 'Essential safety protocols and best practices for using shop equipment',
      icon: AlertCircle,
      type: 'PDF Document',
    },
    {
      title: 'Tool Usage Guides',
      description: 'Step-by-step instructions for operating all shop machinery and tools',
      icon: Book,
      type: 'Resource Library',
    },
    {
      title: 'Project Plans',
      description: 'Free downloadable plans for various woodworking projects',
      icon: FileText,
      type: 'Downloads',
    },
    {
      title: 'Video Tutorials',
      description: 'Recorded demonstrations and technique videos from our workshops',
      icon: Video,
      type: 'Video Library',
    },
    {
      title: 'Event Calendar',
      description: 'Upcoming workshops, demonstrations, and club meetings',
      icon: Calendar,
      type: 'Schedule',
    },
    {
      title: 'Member Directory',
      description: 'Connect with fellow members and find mentorship opportunities',
      icon: Users,
      type: 'Directory',
    },
  ];

  const quickLinks = [
    { name: 'Shop Schedule & Hours', url: '#' },
    { name: 'Equipment Reservation System', url: '#' },
    { name: 'Wood & Material Suppliers', url: '#' },
    { name: 'Recommended Tool Vendors', url: '#' },
    { name: 'Finishing Techniques Guide', url: '#' },
    { name: 'Wood Species Reference', url: '#' },
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-[var(--color-copper-900)] mb-4">Member Resources</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Access helpful tools, guides, and information to support your woodworking journey
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-[var(--color-copper-900)]"
            >
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-copper-100)] text-[var(--color-copper-900)] flex items-center justify-center mr-4">
                  <resource.icon size={24} />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-xs text-[var(--color-copper-700)] bg-[var(--color-copper-50)] px-2 py-1 mb-2">
                    {resource.type}
                  </span>
                  <h3 className="text-[var(--color-copper-900)] mb-2">{resource.title}</h3>
                </div>
              </div>
              <p className="text-stone-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[var(--color-copper-900)] text-center mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="bg-white p-4 hover:bg-[var(--color-copper-50)] transition-colors border border-stone-200 flex items-center justify-between group"
              >
                <span className="text-stone-700 group-hover:text-[var(--color-copper-900)]">{link.name}</span>
                <svg
                  className="w-5 h-5 text-stone-400 group-hover:text-[var(--color-copper-900)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[var(--color-copper-900)] text-center mb-12">Member Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--color-copper-50)] p-8">
              <h3 className="text-[var(--color-copper-900)] mb-4">Learning Opportunities</h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>Monthly workshops on various woodworking techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>One-on-one mentorship with experienced craftsmen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>Guest speaker demonstrations and presentations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>Access to our extensive video tutorial library</span>
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-copper-50)] p-8">
              <h3 className="text-[var(--color-copper-900)] mb-4">Shop Privileges</h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>24/7 access to the workshop facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>Use of all professional-grade equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>Personal storage space for projects and materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--color-copper-900)] mr-2">•</span>
                  <span>Discounts at local lumber and hardware suppliers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-[var(--color-copper-900)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-[var(--color-copper-100)] mb-8">
            Subscribe to our newsletter for the latest updates, tips, and workshop announcements
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-stone-900"
            />
            <button className="bg-white hover:bg-stone-100 text-[var(--color-copper-900)] px-6 py-3 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}