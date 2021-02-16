/**
 *  Component Helpers
 */
export function guid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Theme Helpers
 */
export const _COLORS_ = Object.freeze({
  
});

/**
 * Image Helpers
 */
// lazy load


/**
 * Window Helpers
 */

/**
 * Breakpoints are situatued such that
 * comparison would be "and down" --
 * 
 * if (window.innerWidth < _BREAKPOINTS_.sm) { ... }
 */
export const _BREAKPOINTS_ = Object.freeze({
  'xSm': 576,
  'sm': 767,
  'md': 991,
  'lg': 1199,
  'xl': 1399
});

export const isOnScreen = function(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true
  return elemTop < window.innerHeight - 100 && elemBottom >= 0;
}
