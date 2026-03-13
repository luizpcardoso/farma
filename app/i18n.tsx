"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "pt-BR" | "en-US" | "es-PY";

const DEFAULT_LOCALE: Locale = "pt-BR";
const STORAGE_KEY = "site-locale";

const localeLabels: Record<Locale, string> = {
  "pt-BR": "Português (Brasil)",
  "en-US": "English (US)",
  "es-PY": "Español (Paraguay)",
};

type Dictionary = {
  topAlert: string;
  gotIt: string;
  brandSubtitle: string;
  searchPlaceholder: string;
  signIn: string;
  favorites: string;
  categoriesLink: string;
  stores: string;
  brands: string;
  deals: string;
  dailyRate: string;
  categoriesTitle: string;
  categories: string[];
  heroLabel: string;
  heroTitle: string;
  heroDescription: string;
  templateButton: string;
  buyNow: string;
  featuredBrands: string;
  featuredBrandsDescription: string;
  weeklyHighlights: string;
  featuredProducts: Array<{ title: string; description: string; price: string }>;
  footerDescription: string;
  buyPageTitle: string;
  buyPageDescription: string;
  formName: string;
  formPhone: string;
  formQuantity: string;
  formEmail: string;
  sendOrder: string;
  language: string;
};

const dictionaries: Record<Locale, Dictionary> = {
  "pt-BR": {
    topAlert: "Exemplo de vitrine comercial • layout personalizável para sua marca",
    gotIt: "ENTENDI",
    brandSubtitle: "Marketplace Premium",
    searchPlaceholder: "Busque por perfumes, suplementos ou produtos de saúde",
    signIn: "Entrar",
    favorites: "Favoritos",
    categoriesLink: "Categorias",
    stores: "Lojas",
    brands: "Marcas",
    deals: "Ofertas",
    dailyRate: "Cotação do dia:",
    categoriesTitle: "Categorias",
    categories: [
      "Perfumes Importados",
      "Suplementos",
      "Tirzepatida",
      "Saúde e Bem-estar",
      "Mais Vendidos",
      "Ver Todos",
    ],
    heroLabel: "SUA LOGO AQUI",
    heroTitle: "Estrutura pronta para vender perfumes, suplementos e tirzepatida",
    heroDescription:
      "Um layout moderno focado em conversão com banners promocionais e vitrines de produtos para apresentações comerciais.",
    templateButton: "Quero este modelo",
    buyNow: "Comprar agora",
    featuredBrands: "Marcas em destaque",
    featuredBrandsDescription: "Espaço para logos de parceiros, distribuidores e franquias.",
    weeklyHighlights: "Destaques da Semana",
    featuredProducts: [
      {
        title: "Kit de Perfumes Premium",
        description: "Espaço para a descrição do produto principal da campanha.",
        price: "US$ 299,90",
      },
      {
        title: "Suplemento de Performance",
        description: "Perfeito para kits, descontos e assinaturas mensais.",
        price: "US$ 159,90",
      },
      {
        title: "Linha Tirzepatida",
        description: "Exemplo visual para categorias avançadas de saúde.",
        price: "Preço sob consulta",
      },
    ],
    footerDescription: "Template demonstrativo para propostas comerciais • layout 100% editável.",
    buyPageTitle: "Finalize seu pedido",
    buyPageDescription: "Preencha os dados abaixo e envie sua solicitação.",
    formName: "Nome",
    formPhone: "Telefone",
    formQuantity: "Quantidade",
    formEmail: "E-mail",
    sendOrder: "Enviar pedido",
    language: "Idioma",
  },
  "en-US": {
    topAlert: "Commercial showcase example • customizable layout for your brand",
    gotIt: "GOT IT",
    brandSubtitle: "Premium Marketplace",
    searchPlaceholder: "Search for perfumes, supplements, or health products",
    signIn: "Sign in",
    favorites: "Favorites",
    categoriesLink: "Categories",
    stores: "Stores",
    brands: "Brands",
    deals: "Deals",
    dailyRate: "Daily exchange rate:",
    categoriesTitle: "Categories",
    categories: [
      "Imported Perfumes",
      "Supplements",
      "Tirzepatide",
      "Health & Wellness",
      "Best Sellers",
      "View All",
    ],
    heroLabel: "YOUR LOGO HERE",
    heroTitle: "Ready structure to sell perfumes, supplements, and tirzepatide",
    heroDescription:
      "A modern conversion-focused layout with promotional banners and product showcases for commercial presentations.",
    templateButton: "I want this template",
    buyNow: "Buy now",
    featuredBrands: "Featured brands",
    featuredBrandsDescription: "Space for partner, distributor, and franchise logos.",
    weeklyHighlights: "Weekly Highlights",
    featuredProducts: [
      {
        title: "Premium Perfume Kit",
        description: "Space for the main campaign product description.",
        price: "$299.90",
      },
      {
        title: "Performance Supplement",
        description: "Perfect for bundles, discounts, and monthly subscriptions.",
        price: "$159.90",
      },
      {
        title: "Tirzepatide Line",
        description: "Visual example for advanced healthcare product categories.",
        price: "Price on request",
      },
    ],
    footerDescription: "Demo template for commercial proposals • 100% editable layout.",
    buyPageTitle: "Complete your order",
    buyPageDescription: "Fill in the details below and send your request.",
    formName: "Name",
    formPhone: "Phone",
    formQuantity: "Quantity",
    formEmail: "Email",
    sendOrder: "Send order",
    language: "Language",
  },
  "es-PY": {
    topAlert: "Ejemplo de vitrina comercial • diseño personalizable para tu marca",
    gotIt: "ENTENDIDO",
    brandSubtitle: "Marketplace Premium",
    searchPlaceholder: "Busca perfumes, suplementos o productos de salud",
    signIn: "Iniciar sesión",
    favorites: "Favoritos",
    categoriesLink: "Categorías",
    stores: "Tiendas",
    brands: "Marcas",
    deals: "Ofertas",
    dailyRate: "Tipo de cambio del día:",
    categoriesTitle: "Categorías",
    categories: [
      "Perfumes Importados",
      "Suplementos",
      "Tirzepatida",
      "Salud y Bienestar",
      "Más Vendidos",
      "Ver Todo",
    ],
    heroLabel: "TU LOGO AQUÍ",
    heroTitle: "Estructura lista para vender perfumes, suplementos y tirzepatida",
    heroDescription:
      "Un diseño moderno enfocado en conversión con banners promocionales y vitrinas de productos para presentaciones comerciales.",
    templateButton: "Quiero esta plantilla",
    buyNow: "Comprar ahora",
    featuredBrands: "Marcas destacadas",
    featuredBrandsDescription: "Espacio para logos de socios, distribuidores y franquicias.",
    weeklyHighlights: "Destacados de la Semana",
    featuredProducts: [
      {
        title: "Kit de Perfumes Premium",
        description: "Espacio para la descripción del producto principal de la campaña.",
        price: "US$ 299,90",
      },
      {
        title: "Suplemento de Rendimiento",
        description: "Perfecto para combos, descuentos y suscripciones mensuales.",
        price: "US$ 159,90",
      },
      {
        title: "Línea Tirzepatida",
        description: "Ejemplo visual para categorías avanzadas de salud.",
        price: "Precio a consultar",
      },
    ],
    footerDescription: "Plantilla de demostración para propuestas comerciales • diseño 100% editable.",
    buyPageTitle: "Completa tu pedido",
    buyPageDescription: "Completa los datos abajo y envía tu solicitud.",
    formName: "Nombre",
    formPhone: "Teléfono",
    formQuantity: "Cantidad",
    formEmail: "Correo",
    sendOrder: "Enviar pedido",
    language: "Idioma",
  },
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dictionary: Dictionary;
  localeLabels: Record<Locale, string>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(STORAGE_KEY) as Locale | null;

    if (savedLocale && dictionaries[savedLocale]) {
      setLocale(savedLocale);
    }
  }, []);

  const handleSetLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale: handleSetLocale,
      dictionary: dictionaries[locale],
      localeLabels,
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
