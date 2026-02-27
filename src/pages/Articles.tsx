import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { articles, getCategoryColor } from '../data/articles';

const categories = ['All', 'Regulatory Shifts', 'Industry Trends', 'Best Practices', 'Risk & Hazards', 'Safety Culture'];

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && categories.includes(category)) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="border-b-2 border-ink pb-8 mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-8">All Articles</h1>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 border-2 text-sm font-bold transition-colors ${
                  activeCategory === category
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-paper text-ink border-ink hover:bg-ink hover:text-paper'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {filteredArticles.map((article, index) => (
            <article key={article.id} className="border-b-2 border-light-gray pb-12 last:border-0">
              <Link to={`/articles/${article.slug}`} className="block group">
                <div className="flex items-start gap-6">
                  <span className="text-5xl md:text-6xl font-serif font-bold text-light-gray group-hover:text-deep-red transition-colors flex-shrink-0 hidden sm:block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-warm-gray mb-3">
                      {article.category}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink group-hover:text-deep-red transition-colors mb-4 leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-lg text-warm-gray leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-warm-gray">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
