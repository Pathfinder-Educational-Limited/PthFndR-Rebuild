export const colors = {
  // PthFndR Brand Colors
  pthfndr: {
    // Primary Blue
    primaryBlue: '#004890',
    
    // Navy (Icon)
    navy: '#0C2A5C',
    
    // Gradient Colors
    gradientCyan: '#0097b2',
    gradientLime: '#7ed957',
    
    // Supporting Colors
    white: '#FFFFFF',
    
    // Legacy colors (if applicable)
    green: '#40D478',
    teal: '#5FD4D4',
    cream: '#F5F5F5',
  },
  
  // Utility Colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  }
};

// Export for Tailwind
export const tailwindColors = {
  pthfndr: {
    navy: colors.pthfndr.navy,
    blue: colors.pthfndr.primaryBlue,
    cyan: colors.pthfndr.gradientCyan,
    lime: colors.pthfndr.gradientLime,
  }
};