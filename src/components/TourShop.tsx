import { ImageWithFallback } from './figma/ImageWithFallback';
import { Wrench, Ruler, Drill, Square } from 'lucide-react';

export function TourShop() {
  const facilities = [
    {
      title: 'Table Saws & Cutting Station',
      description: 'Professional-grade table saws with safety features and precision cutting capabilities for all your project needs.',
      icon: Square,
    },
    {
      title: 'Hand Tools & Work Benches',
      description: 'Fully equipped work benches with a complete selection of hand tools, clamps, and measuring instruments.',
      icon: Wrench,
    },
    {
      title: 'Power Tool Section',
      description: 'Access to routers, sanders, planers, jointers, and other power tools for detailed woodworking.',
      icon: Drill,
    },
    {
      title: 'Measurement & Layout Area',
      description: 'Dedicated space for precise measurements, layout work, and project planning.',
      icon: Ruler,
    },
  ];

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h1 className="text-[var(--color-copper-900)] mb-4">Tour Our Shop</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our well-equipped woodworking facility designed to support projects of all sizes and skill levels
          </p>
        </div>

        {/* Main Shop Image */}
        <div className="relative h-[400px] mb-8 overflow-hidden shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1619207486524-2b1ff1014aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHNob3AlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUyMTgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our woodworking shop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[var(--color-copper-900)] text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-stone-50 p-8 border border-stone-200">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-copper-900)] text-white flex items-center justify-center mr-4">
                    <facility.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--color-copper-900)] mb-2">{facility.title}</h3>
                    <p className="text-stone-600">{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[var(--color-copper-900)] text-center mb-12">Equipment & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-64 overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzY1MjA4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workshop tools"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white">Professional Tools</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619207486524-2b1ff1014aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHNob3AlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUyMTgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workshop space"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white">Spacious Work Areas</h3>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764116109111-0e18ecebb525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY3JhZnRzJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NTIxODIyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wood materials"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white">Quality Materials</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Features */}
      <section className="bg-[var(--color-copper-50)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[var(--color-copper-900)] text-center mb-12">What Makes Our Shop Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-[var(--color-copper-900)] mb-3">Safety First</h3>
              <p className="text-stone-600">
                All equipment is regularly maintained and safety protocols are strictly followed. Safety training is provided for all members.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-[var(--color-copper-900)] mb-3">Well-Organized</h3>
              <p className="text-stone-600">
                Our shop is thoughtfully organized with clear labeling, dedicated storage areas, and efficient workflow design.
              </p>
            </div>
            <div className="bg-white p-6 shadow-md">
              <h3 className="text-[var(--color-copper-900)] mb-3">Climate Controlled</h3>
              <p className="text-stone-600">
                Work comfortably year-round in our climate-controlled facility, perfect for the Arizona heat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[var(--color-copper-900)] text-white p-12">
          <h2 className="text-white mb-4">Want to See It in Person?</h2>
          <p className="text-xl text-[var(--color-copper-100)] mb-8">
            We welcome visitors! Contact us to schedule a tour of our facility.
          </p>
          <a href="#contact" className="inline-block bg-white hover:bg-stone-100 text-[var(--color-copper-900)] px-8 py-3 transition-colors">
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
}