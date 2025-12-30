import { ImageWithFallback } from './figma/ImageWithFallback';
import { Hammer, Users, Calendar, Award } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-stone-900 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619207486524-2b1ff1014aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHNob3AlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUyMTgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Woodworking shop interior"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-copper-900)]/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-white mb-4">
                Welcome to Bell Wood Club
              </h1>
              <p className="text-xl text-[var(--color-copper-100)] mb-8">
                Sun City's premier woodworking community. Join fellow craftsmen and women in creating beautiful, handcrafted pieces.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#learn-more" className="bg-[var(--color-copper-600)] hover:bg-[var(--color-copper-700)] text-white px-6 py-3 transition-colors">
                  Learn More
                </a>
                <a href="#contact" className="bg-white hover:bg-stone-100 text-[var(--color-copper-900)] px-6 py-3 transition-colors">
                  Join Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="learn-more" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[var(--color-copper-900)] mb-4">Why Join Bell Wood Club?</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Our club offers a welcoming environment for woodworkers of all skill levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-copper-100)] text-[var(--color-copper-900)] mb-4">
                <Hammer size={32} />
              </div>
              <h3 className="mb-2">Professional Equipment</h3>
              <p className="text-stone-600">
                Access to a fully equipped woodshop with quality tools and machinery
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-copper-100)] text-[var(--color-copper-900)] mb-4">
                <Users size={32} />
              </div>
              <h3 className="mb-2">Supportive Community</h3>
              <p className="text-stone-600">
                Learn from experienced members and share your knowledge with others
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-copper-100)] text-[var(--color-copper-900)] mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="mb-2">Regular Workshops</h3>
              <p className="text-stone-600">
                Participate in classes, demonstrations, and hands-on learning sessions
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-copper-100)] text-[var(--color-copper-900)] mb-4">
                <Award size={32} />
              </div>
              <h3 className="mb-2">Showcase Your Work</h3>
              <p className="text-stone-600">
                Display your creations and gain recognition for your craftsmanship
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[var(--color-copper-900)] mb-6">About Our Club</h2>
              <p className="text-stone-700 mb-4">
                Bell Wood Club has been serving the Sun City community for years, providing a space where woodworking enthusiasts can pursue their passion, learn new skills, and create lasting friendships.
              </p>
              <p className="text-stone-700 mb-4">
                Whether you're a beginner looking to learn the basics or an experienced craftsman seeking to refine your skills, our club welcomes you. We offer access to professional-grade equipment, expert guidance, and a supportive community of fellow woodworkers.
              </p>
              <p className="text-stone-700">
                Our members create everything from furniture and cabinetry to decorative pieces and toys. The only limit is your imagination!
              </p>
            </div>
            <div className="relative h-96">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzY1MjA4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Woodworking tools"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-copper-900)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-[var(--color-copper-100)] mb-8 max-w-2xl mx-auto">
            Become a member today and start creating beautiful woodwork projects with us
          </p>
          <a href="#contact" className="inline-block bg-white hover:bg-stone-100 text-[var(--color-copper-900)] px-8 py-3 transition-colors">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}