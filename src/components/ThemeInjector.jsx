import { useEffect } from 'react';
import { siteData } from '../data/siteData';

/**
 * ThemeInjector automatically injects theme CSS variables into document root element.
 * Allows client colors & fonts in siteData.theme to re-theme the entire website dynamically.
 */
export const ThemeInjector = () => {
  const { theme } = siteData;

  useEffect(() => {
    if (!theme) return;

    const root = document.documentElement;

    if (theme.primary) root.style.setProperty('--color-gold-500', theme.primary);
    if (theme.primaryHover) root.style.setProperty('--color-gold-400', theme.primaryHover);
    if (theme.accent) root.style.setProperty('--color-gold-600', theme.accent);
    if (theme.background) root.style.setProperty('--color-dark-bg', theme.background);
    if (theme.surface) root.style.setProperty('--color-dark-surface', theme.surface);
    if (theme.card) root.style.setProperty('--color-dark-card', theme.card);
    if (theme.fontHeading) root.style.setProperty('--font-serif', theme.fontHeading);
    if (theme.fontBody) root.style.setProperty('--font-sans', theme.fontBody);
  }, [theme]);

  return null;
};
