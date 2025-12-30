import { useState } from 'react';
import { Home } from './components/Home';
import { TourShop } from './components/TourShop';
import { Gallery } from './components/Gallery';
import { MemberResources } from './components/MemberResources';
import { MeetTheBoard } from './components/MeetTheBoard';
import { Contact } from './components/Contact';
import { Logo } from './components/Logo';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'tour' | 'gallery' | 'resources' | 'board' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'tour':
        return <TourShop />;
      case 'gallery':
        return <Gallery />;
      case 'resources':
        return <MemberResources />;
      case 'board':
        return <MeetTheBoard />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    { id: 'home' as Page, label: 'Home' },
    { id: 'tour' as Page, label: 'Tour Our Shop' },
    { id: 'gallery' as Page, label: 'Gallery' },
    { id: 'resources' as Page, label: 'Member Resources' },
    { id: 'board' as Page, label: 'Meet the Board' },
    { id: 'contact' as Page, label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-[var(--color-copper-900)] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo/Title */}
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <Logo className="w-12 h-12 flex-shrink-0" />
              <div>
                <h1 className="text-white">Bell Wood Club</h1>
                <p className="text-[var(--color-copper-200)] text-sm">Sun City, Arizona</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'text-[var(--color-copper-200)] border-b-2 border-[var(--color-copper-200)]'
                      : 'text-white hover:text-[var(--color-copper-200)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-[var(--color-copper-200)] p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[var(--color-copper-800)]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2 transition-colors ${
                    currentPage === item.id
                      ? 'bg-[var(--color-copper-900)] text-[var(--color-copper-200)]'
                      : 'text-white hover:bg-[var(--color-copper-900)]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-stone-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="mb-4">Bell Wood Club</h3>
              <p className="text-stone-300">
                A community of woodworking enthusiasts in Sun City, Arizona
              </p>
            </div>
            <div>
              <h3 className="mb-4">Quick Links</h3>
              <div className="space-y-2">
                {navItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block text-stone-300 hover:text-[var(--color-copper-200)] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4">Location</h3>
              <p className="text-stone-300">
                Sun City, Arizona
              </p>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; {new Date().getFullYear()} Bell Wood Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}