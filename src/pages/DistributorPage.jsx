import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  TrendingUp, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  ChevronRight, 
  MessageCircle, 
  Mail, 
  Globe, 
  Star,
  Plus,
  Minus,
  ArrowRight,
  Package,
  Award,
  Users
} from 'lucide-react';
import logo from '../assets/logo.webp';

const DistributorPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { icon: <TrendingUp size={24} />, label: "98%", sub: "Reorder Rate" },
    { icon: <Star size={24} />, label: "2x", sub: "Margin Premium" },
    { icon: <Clock size={24} />, label: "48hr", sub: "Dispatch SLA" },
    { icon: <MapPin size={24} />, label: "12+", sub: "States Served" },
    { icon: <ShieldCheck size={24} />, label: "100%", sub: "Quality Guarantee" }
  ];

  const benefits = [
    {
      title: "Premium Shelf Presence",
      desc: "Our packaging is designed to be the most premium product on any shelf. Customers pick it up. Retailers notice it. It sells itself.",
      icon: <Package />
    },
    {
      title: "Dedicated Account Manager",
      desc: "Every partner gets a single point of contact who knows your business, your market, and your targets. No call centres. Real people.",
      icon: <Users />
    },
    {
      title: "Marketing Support Kit",
      desc: "Point-of-sale materials, digital assets, product brochures and brand guidelines — everything you need to sell with confidence.",
      icon: <Award />
    },
    {
      title: "Fast & Reliable Dispatch",
      desc: "Nitrogen-sealed, freshness-protected packs dispatched in 48 hours. Track your orders in real time with our partner portal.",
      icon: <Clock />
    },
    {
      title: "Quality Guarantee",
      desc: "Full replacement for any quality issue, no questions asked. Our reputation is your security. We back every gram we sell.",
      icon: <ShieldCheck />
    },
    {
      title: "Co-branding Opportunities",
      desc: "For high-volume partners — bespoke co-branded packs, private labelling, and exclusive territory rights. Grow big with us.",
      icon: <Handshake />
    }
  ];

  const tiers = [
    {
      name: "Starter",
      moq: "25 kg / month",
      features: [
        "Both Amarkanth & Tapovan brands",
        "Flexible pack sizes (250g, 500g, 1kg)",
        "Standard wholesale pricing",
        "WhatsApp order support",
        "Digital marketing assets",
        "48-hour dispatch SLA"
      ],
      cta: "Apply as Starter",
      popular: false
    },
    {
      name: "Gold",
      moq: "100 kg / month",
      features: [
        "All Starter benefits",
        "Preferential wholesale pricing (8–12% better)",
        "Dedicated account manager",
        "Physical POS & branding materials",
        "Priority dispatch & inventory reservation",
        "Quarterly business review",
        "Co-branding on select SKUs"
      ],
      cta: "Apply as Gold Partner",
      popular: true
    },
    {
      name: "Elite",
      moq: "500 kg / month",
      features: [
        "All Gold benefits",
        "Maximum wholesale discount (15–20%)",
        "Exclusive territory rights (city / district)",
        "Private label / co-branded packing",
        "Direct founder engagement",
        "Early access to new SKUs",
        "Custom marketing campaigns"
      ],
      cta: "Apply as Elite Partner",
      popular: false
    }
  ];

  const faqs = [
    { q: "What is the minimum order quantity to get started?", a: "Our Starter tier begins at 25kg per month, which can be a mix of both Amarkanth and Tapovan brands across different pack sizes." },
    { q: "Do you offer exclusive territory rights?", a: "Exclusive territory rights are offered to our Elite partners who commit to higher volumes (500kg+) in specific city or district clusters." },
    { q: "Can I get a sample before placing a bulk order?", a: "Yes, we send a curated sample kit featuring both brands and all key SKUs so you can experience the quality before committing." },
    { q: "What payment terms do you offer?", a: "For new partners, we operate on a prepaid basis. Established Gold and Elite partners may qualify for credit terms based on business history." },
    { q: "What happens if there is a quality issue?", a: "We have a full replacement policy for any verified quality concern — no questions asked. Every batch carries a lot number traceable to source garden and processing date." }
  ];

  const channels = [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Blinkit", logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/Blinkit_logo.svg" },
    { name: "Zepto", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Zepto_Logo.svg" },
    { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flipkart_logo.webp" }
  ];

  return (
    <div className="distributor-page">
      {/* Hero Section */}
      <section className="dist-hero">
        <div className="dist-container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <span className="dist-tag">B2B Partnership Programme</span>
            <h1 className="dist-title">Become<br/>a Distributor</h1>
            <p className="dist-lead">
              Join the network that is redefining premium chai across India. Partner with two distinct brands — 
              one bold, one mindful — and capture a market hungry for quality.
            </p>
            <div className="hero-btns">
              <button className="btn-primary-dist">Apply Now <ArrowRight size={20} /></button>
              <button className="btn-secondary-dist">View Partner Tiers</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="stats-section">
        <div className="dist-container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-val">{stat.label}</div>
                <div className="stat-label">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="why-partner">
        <div className="dist-container">
          <div className="section-header">
            <h2 className="section-title">Why Partner With Us</h2>
            <div className="title-accent">Built for Partners Who Grow</div>
            <p className="section-desc">
              We treat every distributor as a long-term business partner, not a transaction. 
              Our partner programme is designed with one goal — making your business more profitable.
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="tiers-section">
        <div className="dist-container">
          <div className="section-header centered">
            <h2 className="section-title">Partnership Tiers</h2>
            <div className="title-accent">Choose Your Level</div>
          </div>

          <div className="tiers-grid">
            {tiers.map((tier, i) => (
              <div key={i} className={`tier-card ${tier.popular ? 'popular' : ''}`}>
                {tier.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-moq">MOQ · {tier.moq}</div>
                <ul className="tier-list">
                  {tier.features.map((feat, j) => (
                    <li key={j}><ChevronRight size={16} /> {feat}</li>
                  ))}
                </ul>
                <button className={`tier-btn ${tier.popular ? 'btn-gold' : 'btn-outline'}`}>
                  {tier.cta} <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Channels */}
      <section className="channels-section">
        <div className="dist-container">
          <div className="section-header centered">
            <p className="small-label">Our Retail & Digital Reach</p>
            <h2 className="section-title">Trusted by Market Leaders</h2>
          </div>
          <div className="channels-grid">
            {channels.map((ch, i) => (
              <div key={i} className="channel-box">
                <img src={ch.logo} alt={ch.name} className="channel-logo" />
                <span>{ch.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <div className="dist-container">
          <div className="section-header">
            <h2 className="section-title">How It Works</h2>
            <div className="title-accent">From Enquiry to First Order</div>
          </div>
          
          <div className="steps-container">
            {[
              { id: "01", t: "Submit Enquiry", d: "Fill the form below or reach us on WhatsApp with your details." },
              { id: "02", t: "Discovery Call", d: "Our team calls within 24 hours to understand your market and goals." },
              { id: "03", t: "Sample Pack", d: "We send a curated sample kit so you taste before you commit." },
              { id: "04", t: "Pricing & Agreement", d: "Clear wholesale pricing, terms, and a simple one-page agreement." },
              { id: "05", t: "First Delivery", d: "Your first order ships within 48 hours of payment. Freshness-sealed." }
            ].map((step, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{step.id}</div>
                <div className="step-info">
                  <h4>{step.t}</h4>
                  <p>{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section className="application-section" id="apply-form">
        <div className="dist-container">
          <div className="form-wrapper">
            <div className="form-info">
              <h2 className="form-title">Partner Enquiry</h2>
              <div className="title-accent">Let's Start a Conversation</div>
              <p>Fill in your details and we'll get back within 24 hours. No commitments until you've tasted the product.</p>
              
              <div className="contact-links">
                <div className="contact-item">
                  <MessageCircle className="icon" />
                  <div>
                    <span>WhatsApp</span>
                    <p>+91 98XXX XXXXX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="icon" />
                  <div>
                    <span>Email</span>
                    <p>partners@amarkanth.in</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Globe className="icon" />
                  <div>
                    <span>Based In</span>
                    <p>Indore, Madhya Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="dist-form">
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" placeholder="Your company / store name" />
                </div>
                <div className="form-group">
                  <label>Phone / WhatsApp *</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@business.com" />
                </div>
                <div className="form-group">
                  <label>City / Location *</label>
                  <input type="text" placeholder="e.g. Bhopal, Delhi, Surat" required />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <select>
                    <option>Select state</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Gujarat</option>
                    <option>Delhi</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Business Type *</label>
                  <select required>
                    <option>Select your business type</option>
                    <option>Retailer / Supermarket</option>
                    <option>Wholesale Distributor</option>
                    <option>HoReCa / Cafe</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Interested In</label>
                  <select>
                    <option>Both Amarkanth & Tapovan</option>
                    <option>Amarkanth (Bold)</option>
                    <option>Tapovan (Mindful)</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Estimated Monthly Volume *</label>
                  <select required>
                    <option>Select approximate volume</option>
                    <option>25kg - 100kg</option>
                    <option>100kg - 500kg</option>
                    <option>Above 500kg</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Tell Us About Your Business</label>
                  <textarea placeholder="Brief description of your business, your current tea brands if any..." rows="4"></textarea>
                </div>
              </div>
              
              <div className="form-consent">
                <input type="checkbox" id="consent" required />
                <label htmlFor="consent">
                  I agree to be contacted by the Amarkanth & Tapovan team regarding this partnership enquiry.
                </label>
              </div>

              <button type="submit" className="btn-submit-dist">
                Submit Partnership Application <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="dist-container">
          <div className="section-header centered">
            <h2 className="section-title">Common Questions</h2>
            <div className="title-accent">Everything You Need to Know</div>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${activeFaq === i ? 'active' : ''}`}>
                <button className="faq-toggle" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <div className="faq-ans">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .distributor-page {
          padding-top: 100px;
          background: #fff;
          color: #333;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          --dist-red: #d50505;
        }

        .dist-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .dist-tag {
          display: inline-block;
          background: #fff5f5;
          color: var(--dist-red);
          padding: 8px 16px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .dist-hero {
          padding: 100px 0;
          background: linear-gradient(to bottom, #fff, #fff9f9);
          text-align: center;
        }

        .dist-title {
          font-family: 'Outfit', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -3px;
          color: #1a1a1a;
          margin-bottom: 30px;
        }

        .dist-lead {
          font-size: 1.4rem;
          color: #555;
          max-width: 700px;
          margin: 0 auto 50px;
          line-height: 1.5;
        }

        .hero-btns {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .btn-primary-dist {
          background: var(--dist-red);
          color: #fff;
          border: none;
          padding: 18px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-primary-dist:hover { background: #b00404; transform: translateY(-3px); }

        .btn-secondary-dist {
          background: none;
          border: 2px solid #eee;
          padding: 18px 35px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-secondary-dist:hover { border-color: var(--dist-red); color: var(--dist-red); }

        .stats-section {
          padding: 60px 0;
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 30px;
        }

        .stat-card {
          text-align: center;
        }

        .stat-icon {
          color: var(--dist-red);
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
        }

        .stat-val {
          font-size: 2.2rem;
          font-weight: 900;
          font-family: 'Outfit', sans-serif;
          color: #111;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #888;
          font-weight: 600;
          text-transform: uppercase;
        }

        .why-partner { padding: 120px 0; }

        .section-header { margin-bottom: 80px; }
        .section-header.centered { text-align: center; }

        .section-title {
          font-family: 'Outfit', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          color: #111;
          margin-bottom: 10px;
        }

        .title-accent {
          font-family: 'Dancing Script', cursive;
          font-size: 2.5rem;
          color: var(--dist-red);
          margin-bottom: 25px;
        }

        .section-desc { font-size: 1.2rem; color: #666; max-width: 600px; line-height: 1.6; }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .benefit-card {
          padding: 40px;
          background: #fdfdfd;
          border: 1px solid #f0f0f0;
          border-radius: 20px;
          transition: 0.3s;
        }

        .benefit-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.05); }

        .benefit-icon {
          width: 50px;
          height: 50px;
          background: #fff5f5;
          color: var(--dist-red);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .benefit-card h3 { font-size: 1.4rem; font-weight: 800; margin-bottom: 15px; color: #111; }
        .benefit-card p { font-size: 1rem; color: #666; line-height: 1.6; }

        .tiers-section { padding: 120px 0; background: #fdf8f0; }

        .tiers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .tier-card {
          background: #fff;
          padding: 50px 40px;
          border-radius: 30px;
          border: 1px solid #eee;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .tier-card.popular {
          border: 2px solid var(--dist-red);
          box-shadow: 0 25px 50px rgba(213, 5, 5, 0.1);
          transform: scale(1.05);
          z-index: 2;
        }

        .popular-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--dist-red);
          color: #fff;
          padding: 6px 15px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .tier-name { font-size: 2rem; font-weight: 900; margin-bottom: 5px; font-family: 'Outfit', sans-serif; }
        .tier-moq { font-size: 1rem; color: var(--dist-red); font-weight: 700; margin-bottom: 30px; }

        .tier-list { list-style: none; padding: 0; margin: 0 0 40px; flex: 1; }
        .tier-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 15px;
          color: #555;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        .tier-list li svg { color: var(--dist-red); flex-shrink: 0; margin-top: 2px; }

        .tier-btn {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.3s;
        }

        .btn-outline { background: none; border: 2px solid #eee; }
        .btn-outline:hover { border-color: var(--dist-red); color: var(--dist-red); }
        
        .btn-gold { background: var(--dist-red); color: #fff; border: none; }
        .btn-gold:hover { background: #b00404; }

        .channels-section { padding: 80px 0; background: #fff; border-bottom: 1px solid #f0f0f0; }
        .small-label { font-size: 0.8rem; font-weight: 800; color: var(--dist-red); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px; }
        .channels-grid { display: flex; justify-content: center; align-items: center; gap: 60px; flex-wrap: wrap; margin-top: 40px; opacity: 0.6; filter: grayscale(1); }
        .channel-box { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .channel-logo { height: 35px; width: auto; }
        .channel-box span { font-size: 0.75rem; font-weight: 700; color: #888; }

        .how-it-works { padding: 120px 0; background: #fff; }

        .steps-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          margin-top: 60px;
          position: relative;
        }

        .step-item { position: relative; }
        .step-num { 
          font-size: 3rem; 
          font-weight: 900; 
          color: #f0f0f0; 
          font-family: 'Outfit', sans-serif;
          margin-bottom: -20px;
          transition: 0.3s;
        }
        .step-item:hover .step-num { color: #fff5f5; transform: translateY(-5px); }
        .step-info h4 { font-size: 1.2rem; font-weight: 800; margin-bottom: 10px; color: #111; }
        .step-info p { font-size: 0.9rem; color: #666; line-height: 1.5; }

        .application-section { padding: 120px 0; background: #fafafa; }
        .form-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 80px;
          background: #fff;
          border-radius: 40px;
          padding: 80px;
          box-shadow: 0 40px 100px rgba(0,0,0,0.05);
        }

        .form-title { font-family: 'Outfit', sans-serif; font-size: 3rem; font-weight: 900; margin-bottom: 10px; }
        .form-info p { font-size: 1.1rem; color: #666; line-height: 1.6; margin-bottom: 40px; }

        .contact-links { display: flex; flex-direction: column; gap: 30px; }
        .contact-item { display: flex; align-items: center; gap: 20px; }
        .contact-item .icon { width: 50px; height: 50px; background: #fff5f5; color: var(--dist-red); padding: 12px; border-radius: 12px; }
        .contact-item span { font-size: 0.8rem; font-weight: 800; color: #aaa; text-transform: uppercase; }
        .contact-item p { font-size: 1.1rem; font-weight: 700; color: #333; margin: 0; }

        .dist-form { display: flex; flex-direction: column; gap: 30px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; }
        .form-group.full-width { grid-column: span 2; }
        .form-group label { display: block; font-size: 0.9rem; font-weight: 700; color: #444; margin-bottom: 10px; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 15px 20px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fdfdfd;
          font-family: inherit;
          font-size: 1rem;
          transition: 0.3s;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: var(--dist-red);
          outline: none;
          background: #fff;
        }

        .form-consent { display: flex; align-items: flex-start; gap: 12px; }
        .form-consent input { margin-top: 4px; }
        .form-consent label { font-size: 0.9rem; color: #666; line-height: 1.5; }

        .btn-submit-dist {
          background: var(--dist-red);
          color: #fff;
          border: none;
          padding: 20px;
          border-radius: 15px;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn-submit-dist:hover { background: #b00404; transform: translateY(-3px); }

        .faq-section { padding: 120px 0; background: #fff; }
        .faq-list { max-width: 800px; margin: 60px auto 0; }
        .faq-item { border-bottom: 1px solid #eee; }
        .faq-toggle {
          width: 100%;
          padding: 30px 0;
          background: none;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 1.2rem;
          font-weight: 700;
          color: #111;
          text-align: left;
        }
        .faq-ans {
          max-height: 0;
          overflow: hidden;
          transition: 0.4s ease-out;
        }
        .faq-item.active .faq-ans { max-height: 200px; padding-bottom: 30px; }
        .faq-ans p { color: #666; line-height: 1.6; font-size: 1.1rem; }

        @media (max-width: 1100px) {
          .dist-title { font-size: 4rem; }
          .form-wrapper { grid-template-columns: 1fr; padding: 60px 40px; }
          .benefits-grid { grid-template-columns: repeat(2, 1fr); }
          .steps-container { grid-template-columns: repeat(3, 1fr); gap: 40px; }
          .tiers-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
          .tier-card.popular { transform: scale(1); }
        }

        @media (max-width: 768px) {
          .dist-title { font-size: 3rem; }
          .dist-lead { font-size: 1.1rem; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .benefits-grid { grid-template-columns: 1fr; }
          .steps-container { grid-template-columns: 1fr; gap: 30px; }
          .section-title { font-size: 2.5rem; }
          .hero-btns { flex-direction: column; }
          .btn-primary-dist, .btn-secondary-dist { width: 100%; justify-content: center; }
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full-width { grid-column: span 1; }
          .form-wrapper { padding: 40px 25px; }
          .channels-grid { gap: 30px; }
        }
      `}} />
    </div>
  );
};

export default DistributorPage;
