"use client";

import { LanguageSwitcher } from "../components/language-switcher";
import { useI18n } from "../i18n";

export default function BuyPage() {
  const { dictionary } = useI18n();

  return (
    <main className="order-page container">
      <div className="buy-page-language">
        <LanguageSwitcher />
      </div>

      <section className="order-card">
        <h1>{dictionary.buyPageTitle}</h1>
        <p>{dictionary.buyPageDescription}</p>

        <form className="order-form">
          <label htmlFor="customer-name">{dictionary.formName}</label>
          <input id="customer-name" name="name" type="text" required />

          <label htmlFor="customer-phone">{dictionary.formPhone}</label>
          <input id="customer-phone" name="phone" type="tel" required />

          <label htmlFor="order-quantity">{dictionary.formQuantity}</label>
          <input id="order-quantity" name="quantity" type="number" min="1" required />

          <label htmlFor="customer-email">{dictionary.formEmail}</label>
          <input id="customer-email" name="email" type="email" required />

          <button type="submit">{dictionary.sendOrder}</button>
        </form>
      </section>
    </main>
  );
}
