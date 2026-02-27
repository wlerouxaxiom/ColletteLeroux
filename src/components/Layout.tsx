import { Link, useLocation } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const linkedInUrl = 'https://www.linkedin.com/in/collette-leroux-0512a748/';

  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="font-serif text-xl md:text-2xl font-bold text-paper hover:text-deep-red transition-colors">
              Collette Leroux
            </Link>
            <div className="flex items-center gap-6 md:gap-8 text-sm">
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-deep-red' : 'text-paper/80 hover:text-paper'
                }`}
              >
                About
              </Link>
              <Link
                to="/articles"
                className={`font-medium transition-colors ${
                  isActive('/articles') ? 'text-deep-red' : 'text-paper/80 hover:text-paper'
                }`}
              >
                Articles
              </Link>
              <Link
                to="#subscribe"
                className="font-medium text-paper/80 hover:text-paper transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t-2 border-ink mt-20 bg-ink">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/about"
                className="text-paper/60 hover:text-paper transition-colors"
              >
                About
              </Link>
              <Link
                to="/articles"
                className="text-paper/60 hover:text-paper transition-colors"
              >
                Articles
              </Link>
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/60 hover:text-paper transition-colors flex items-center gap-1"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
            <p className="text-sm text-paper/40">
              © {new Date().getFullYear()} Collette Leroux
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}