import { useParams, Link, Navigate } from 'react-router-dom';
import { User, Linkedin } from 'lucide-react';
import { articles } from '../data/articles';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id)
    .slice(0, 2);

  return (
    <div className="fade-in">
      <article className="border-b-2 border-ink">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <header className="mb-12 border-b-2 border-ink pb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-warm-gray mb-4">
              {article.category}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-warm-gray">
              <span className="font-bold">Collette LeRoux</span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="article-body text-ink">
            {article.body.map((block, index) => {
              if (block.type === 'paragraph') {
                return <p key={index}>{block.text}</p>;
              } else if (block.type === 'heading') {
                return <h2 key={index}>{block.text}</h2>;
              } else if (block.type === 'subheading') {
                return <h3 key={index}>{block.text}</h3>;
              } else if (block.type === 'list') {
                return (
                  <ul key={index}>
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="mt-16 pt-12 border-t-2 border-ink">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-20 h-20 border-2 border-ink bg-light-gray flex items-center justify-center">
                <User className="text-warm-gray" size={32} />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink mb-2">Collette LeRoux</h3>
                <p className="text-warm-gray mb-4 leading-relaxed">
                  Senior Health & Safety Manager with 20+ years in Canadian manufacturing.
                  Regulatory compliance, risk management, and building safety cultures that work.
                </p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-navy hover:text-deep-red transition-colors font-bold text-sm"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-light-gray/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-12">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/articles/${relatedArticle.slug}`}
                  className="group"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-warm-gray mb-3">
                    {relatedArticle.category}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink group-hover:text-deep-red transition-colors mb-3 leading-tight">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed mb-4">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-sm text-warm-gray">
                    <span>{relatedArticle.date}</span>
                    <span>·</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
