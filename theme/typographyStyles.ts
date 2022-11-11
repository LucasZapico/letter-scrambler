export const Fonts = {
  heading: 'inherit, sans-serif',
  body: 'inherit, sans-serif',
}

// Heading
export const HeadingStyles = {
  baseStyle: {
    fontWeight: 'in',
    marginBottom: '6',
    lineHeight: 'lineHeights.taller',
  },
  // Styles for the size variations
  sizes: {
    '4xl': {
      fontSize: ['4xl', null, '9xl'],
      lineHeight: 1.5,
    },
    '3xl': {
      fontSize: ['4xl', null, '7xl'],
      lineHeight: 1.5,
    },
    '2xl': {
      lineHeight: 1.5,
    },
    xl: {
      lineHeight: 1.5,
    },
    lg: {
      lineHeight: 1.5,
    },
  },
  // Styles for the visual style variations
  variants: {
    sec: {
      color: 'gray.300',
      fontWeight: 500,
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
}

export const TextStyles = {
  baseStyle: {
    color: 'gray.200',
    fontWeight: 500,
    letterSpacing: '0.1rem',
    lineHeight: 1.5,
    marginBottom: '6',
  },
}
