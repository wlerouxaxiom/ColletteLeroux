import { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const topics = ['Regulatory Shifts', 'Industry Trends', 'Best Practices', 'Risk & Hazards', 'Safety Culture'];

export default function Home() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Newsletter signup coming soon!');
    setEmail('');
  };

  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="fade-in">

      {/* HERO */}
      <section
        className="border-b-2 border-ink relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(26,26,24,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(26,26,24,0.04) 0%, transparent 50%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")
          `,
        }}
      >
        {/* Decorative ink rule at top of hero */}
        <div className="w-full h-1 bg-ink opacity-100" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

            <div className="lg:pr-8 flex flex-col justify-center">
              {/* Eyebrow label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-deep-red" />
                <span className="text-xs font-bold uppercase tracking-widest text-deep-red">
                  Health & Safety Intelligence
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-ink leading-none mb-6"
                style={{ letterSpacing: '-0.02em' }}>
                Where<br />
                Regulation<br />
                <span className="italic font-serif" style={{ color: '#2d2d2a' }}>Meets Reality</span>
              </h1>

              <p className="text-lg text-warm-gray leading-relaxed max-w-md">
                Field insights and regulatory analysis from 20+ years in Canadian manufacturing safety
              </p>

              {/* Decorative horizontal rule */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px bg-ink flex-1 max-w-16" />
                <span className="text-xs uppercase tracking-widest text-warm-gray font-medium">Collette Leroux</span>
                <div className="h-px bg-ink flex-1 max-w-16" />
              </div>
            </div>

            <div className="lg:pl-8 lg:border-l-2 lg:border-ink space-y-6 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-wider text-warm-gray">Featured</p>
              {featuredArticles.map((article, index) => (
                <div key={article.id}>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="block group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-serif font-bold text-light-gray group-hover:text-deep-red transition-colors flex-shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl font-bold text-ink group-hover:text-deep-red transition-colors mb-1 leading-tight">
                          {article.title}
                        </h3>
                        <p className="text-sm text-warm-gray">{article.category}</p>
                      </div>
                    </div>
                  </Link>
                  {index < featuredArticles.length - 1 && (
                    <div className="mt-6 border-t border-light-gray" />
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="border-b-2 border-ink">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <Link
                key={topic}
                to={`/articles?category=${encodeURIComponent(topic)}`}
                className="px-4 py-2 border-2 border-ink text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT ANALYSIS */}
      <section className="border-b-2 border-ink">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-12">Recent Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group"
              >
                <div className="mb-4">
                  <span className="text-6xl font-serif font-bold text-light-gray group-hover:text-deep-red transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-warm-gray">
                    {article.category}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-deep-red transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {article.excerpt}
                  </p>
                  <p className="text-sm text-warm-gray">{article.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="subscribe" className="bg-ink-navy text-paper border-b-2 border-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-3">The Briefing</h2>
            <p className="text-lg text-paper/80 mb-2">
              Regulatory updates, field insights, and industry analysis — written plainly, without the jargon.
            </p>
            <p className="text-sm text-paper/60">
              No frequency commitments. No sponsored content. Just signal.
            </p>
          </div>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@company.com"
              className="flex-1 px-4 py-3 bg-paper text-ink border-2 border-paper focus:outline-none focus:border-deep-red transition-colors"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-deep-red text-paper font-bold border-2 border-deep-red hover:bg-paper hover:text-deep-red transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">About Collette</h2>
            <div className="space-y-4 text-ink leading-relaxed">
              <p>
                Collette Leroux is a Senior Health & Safety Manager for a Canadian manufacturing firm with over 20 years of experience in industrial health and safety.
              </p>
              <p>
                She specializes in regulatory compliance (Ontario OHSA), risk management, hazard assessment, and building genuine safety culture on the shop floor — the kind that actually changes how people behave, not just what's posted on the wall.
              </p>
              <p>
                She has navigated Ministry of Labour audits, led complex incident investigations, and built safety programs from the ground up. Outside work, she is a proud mom of two boys, stays active through yoga and barre classes, and recharges with friends and family.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/about"
                className="inline-block px-6 py-3 border-2 border-ink text-ink font-bold hover:bg-ink hover:text-paper transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}