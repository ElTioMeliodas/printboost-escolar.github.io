/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'peach-paper': 'var(--color-peach-paper)',
        'charcoal-ink': 'var(--color-charcoal-ink)',
        'snow': 'var(--color-snow)',
        'ember-orange': 'var(--color-ember-orange)',
        'magenta-pop': 'var(--color-magenta-pop)',
        'sunbeam-yellow': 'var(--color-sunbeam-yellow)',
        'mint-wash': 'var(--color-mint-wash)',
        'powder-blue': 'var(--color-powder-blue)',
        'lilac-tint': 'var(--color-lilac-tint)',
        'lime-zest': 'var(--color-lime-zest)',
        'cobalt-spark': 'var(--color-cobalt-spark)',
      },
      fontFamily: {
        alfa: ['var(--font-alfa-slab-one)'],
        manrope: ['var(--font-manrope)'],
      },
      borderRadius: {
        nav: 'var(--radius-nav)',
        cards: 'var(--radius-cards)',
        buttons: 'var(--radius-buttons)',
        small: 'var(--radius-small)',
      }
    },
  },
  plugins: [],
};