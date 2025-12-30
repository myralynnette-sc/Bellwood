import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects = [
    {
      id: 1,
      title: 'Handcrafted Dining Table',
      member: 'John Smith',
      category: 'furniture',
      image: 'https://images.unsplash.com/photo-1764116109111-0e18ecebb525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY3JhZnRzJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NTIxODIyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Beautiful walnut dining table with custom inlays',
    },
    {
      id: 2,
      title: 'Wooden Decorative Bowl',
      member: 'Mary Johnson',
      category: 'decorative',
      image: 'https://images.unsplash.com/photo-1758221213140-f45ab78d0478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwcm9qZWN0cyUyMGNyYWZ0c3xlbnwxfHx8fDE3NjUyMTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Turned maple bowl with natural edge',
    },
    {
      id: 3,
      title: 'Custom Bookshelf',
      member: 'Robert Davis',
      category: 'furniture',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzY1MjA4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Oak bookshelf with adjustable shelves',
    },
    {
      id: 4,
      title: 'Cutting Board Set',
      member: 'Linda Wilson',
      category: 'small',
      image: 'https://images.unsplash.com/photo-1764116109111-0e18ecebb525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY3JhZnRzJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NTIxODIyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'End-grain cutting boards in various sizes',
    },
    {
      id: 5,
      title: 'Garden Bench',
      member: 'Thomas Anderson',
      category: 'furniture',
      image: 'https://images.unsplash.com/photo-1619207486524-2b1ff1014aa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHNob3AlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjUyMTgyMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cedar outdoor bench with curved armrests',
    },
    {
      id: 6,
      title: 'Wooden Toy Train',
      member: 'Patricia Martinez',
      category: 'small',
      image: 'https://images.unsplash.com/photo-1758221213140-f45ab78d0478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBwcm9qZWN0cyUyMGNyYWZ0c3xlbnwxfHx8fDE3NjUyMTgyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Hand-carved toy train set for grandchildren',
    },
    {
      id: 7,
      title: 'Wall Art Panel',
      member: 'James Taylor',
      category: 'decorative',
      image: 'https://images.unsplash.com/photo-1685320198649-781e83a61de4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwdG9vbHN8ZW58MXx8fHwxNzY1MjA4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Geometric wood art with mixed species',
    },
    {
      id: 8,
      title: 'Jewelry Box',
      member: 'Jennifer Brown',
      category: 'small',
      image: 'https://images.unsplash.com/photo-1764116109111-0e18ecebb525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwY3JhZnRzJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NTIxODIyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Cherry jewelry box with velvet lining',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'furniture', label: 'Furniture' },
    { id: 'decorative', label: 'Decorative' },
    { id: 'small', label: 'Small Items' },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="py-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-8">
          <h1 className="text-[var(--color-copper-900)] mb-4">Member Gallery</h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover the amazing craftsmanship of our talented members. From furniture to decorative pieces, our community creates it all.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 transition-colors ${
                selectedCategory === category.id
                  ? 'bg-[var(--color-copper-900)] text-white'
                  : 'bg-white text-[var(--color-copper-900)] border border-[var(--color-copper-900)] hover:bg-[var(--color-copper-50)]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[var(--color-copper-900)] mb-2">{project.title}</h3>
                <p className="text-stone-500 text-sm mb-3">By {project.member}</p>
                <p className="text-stone-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-16 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-stone-100 p-12">
          <h2 className="text-[var(--color-copper-900)] mb-4">Share Your Projects</h2>
          <p className="text-xl text-stone-600 mb-8">
            Have a project you&apos;d like to showcase? We&apos;d love to feature your work in our gallery!
          </p>
          <a href="#contact" className="inline-block bg-[var(--color-copper-900)] hover:bg-[var(--color-copper-800)] text-white px-8 py-3 transition-colors">
            Submit Your Project
          </a>
        </div>
      </section>
    </div>
  );
}