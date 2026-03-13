"use client";

import { Locale, useI18n } from "../i18n";

export function LanguageSwitcher() {
  const { locale, setLocale, dictionary, localeLabels } = useI18n();

  return (
    <label className="language-switcher">
      <span>{dictionary.language}</span>
      <select
        aria-label={dictionary.language}
        value={locale}
        onChange={(event) => setLocale(event.target.value as Locale)}
      >
        {Object.entries(localeLabels).map(([localeCode, localeLabel]) => (
          <option key={localeCode} value={localeCode}>
            {localeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
