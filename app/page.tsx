"use client";

import Link from "next/link";
import { LanguageSwitcher } from "./components/language-switcher";
import { useI18n } from "./i18n";

const productImages = [
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=80",
  "/assets/supplement-performance.svg",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=700&q=80",
];

export default function Home() {
  const { dictionary } = useI18n();

  return (
    <>
      <div className="top-alert">
        <p>{dictionary.topAlert}</p>
        <button type="button">{dictionary.gotIt}</button>
      </div>

      <header className="site-header">
        <div className="header-main container">
          <a href="#" className="brand">
            <span className="brand-mark">◯</span>
            <div>
              <strong>Your Logo Here</strong>
              <small>{dictionary.brandSubtitle}</small>
            </div>
          </a>

          <form className="search-box">
            <input
              type="search"
              placeholder={dictionary.searchPlaceholder}
              aria-label={dictionary.searchPlaceholder}
            />
            <button type="submit" aria-label="Search">
              ⌕
            </button>
          </form>

          <div className="header-actions">
            <a href="#">👤 {dictionary.signIn}</a>
            <a href="#">♡ {dictionary.favorites}</a>
            <LanguageSwitcher />
          </div>
        </div>

        <nav className="header-nav">
          <div className="container nav-links">
            <a href="#">☰ {dictionary.categoriesLink}</a>
            <a href="#">🏬 {dictionary.stores}</a>
            <a href="#">🏷 {dictionary.brands}</a>
            <a href="#">% {dictionary.deals}</a>
            <a href="#" className="quote">
              {dictionary.dailyRate} <strong>$5.40</strong>
            </a>
          </div>
        </nav>
      </header>

      <main className="container home-layout">
        <aside className="categories-panel">
          <h2>{dictionary.categoriesTitle}</h2>
          <ul>
            {dictionary.categories.map((category) => (
              <li key={category}>• {category}</li>
            ))}
          </ul>
        </aside>

        <section className="hero">
          <article className="hero-banner">
            <div className="hero-copy">
              <span>{dictionary.heroLabel}</span>
              <h1>{dictionary.heroTitle}</h1>
              <p>{dictionary.heroDescription}</p>
              <div className="hero-actions">
                <a href="#">{dictionary.templateButton}</a>
                <Link href="/buy" className="buy-now-button">
                  {dictionary.buyNow}
                </Link>
              </div>
            </div>
          </article>

          <div className="partner-strip">
            <span>{dictionary.featuredBrands}</span>
            <p>{dictionary.featuredBrandsDescription}</p>
          </div>
        </section>
      </main>

      <section className="container featured-grid">
        <h2>{dictionary.weeklyHighlights}</h2>
        <div className="cards">
          {dictionary.featuredProducts.map((product, index) => (
            <article className="product-card" key={product.title}>
              <img src={productImages[index]} alt={product.title} />
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
          <p>{dictionary.footerDescription}</p>
        </div>
      </footer>
    </>
  );
}
