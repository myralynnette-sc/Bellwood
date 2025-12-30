import { Mail, Phone } from 'lucide-react';

export function MeetTheBoard() {
  const boardMembers = [
    {
      name: 'Michael Stevens',
      position: 'President',
      bio: 'With over 30 years of woodworking experience, Michael leads our club with passion and dedication. He specializes in fine furniture making and has been a member since 2015.',
      email: 'president@bellwoodclub.com',
      phone: '(623) 555-0101',
    },
    {
      name: 'Susan Thompson',
      position: 'Vice President',
      bio: 'Susan brings her expertise in project management and love for woodturning to the board. She coordinates our monthly workshops and demonstration events.',
      email: 'vicepresident@bellwoodclub.com',
      phone: '(623) 555-0102',
    },
    {
      name: 'David Chen',
      position: 'Treasurer',
      bio: 'David manages our club finances and equipment purchases. A retired accountant, he enjoys building custom cabinetry and outdoor furniture.',
      email: 'treasurer@bellwoodclub.com',
      phone: '(623) 555-0103',
    },
    {
      name: 'Barbara Rodriguez',
      position: 'Secretary',
      bio: 'Barbara keeps our club organized and maintains member records. She has a passion for creating wooden toys and decorative pieces for charity.',
      email: 'secretary@bellwoodclub.com',
      phone: '(623) 555-0104',
    },
    {
      name: 'Richard Parker',
      position: 'Safety Officer',
      bio: 'Richard ensures all members can work safely in our shop. With a background in industrial safety, he conducts regular training sessions and equipment inspections.',
      email: 'safety@bellwoodclub.com',
      phone: '(623) 555-0105',
    },
    {
      name: 'Carol Anderson',
      position: 'Events Coordinator',
      bio: 'Carol organizes our social events, exhibitions, and community outreach programs. She loves creating artistic wooden sculptures and mixed-media pieces.',
      email: 'events@bellwoodclub.com',
      phone: '(623) 555-0106',
    },
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-amber-900 mb-4">Meet the Board</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Our dedicated board members volunteer their time to ensure Bell Wood Club remains a welcoming and well-run community
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {boardMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg p-8">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-20 h-20 bg-amber-900 text-white flex items-center justify-center mr-6 text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-amber-900 mb-1">{member.name}</h3>
                  <p className="text-amber-700">{member.position}</p>
                </div>
              </div>
              <p className="text-stone-600 mb-6">{member.bio}</p>
              <div className="space-y-2 border-t border-stone-200 pt-4">
                <div className="flex items-center text-stone-600">
                  <Mail size={16} className="mr-2 text-amber-900" />
                  <a href={`mailto:${member.email}`} className="hover:text-amber-900 transition-colors">
                    {member.email}
                  </a>
                </div>
                <div className="flex items-center text-stone-600">
                  <Phone size={16} className="mr-2 text-amber-900" />
                  <span>{member.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Board Meetings Info */}
      <section className="bg-stone-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8">
              <h2 className="text-amber-900 mb-4">Board Meetings</h2>
              <p className="text-stone-600 mb-4">
                Our board meets on the first Tuesday of each month at 6:00 PM. All members are welcome to attend and observe.
              </p>
              <p className="text-stone-600 mb-4">
                If you have items to add to the meeting agenda, please contact the Secretary at least one week in advance.
              </p>
              <div className="bg-amber-50 p-4 border-l-4 border-amber-900">
                <p className="text-sm">
                  <span className="text-amber-900">Next Meeting:</span> First Tuesday of the month at 6:00 PM
                </p>
              </div>
            </div>
            <div className="bg-white p-8">
              <h2 className="text-amber-900 mb-4">Get Involved</h2>
              <p className="text-stone-600 mb-4">
                We&apos;re always looking for members who want to contribute to the club&apos;s success. Opportunities include:
              </p>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>Committee participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>Workshop instruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>Event planning and coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-900 mr-2">•</span>
                  <span>Facility maintenance and improvements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Board CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-amber-900 text-white p-12">
          <h2 className="text-white mb-4">Questions for the Board?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Feel free to reach out to any board member or use our general contact form
          </p>
          <a href="#contact" className="inline-block bg-white hover:bg-stone-100 text-amber-900 px-8 py-3 transition-colors">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}