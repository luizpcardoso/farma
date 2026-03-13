import Link from "next/link";

const categories = [
  "Imported Perfumes",
  "Supplements",
  "Tirzepatide",
  "Health & Wellness",
  "Best Sellers",
  "View All",
];

const featuredProducts = [
  {
    title: "Premium Perfume Kit",
    description: "Space for the main campaign product description.",
    price: "$299.90",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Performance Supplement",
    description: "Perfect for bundles, discounts, and monthly subscriptions.",
    price: "$159.90",
    image: "/assets/supplement-performance.svg",
  },
  {
    title: "Tirzepatide Line",
    description: "Visual example for advanced healthcare product categories.",
    price: "Price on request",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <>
      <div className="top-alert">
        <p>Commercial showcase example • customizable layout for your brand</p>
        <button type="button">GOT IT</button>
      </div>

      <header className="site-header">
        <div className="header-main container">
          <a href="#" className="brand">
            <span className="brand-mark">◯</span>
            <div>
              <strong>Your Logo Here</strong>
              <small>Premium Marketplace</small>
            </div>
          </a>

          <form className="search-box">
            <input
              type="search"
              placeholder="Search for perfumes, supplements, or health products"
              aria-label="Search products"
            />
            <button type="submit" aria-label="Search">
              ⌕
            </button>
          </form>

          <div className="header-actions">
            <a href="#">👤 Sign in</a>
            <a href="#">♡ Favorites</a>
          </div>
        </div>

        <nav className="header-nav">
          <div className="container nav-links">
            <a href="#">☰ Categories</a>
            <a href="#">🏬 Stores</a>
            <a href="#">🏷 Brands</a>
            <a href="#">% Deals</a>
            <a href="#" className="quote">
              Daily exchange rate: <strong>$5.40</strong>
            </a>
          </div>
        </nav>
      </header>

      <main className="container home-layout">
        <aside className="categories-panel">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>• {category}</li>
            ))}
          </ul>
        </aside>

        <section className="hero">
          <article className="hero-banner">
            <div className="hero-copy">
              <span>YOUR LOGO HERE</span>
              <h1>Ready structure to sell perfumes, supplements, and tirzepatide</h1>
              <p>
                A modern conversion-focused layout with promotional banners and
                product showcases for commercial presentations.
              </p>
              <div className="hero-actions">
                <a href="#">I want this template</a>
                <Link href="/buy" className="buy-now-button">
                  Buy now
                </Link>
              </div>
            </div>
          </article>

          <div className="partner-strip">
            <span>Featured brands</span>
            <p>Space for partner, distributor, and franchise logos.</p>
          </div>
        </section>
      </main>

      <section className="container featured-grid">
        <h2>Weekly Highlights</h2>
        <div className="cards">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <strong>Your Logo Here</strong>
          <p>Demo template for commercial proposals • 100% editable layout.</p>
        </div>
      </footer>
    </>
  );
}
