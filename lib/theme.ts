/**
 * Centralized Theme Configuration
 * Update colors here to change the entire website theme
 * Matches the client application theme
 */

export const theme = {
  colors: {
    // Primary brand colors
    primary: '#F2613F',      // Vibrant Orange-Red (primary accent)
    secondary: '#481E14',    // Dark Brown (secondary accent)
    tertiary: '#ffffff',     // White (highlights)
    background: '#0C0C0C',   // Near Black (main background)
    
    // Semantic color mappings
    brand: {
      one: '#F2613F',        // Primary gradient color
      two: '#481E14',        // Secondary gradient color
      three: '#ffffff',      // Tertiary gradient color
    },
    
    // UI element colors
    border: {
      default: '#481E14',
      hover: '#F2613F',
      focus: '#F2613F',
    },
    
    text: {
      primary: '#ffffff',
      secondary: '#a3a3a3',
      accent: '#F2613F',
      muted: '#737373',
    },
    
    status: {
      success: '#F2613F',
      warning: '#481E14',
      error: '#F2613F',
      info: '#ffffff',
    },
    
    interactive: {
      hover: '#F2613F',
      active: '#481E14',
      disabled: '#404040',
    }
  }
} as const

// Type-safe color access
export type ThemeColors = typeof theme.colors

// Helper function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  return `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
}

// Export individual colors for easy access
export const {
  primary,
  secondary,
  tertiary,
  background,
  brand,
  border,
  text,
  status,
  interactive
} = theme.colors
