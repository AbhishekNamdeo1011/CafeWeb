import React from 'react';

/**
 * Premium Reusable Button component supporting primary, secondary, outline, and text variants.
 * Fully accessible with visible focus rings and minimum touch target size.
 */
export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  icon: Icon,
  fullWidth = false,
  ariaLabel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer min-h-[44px] focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg outline-none";
  
  const variants = {
    primary: "bg-gold-500 text-dark-bg hover:bg-gold-400 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.25)] hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-white/5 text-white border border-white/15 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 active:translate-y-0",
    outline: "bg-transparent text-gold-500 border border-gold-500/60 hover:border-gold-500 hover:bg-gold-500 hover:text-dark-bg hover:-translate-y-0.5 active:translate-y-0",
    text: "bg-transparent text-gray-300 hover:text-gold-500 p-0 min-h-0 rounded-none border-b border-transparent hover:border-gold-500 transition-colors"
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel} {...props}>
        {children}
        {Icon && <Icon size={18} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} aria-label={ariaLabel} {...props}>
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};
