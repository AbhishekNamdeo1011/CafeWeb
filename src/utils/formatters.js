/**
 * Utility functions for data formatting & display
 */

/**
 * Format price with currency symbol
 * @param {number} amount 
 * @param {string} symbol 
 * @returns {string}
 */
export const formatPrice = (amount, symbol = '₹') => {
  if (typeof amount !== 'number' || isNaN(amount)) return '';
  const formatted = Number.isInteger(amount) ? amount.toString() : amount.toFixed(2);
  return `${symbol}${formatted}`;
};

/**
 * Format phone string for tel: link
 * @param {string} phone 
 * @returns {string}
 */
export const formatTelLink = (phone) => {
  if (!phone) return '';
  return `tel:${phone.replace(/[^0-9+]/g, '')}`;
};

/**
 * Format email string for mailto: link
 * @param {string} email 
 * @returns {string}
 */
export const formatMailtoLink = (email) => {
  if (!email) return '';
  return `mailto:${email}`;
};

