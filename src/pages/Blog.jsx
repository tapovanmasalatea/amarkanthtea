import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import blogsData from '../data/blogs.json';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Tea Knowledge', 'Recipes & Brewing', 'Wholesale & Business', 'Tea Care'];

  const filteredBlogs = blogsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.keywords.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const blogSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.amarkanth.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog & Tea Knowledge",
          "item": "https://www.amarkanth.com/blog"
        }
      ]
    }
  ];

  return (
    <div className="blog-index-page">
      <SEO
        title="Chai Knowledge & CTC Tea Guides | Amarkanth Blog"
        description="Explore tea guides, kadak chai recipes, CTC tea brewing tips, wholesale buyer checklists, and tea storage guides from Amarkanth Tea Group."
        keywords="CTC tea blog, kadak chai recipe, Assam tea guides, tea wholesale checklist, how to brew chai"
        canonical="https://www.amarkanth.com/blog"
        schema={blogSchemas}
      />

      {/* Header Banner */}
      <section className="blog-header-section">
        <div className="container">
          <p className="subtitle">Chai Knowledge & Guides</p>
          <h1>The Amarkanth <span className="text-brand-red">Tea Blog</span></h1>
          <p className="header-desc">
            Discover expert brewing guides, CTC tea processing insights, wholesale checklists, and recipes to elevate your chai rituals.
          </p>

          {/* Search & Category Filter */}
          <div className="blog-filter-bar">
            <div className="search-box">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                placeholder="Search CTC tea, kadak chai recipes, wholesale guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="category-pills">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`pill-btn ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="blog-grid-section">
        <div className="container">
          {filteredBlogs.length === 0 ? (
            <div className="no-results">
              <BookOpen size={48} />
              <h3>No articles found matching "{searchTerm}"</h3>
              <button className="btn-reset" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                Reset Search
              </button>
            </div>
          ) : (
            <div className="blog-cards-grid">
              {filteredBlogs.map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="card-image-box">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="category-badge">{post.category}</span>
                  </div>
                  <div className="card-body">
                    <div className="card-meta">
                      <span><Calendar size={14} /> {post.publishDate}</span>
                      <span><Clock size={14} /> {post.readTime}</span>
                    </div>
                    <h2>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="card-excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="read-more-link">
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-index-page {
          padding-top: 100px;
          background: #fff;
          color: #333;
          font-family: 'Inter', sans-serif;
        }

        .blog-header-section {
          background: #fcfcfc;
          padding: 80px 0 50px;
          text-align: center;
          border-bottom: 1px solid #eee;
        }

        .subtitle {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 800;
          color: var(--brand-red);
          margin-bottom: 10px;
        }

        .blog-header-section h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 15px;
          color: #111;
        }

        .header-desc {
          font-size: 1.15rem;
          color: #666;
          max-width: 650px;
          margin: 0 auto 40px;
          line-height: 1.7;
        }

        .blog-filter-bar {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }

        .search-box {
          position: relative;
          width: 100%;
          max-width: 550px;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .search-box input {
          width: 100%;
          padding: 16px 20px 16px 50px;
          border-radius: 50px;
          border: 1.5px solid #ddd;
          font-size: 1rem;
          outline: none;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }

        .search-box input:focus {
          border-color: var(--brand-red);
          box-shadow: 0 6px 20px rgba(213, 5, 5, 0.1);
        }

        .category-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .pill-btn {
          padding: 8px 18px;
          border-radius: 30px;
          border: 1px solid #e0e0e0;
          background: #fff;
          font-size: 0.9rem;
          font-weight: 700;
          color: #555;
          cursor: pointer;
          transition: 0.3s;
        }

        .pill-btn.active, .pill-btn:hover {
          background: var(--brand-red);
          color: #fff;
          border-color: var(--brand-red);
        }

        .blog-grid-section {
          padding: 70px 0 100px;
        }

        .blog-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .blog-card {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #eee;
          overflow: hidden;
          transition: 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
          border-color: var(--brand-red);
        }

        .card-image-box {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .card-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: 0.5s ease;
        }

        .blog-card:hover .card-image-box img {
          transform: scale(1.06);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: rgba(17, 17, 17, 0.85);
          color: #fff;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          backdrop-filter: blur(5px);
        }

        .card-body {
          padding: 25px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-meta {
          display: flex;
          gap: 15px;
          font-size: 0.82rem;
          color: #888;
          margin-bottom: 12px;
          font-weight: 600;
        }

        .card-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .card-body h2 {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 12px;
          color: #111;
        }

        .card-body h2 a {
          text-decoration: none;
          color: inherit;
          transition: 0.3s;
        }

        .card-body h2 a:hover {
          color: var(--brand-red);
        }

        .card-excerpt {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
        }

        .read-more-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--brand-red);
          font-weight: 800;
          font-size: 0.9rem;
          text-decoration: none;
          transition: 0.3s;
        }

        .read-more-link:hover {
          gap: 12px;
        }

        .no-results {
          text-align: center;
          padding: 60px 0;
          color: #777;
        }

        .no-results h3 {
          margin: 20px 0;
          font-size: 1.4rem;
        }

        .btn-reset {
          background: var(--brand-red);
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .blog-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .blog-header-section h1 { font-size: 2.3rem; }
          .blog-cards-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default Blog;
