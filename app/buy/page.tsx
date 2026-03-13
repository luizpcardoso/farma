export default function BuyPage() {
  return (
    <main className="order-page container">
      <section className="order-card">
        <h1>Complete your order</h1>
        <p>Fill in the details below and send your request.</p>

        <form className="order-form">
          <label htmlFor="customer-name">Name</label>
          <input id="customer-name" name="name" type="text" required />

          <label htmlFor="customer-phone">Phone</label>
          <input id="customer-phone" name="phone" type="tel" required />

          <label htmlFor="order-quantity">Quantity</label>
          <input id="order-quantity" name="quantity" type="number" min="1" required />

          <label htmlFor="customer-email">Email</label>
          <input id="customer-email" name="email" type="email" required />

          <button type="submit">Send order</button>
        </form>
      </section>
    </main>
  );
}
