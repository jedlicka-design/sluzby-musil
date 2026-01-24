/**
 * Helper pro generování správných URL adres s ohledem na base path (např. pro GitHub Pages).
 * Automaticky přidá BASE_URL (např. '/sluzby-musil'), pokud cesta začíná lomítkem.
 */
export const url = (path: string): string => {
    const base = import.meta.env.BASE_URL.replace(/\/$/, "");
    return path.startsWith("/") ? `${base}${path}` : path;
};
