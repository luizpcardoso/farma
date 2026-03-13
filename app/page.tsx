/* eslint-disable @typescript-eslint/no-explicit-any */
// app/page.tsx
import Image from "next/image";

const brandName = "Verdi Market";

const categories = [
  { name: "Proteínas", hint: "whey, barras, snacks", icon: "🥛" },
  { name: "Orgânicos", hint: "frutas, legumes, hortifruti", icon: "🥬" },
  { name: "Sem Glúten", hint: "pães, massas, mixes", icon: "🌾" },
  { name: "Sem Lactose", hint: "leites, iogurtes, queijos", icon: "🥣" },
  { name: "Low Carb", hint: "farinhas, doces, refeições", icon: "🥑" },
  { name: "Vegano", hint: "plant-based, tofu, grãos", icon: "🌱" },
  { name: "Suplementos", hint: "vitaminas, creatina", icon: "💊" },
  { name: "Bebidas Fit", hint: "kombucha, chás, água", icon: "🫖" },
];

const promoProducts = [
  {
    name: "Granola Premium 500g",
    brand: "Casa do Cereal",
    price: 24.9,
    oldPrice: 32.9,
    tag: "20% OFF",
    rating: 4.8,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pasta de Amendoim 1kg",
    brand: "Pure Nuts",
    price: 39.9,
    oldPrice: 52.9,
    tag: "Mais vendido",
    rating: 4.9,
    reviews: 1240,
    image:
      "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mix de Castanhas 300g",
    brand: "Nativa",
    price: 29.9,
    oldPrice: 34.9,
    tag: "Entrega rápida",
    rating: 4.7,
    reviews: 540,
    image:
      "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Kombucha 355ml (kit)",
    brand: "Fermenta",
    price: 21.9,
    oldPrice: 27.9,
    tag: "Novidade",
    rating: 4.6,
    reviews: 188,
    image:
      "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Chocolate 70% Zero Açúcar",
    brand: "Cacao+",
    price: 18.9,
    oldPrice: 23.9,
    tag: "Zero açúcar",
    rating: 4.8,
    reviews: 420,
    image:
      "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Pão Proteico (mix 400g)",
    brand: "Fit Bakery",
    price: 17.9,
    oldPrice: 22.9,
    tag: "Sem glúten",
    rating: 4.5,
    reviews: 205,
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=80",
  },
];

const collections = [
  {
    title: "Kit Semana Leve",
    desc: "Seleção pronta pra rotina — snacks + bebidas + básicos.",
    image:
      "https://images.unsplash.com/photo-1542444459-db47a04710d0?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Top Proteínas",
    desc: "Whey, creatina, barrinhas e mais em ofertas do dia.",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Hortifruti Orgânico",
    desc: "Frescor de feira com padrão premium e rastreabilidade.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80",
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  const total = 5;
  return (
    <div className="flex items-center gap-1" aria-label={`Avaliação ${value} de 5`}>
      {Array.from({ length: total }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= full;
        const half = !filled && hasHalf && idx === full + 1;
        return (
          <span
            key={i}
            className={cn(
              "text-[12px] leading-none",
              filled || half ? "text-emerald-600" : "text-zinc-300"
            )}
          >
            {filled ? "★" : half ? "⯨" : "☆"}
          </span>
        );
      })}
    </div>
  );
}

function Icon({
  name,
  className,
}: {
  name:
    | "search"
    | "cart"
    | "user"
    | "truck"
    | "shield"
    | "leaf"
    | "arrow"
    | "heart"
    | "spark";
  className?: string;
}) {
  const common = "inline-block align-middle";
  switch (name) {
    case "search":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M10.5 19a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16.8 16.8 22 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cart":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6 6h15l-2 9H8L6 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M6 6 5 3H2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            fill="currentColor"
          />
        </svg>
      );
    case "user":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M4 21a8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "truck":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6h11v10H3V6Z" stroke="currentColor" strokeWidth="2" />
          <path d="M14 9h4l3 3v4h-7V9Z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            fill="currentColor"
          />
        </svg>
      );
    case "shield":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2 20 6v7c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2 2 4-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20 4c-7 0-12 5-12 12 0 2 1 4 3 4 7 0 12-5 12-12 0-2-1-4-3-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M8 16c4-1 7-4 8-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M5 12h13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "heart":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s-7-4.6-9.2-9A5.6 5.6 0 0 1 12 6.4 5.6 5.6 0 0 1 21.2 12C19 16.4 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg className={cn(common, className)} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 2l1.2 4.8L18 8l-4.8 1.2L12 14l-1.2-4.8L6 8l4.8-1.2L12 2Z" fill="currentColor" />
          <path d="M20 13l.7 2.8L23 16l-2.3.2L20 19l-.7-2.8L17 16l2.3-.2L20 13Z" fill="currentColor" />
        </svg>
      );
  }
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Top glow + subtle texture */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute top-40 left-1/3 h-[420px] w-[620px] rounded-full bg-lime-200/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(24,24,27,0.05)_1px,transparent_0)] [background-size:18px_18px] opacity-40" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-100/80 bg-white/75 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-zinc-900 text-white shadow-sm">
              <span className="text-sm font-semibold">V</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{brandName}</div>
              <div className="text-[11px] text-zinc-500">Produtos saudáveis & bem-estar</div>
            </div>
          </a>

          {/* Search */}
          <div className="ml-auto hidden w-full max-w-xl items-center md:flex">
            <div className="relative w-full">
              <Icon name="search" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
              <input
                className="w-full rounded-2xl border border-zinc-200 bg-white px-10 py-3 text-sm outline-none ring-emerald-500/20 focus:ring-4"
                placeholder="Buscar por whey, granola, sem glúten..."
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800">
                Buscar
              </button>
            </div>
          </div>

          {/* Actions */}
          <nav className="flex items-center gap-2">
            <button className="hidden rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 md:inline-flex">
              Entrar
            </button>
            <button className="hidden rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700 md:inline-flex">
              Criar conta
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50">
              <Icon name="cart" className="h-5 w-5" />
              <span className="hidden sm:inline">Carrinho</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-zinc-900 text-[11px] text-white">
                2
              </span>
            </button>
          </nav>
        </div>

        {/* Mobile search */}
        <div className="mx-auto max-w-7xl px-4 pb-3 md:hidden">
          <div className="relative w-full">
            <Icon name="search" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" />
            <input
              className="w-full rounded-2xl border border-zinc-200 bg-white px-10 py-3 text-sm outline-none ring-emerald-500/20 focus:ring-4"
              placeholder="Buscar produtos..."
            />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-8 md:px-6 md:pt-12">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm">
              <Icon name="spark" className="h-4 w-4 text-emerald-600" />
              Curadoria diária • Marcas confiáveis • Entrega rápida
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Compre saudável, sem perder tempo.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg">
              Um marketplace com produtos de bem-estar, suplementos e orgânicos — com navegação simples,
              ofertas reais e experiência premium do primeiro clique ao pedido.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800">
                Ver ofertas de hoje <Icon name="arrow" className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">
                Explorar categorias
              </button>
            </div>

            {/* Trust row */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: "truck", title: "Entrega", desc: "rápida e rastreada" },
                { icon: "shield", title: "Compra", desc: "segura e transparente" },
                { icon: "leaf", title: "Curadoria", desc: "ingredientes & origem" },
                { icon: "heart", title: "Favoritos", desc: "liste e compare" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
                      <Icon name={b.icon as any} className="h-5 w-5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">{b.title}</div>
                      <div className="text-xs text-zinc-500">{b.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero media */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-lime-500/10" />
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1543363136-5e3e44a6bda8?auto=format&fit=crop&w=1600&q=80"
                  alt="Mesa com alimentos saudáveis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating info */}
              <div className="absolute left-4 top-4 rounded-2xl border border-white/60 bg-white/80 p-3 backdrop-blur">
                <div className="text-xs font-semibold text-zinc-900">Oferta relâmpago</div>
                <div className="mt-1 text-[11px] text-zinc-600">Frete grátis acima de R$ 149</div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {[
                  { k: "1.2k+", v: "produtos" },
                  { k: "180+", v: "marcas" },
                  { k: "4.8★", v: "avaliação" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-white/60 bg-white/80 p-3 text-center backdrop-blur"
                  >
                    <div className="text-sm font-semibold">{s.k}</div>
                    <div className="text-[11px] text-zinc-600">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini row */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold text-zinc-900">Recomendado pra você</div>
                <p className="mt-1 text-xs text-zinc-600">
                  Baseado em “alto teor de proteína” e “zero açúcar”.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                    Proteína
                  </span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-700">
                    Low Carb
                  </span>
                </div>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-semibold text-zinc-900">Assine & economize</div>
                <p className="mt-1 text-xs text-zinc-600">
                  Reposição automática com desconto e controle fácil.
                </p>
                <button className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700">
                  Ver planos
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories strip */}
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Navegue por categoria</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Atalhos inteligentes pra encontrar rápido o que combina com seu objetivo.
            </p>
          </div>
          <button className="hidden items-center gap-2 rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 md:inline-flex">
            Ver todas <Icon name="arrow" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <a
              key={c.name}
              href="#"
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-100/60 blur-2xl transition group-hover:bg-emerald-200/70" />
              <div className="flex items-center justify-between">
                <div className="text-2xl">{c.icon}</div>
                <span className="rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-semibold text-white">
                  Explorar
                </span>
              </div>
              <div className="mt-4 text-base font-semibold">{c.name}</div>
              <div className="mt-1 text-sm text-zinc-600">{c.hint}</div>
            </a>
          ))}
        </div>
      </section>

      {/* Collections (editorial blocks) */}
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/10 via-transparent to-emerald-500/10" />
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={collections[0].image}
                  alt={collections[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/85 p-4 backdrop-blur">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{collections[0].title}</div>
                    <div className="mt-1 text-sm text-zinc-600">{collections[0].desc}</div>
                  </div>
                  <button className="shrink-0 rounded-2xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800">
                    Abrir coleção
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-5">
            {collections.slice(1).map((col) => (
              <div
                key={col.title}
                className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-lime-500/10" />
                <div className="relative aspect-[16/10] w-full">
                  <Image src={col.image} alt={col.title} fill className="object-cover" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 rounded-2xl border border-white/60 bg-white/85 p-4 backdrop-blur">
                  <div className="text-sm font-semibold">{col.title}</div>
                  <div className="mt-1 text-sm text-zinc-600">{col.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo grid */}
      <section className="mx-auto max-w-7xl px-4 pt-10 md:px-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Promoções e destaques</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Produtos com alta rotatividade e excelente custo-benefício.
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            Ver vitrine <Icon name="arrow" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promoProducts.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                  {p.tag}
                </div>
                <button
                  className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-2xl border border-white/60 bg-white/85 text-zinc-700 backdrop-blur hover:bg-white"
                  aria-label="Adicionar aos favoritos"
                >
                  <Icon name="heart" className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold text-zinc-500">{p.brand}</div>
                <h3 className="mt-1 text-base font-semibold leading-snug">{p.name}</h3>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Stars value={p.rating} />
                    <span className="text-xs text-zinc-500">
                      {p.rating.toFixed(1)} ({p.reviews})
                    </span>
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-700">
                    em estoque
                  </span>
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <div className="flex items-baseline gap-2">
                    <div className="text-lg font-semibold">{formatBRL(p.price)}</div>
                    <div className="text-sm text-zinc-400 line-through">{formatBRL(p.oldPrice)}</div>
                  </div>
                  <button className="rounded-2xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800">
                    Adicionar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 pt-12 md:px-6">
        <div className="rounded-[2.25rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">Uma experiência de compra simples</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Fluxo direto, transparente e pensado pra conversão.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
              <Icon name="leaf" className="h-4 w-4" /> Curadoria + origem dos produtos
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Busque e filtre",
                desc: "Pesquisa central + categorias rápidas e coleções prontas.",
              },
              {
                n: "02",
                title: "Compare e confie",
                desc: "Cards com avaliações, selos e informações essenciais.",
              },
              {
                n: "03",
                title: "Receba com tranquilidade",
                desc: "Entrega rastreada e suporte para pedidos e assinaturas.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime-200/40 blur-2xl" />
                <div className="text-xs font-semibold text-zinc-500">{s.n}</div>
                <div className="mt-2 text-base font-semibold">{s.title}</div>
                <div className="mt-1 text-sm text-zinc-600">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter + Footer */}
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10 md:px-6">
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="rounded-[2.25rem] border border-zinc-200 bg-zinc-900 p-6 text-white shadow-sm md:p-8">
              <div className="text-sm font-semibold text-white/80">Receba ofertas e novidades</div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Assine a newsletter e ganhe cupons semanais.
              </h3>
              <p className="mt-2 text-sm text-white/70">
                Sem spam. Cancelamento em 1 clique.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none ring-white/10 focus:ring-4"
                  placeholder="Seu e-mail"
                />
                <button className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-emerald-400">
                  Assinar
                </button>
              </div>
              <div className="mt-4 text-xs text-white/60">
                Ao assinar, você concorda com nossos termos e política de privacidade.
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="h-full rounded-[2.25rem] border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <div className="text-sm font-semibold">Selo de confiança</div>
              <p className="mt-2 text-sm text-zinc-600">
                Mostre aqui: meios de pagamento, segurança, parceiros, certificações e suporte.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { title: "Pagamento", desc: "Pix e cartão", icon: "shield" },
                  { title: "Entrega", desc: "Rastreio", icon: "truck" },
                  { title: "Curadoria", desc: "Ingredientes", icon: "leaf" },
                  { title: "Suporte", desc: "7 dias", icon: "user" },
                ].map((b) => (
                  <div key={b.title} className="rounded-3xl border border-zinc-200 p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-100 text-zinc-800">
                        <Icon name={b.icon as any} className="h-5 w-5" />
                      </div>
                      <div className="leading-tight">
                        <div className="text-sm font-semibold">{b.title}</div>
                        <div className="text-xs text-zinc-500">{b.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
                <span className="font-semibold">Dica:</span> depois você pode ligar isso com sua API
                (vitrine, busca, filtros, carrinho, assinatura).
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 border-t border-zinc-100 pt-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-2xl bg-zinc-900 text-white">
                    <span className="text-sm font-semibold">V</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{brandName}</div>
                    <div className="text-xs text-zinc-500">Marketplace saudável</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-zinc-600">
                  Um layout inicial pronto para evoluir com catálogo real, busca, filtros e área do cliente.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 md:col-span-8">
                {[
                  {
                    title: "Marketplace",
                    links: ["Categorias", "Ofertas", "Marcas", "Assinaturas"],
                  },
                  {
                    title: "Ajuda",
                    links: ["Atendimento", "Entregas", "Trocas", "Políticas"],
                  },
                  {
                    title: "Institucional",
                    links: ["Sobre", "Trabalhe conosco", "Blog", "Contato"],
                  },
                ].map((col) => (
                  <div key={col.title}>
                    <div className="text-sm font-semibold">{col.title}</div>
                    <ul className="mt-3 space-y-2">
                      {col.links.map((l) => (
                        <li key={l}>
                          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900">
                            {l}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2 border-t border-zinc-100 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <div>© {new Date().getFullYear()} {brandName}. Todos os direitos reservados.</div>
              <div className="flex gap-4">
                <a href="#" className="hover:text-zinc-800">Termos</a>
                <a href="#" className="hover:text-zinc-800">Privacidade</a>
                <a href="#" className="hover:text-zinc-800">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}