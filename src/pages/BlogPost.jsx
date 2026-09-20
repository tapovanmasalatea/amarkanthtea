import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Check, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import blogsData from '../data/blogs.json';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`blog-faq-item ${isOpen ? 'open' : ''}`}>
      <button className="blog-faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <ChevronDown size={18} className="faq-chevron" />
      </button>
      {isOpen && (
        <div className="blog-faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogsData.find(b => b.slug === slug || b.id === slug);

  if (!post) {
    return (
      <div className="blog-not-found container" style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p>The blog article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="btn-back-home" style={{ display: 'inline-block', marginTop: '20px', padding: '12px 25px', background: '#d50505', color: '#fff', borderRadius: '30px', textDecoration: 'none', fontWeight: '800' }}>
          Back to Blog List
        </Link>
      </div>
    );
  }

  const postSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.amarkanth.com/blog/${post.slug}`
      },
      "headline": post.title,
      "description": post.metaDescription,
      "image": `https://www.amarkanth.com${post.image}`,
      "author": {
        "@type": "Organization",
        "name": post.author,
        "url": "https://www.amarkanth.com"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Amarkanth Tea Group",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.amarkanth.com/amarkanth_bold_tea.webp"
        }
      },
      "datePublished": "2026-09-20",
      "dateModified": "2026-09-20"
    },
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
          "name": "Blog",
          "item": "https://www.amarkanth.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": post.title,
          "item": `https://www.amarkanth.com/blog/${post.slug}`
        }
      ]
    }
  ];

  // Related posts
  const relatedPosts = blogsData.filter(b => b.id !== post.id).slice(0, 2);

  return (
    <div className="blog-post-page">
      <SEO
        title={post.metaTitle || post.title}
        description={post.metaDescription}
        keywords={post.keywords}
        canonical={`https://www.amarkanth.com/blog/${post.slug}`}
        ogImage={post.image}
        schema={postSchemas}
      />

      {/* Post Hero Header */}
      <section className="post-header-section">
        <div className="container narrow">
          <button className="btn-back-link" onClick={() => navigate('/blog')}>
            <ArrowLeft size={16} /> Back to Blog
          </button>
          
          <div className="post-category-tag">{post.category}</div>
          <h1>{post.title}</h1>

          <div className="post-meta-bar">
            <span><User size={16} /> {post.author}</span>
            <span><Calendar size={16} /> {post.publishDate}</span>
            <span><Clock size={16} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Featured Hero Image */}
      <div className="container narrow">
        <div className="featured-image-box">
          <img src={post.image} alt={post.title} />
        </div>
      </div>

      {/* Main Content Area */}
      <section className="post-body-section">
        <div className="container narrow">
          <div className="article-content">
            {post.content.map((block, idx) => {
              if (block.type === 'paragraph') {
                return <p key={idx} dangerouslySetInnerHTML={{ __html: block.text }} />;
              }
              if (block.type === 'heading') {
                const Tag = `h${block.level || 2}`;
                return <Tag key={idx}>{block.text}</Tag>;
              }
              if (block.type === 'list') {
                return (
                  <ul key={idx} className="article-list">
                    {block.items.map((item, iIndex) => (
                      <li key={iIndex} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                );
              }
              if (block.type === 'table') {
                return (
                  <div key={idx} className="table-wrapper">
                    <table className="spec-table">
                      <thead>
                        <tr>
                          {block.headers.map((h, hIdx) => <th key={hIdx}>{h}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((r, rIdx) => (
                          <tr key={rIdx}>
                            {r.map((cell, cIdx) => <td key={cIdx}>{cell}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (block.type === 'faq') {
                return (
                  <div key={idx} className="blog-faq-block">
                    <h3>Frequently Asked Questions</h3>
                    {block.items.map((f, fIdx) => (
                      <FAQAccordion key={fIdx} question={f.question} answer={f.answer} />
                    ))}
                  </div>
                );
              }
              if (block.type === 'cta') {
                return (
                  <div key={idx} className="article-cta-box">
                    <h3>{block.heading}</h3>
                    <p>{block.text}</p>
                    <Link to={block.buttonLink} className="btn-cta-action">
                      {block.buttonText} <ArrowRight size={18} />
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* FSSAI Badge Footer */}
          <div className="fssai-blog-footer">
            <ShieldCheck size={28} className="fssai-icon" />
            <div>
              <strong>FSSAI License Certified: 11423870000024</strong>
              <p>100% Pure Assam Origin CTC Tea, processed & packed under strict food safety guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="related-articles-section">
          <div className="container narrow">
            <h3>Keep Reading & Exploring</h3>
            <div className="related-grid">
              {relatedPosts.map(rel => (
                <div key={rel.id} className="related-card">
                  <h4><Link to={`/blog/${rel.slug}`}>{rel.title}</Link></h4>
                  <p>{rel.excerpt.substring(0, 100)}...</p>
                  <Link to={`/blog/${rel.slug}`} className="read-link">Read Story →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-post-page {
          padding-top: 100px;
          background: #fff;
          color: #333;
          font-family: 'Inter', sans-serif;
        }

        .post-header-section {
          background: #fcfcfc;
          padding: 60px 0 30px;
          border-bottom: 1px solid #eee;
        }

        .btn-back-link {
          background: none;
          border: none;
          color: #777;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 20px;
          transition: 0.3s;
        }

        .btn-back-link:hover {
          color: var(--brand-red);
        }

        .post-category-tag {
          display: inline-block;
          background: var(--brand-red);
          color: #fff;
          padding: 4px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .post-header-section h1 {
          font-family: 'Outfit', sans-serif;
          font-size: 2.8rem;
          font-weight: 900;
          line-height: 1.25;
          margin-bottom: 20px;
          color: #111;
        }

        .post-meta-bar {
          display: flex;
          gap: 20px;
          font-size: 0.9rem;
          color: #777;
          font-weight: 600;
        }

        .post-meta-bar span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .featured-image-box {
          margin-top: 30px;
          border-radius: 20px;
          overflow: hidden;
          max-height: 420px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }

        .featured-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .post-body-section {
          padding: 50px 0 80px;
        }

        .article-content {
          font-size: 1.12rem;
          line-height: 1.85;
          color: #333;
        }

        .article-content p {
          margin-bottom: 25px;
        }

        .article-content h2 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.9rem;
          font-weight: 800;
          margin: 45px 0 20px;
          color: #111;
          border-left: 4px solid var(--brand-red);
          padding-left: 15px;
        }

        .article-content h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          margin: 30px 0 15px;
          color: #111;
        }

        .article-list {
          margin-bottom: 30px;
          padding-left: 20px;
        }

        .article-list li {
          margin-bottom: 12px;
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .table-wrapper {
          overflow-x: auto;
          margin: 30px 0;
        }

        .spec-table {
          width: 100%;
          border-collapse: collapse;
          background: #fafafa;
          border-radius: 12px;
          overflow: hidden;
          font-size: 0.95rem;
        }

        .spec-table th {
          background: var(--brand-red);
          color: white;
          text-align: left;
          padding: 14px 18px;
          font-weight: 800;
        }

        .spec-table td {
          padding: 14px 18px;
          border-bottom: 1px solid #eee;
          color: #444;
        }

        .blog-faq-block {
          background: #f9f9f9;
          border-radius: 16px;
          padding: 30px;
          margin: 40px 0;
        }

        .blog-faq-item {
          border-bottom: 1px solid #e5e5e5;
        }

        .blog-faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          background: none;
          border: none;
          font-size: 1.05rem;
          font-weight: 700;
          text-align: left;
          cursor: pointer;
          color: #111;
        }

        .faq-chevron {
          transition: 0.3s;
          color: var(--brand-red);
        }

        .blog-faq-item.open .faq-chevron {
          transform: rotate(180deg);
        }

        .blog-faq-answer {
          padding-bottom: 16px;
          color: #555;
          line-height: 1.7;
        }

        .article-cta-box {
          background: linear-gradient(135deg, #111 0%, #2a0000 100%);
          color: white;
          padding: 40px;
          border-radius: 20px;
          margin: 50px 0;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .article-cta-box h3 {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 10px;
        }

        .article-cta-box p {
          color: #ddd;
          font-size: 1.05rem;
          margin-bottom: 25px;
        }

        .btn-cta-action {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--brand-red);
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 800;
          text-decoration: none;
          transition: 0.3s;
        }

        .btn-cta-action:hover {
          background: #ff1a1a;
          transform: translateY(-2px);
        }

        .fssai-blog-footer {
          display: flex;
          align-items: center;
          gap: 20px;
          background: #f0fff4;
          border: 1.5px solid #2e7d32;
          border-radius: 14px;
          padding: 20px 25px;
          margin-top: 40px;
        }

        .fssai-icon {
          color: #2e7d32;
          flex-shrink: 0;
        }

        .fssai-blog-footer strong {
          color: #1b5e20;
          font-size: 1rem;
        }

        .fssai-blog-footer p {
          margin: 4px 0 0;
          font-size: 0.9rem;
          color: #388e3c;
        }

        .related-articles-section {
          background: #fcfcfc;
          padding: 60px 0;
          border-top: 1px solid #eee;
        }

        .related-articles-section h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 30px;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        .related-card {
          background: white;
          padding: 25px;
          border-radius: 14px;
          border: 1px solid #eee;
        }

        .related-card h4 {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .related-card h4 a {
          text-decoration: none;
          color: #111;
        }

        .related-card h4 a:hover {
          color: var(--brand-red);
        }

        .related-card p {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 15px;
        }

        .read-link {
          color: var(--brand-red);
          font-weight: 700;
          font-size: 0.85rem;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .post-header-section h1 { font-size: 2rem; }
          .related-grid { grid-template-columns: 1fr; }
          .article-cta-box { padding: 30px 20px; }
        }
      `}} />
    </div>
  );
};

export default BlogPost;
