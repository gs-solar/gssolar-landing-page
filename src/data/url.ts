/**
 * Prefixne cestu base URL projektu (base: '/fotovoltaika' v astro.config.mjs).
 * Používaj pre všetky odkazy a assety z public/: zaklad('/images/logo.png').
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const zaklad = (cesta: string): string => `${base}${cesta}`;
