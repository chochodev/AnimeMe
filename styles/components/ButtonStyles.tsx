export const ButtonStyles = {
  baseStyle: {
    variant: 'primary',
  },
  size: {

  },
  variants: {
    primary: {
      bg: 'primary',
      color: 'onPrimary',
      rounded: 'sm',
      _hover: {
        bg: 'primaryHover',
      },
      _active: {
        bg: 'primary',
        // outline: '2px solid #ffffff',
        // outlineOffset: '0',
      },
    },
    secondary: {
      bg: 'secondary',
      color: 'onSecondary',
      rounded: 'sm',
      _hover: {
        bg: 'secondaryHover',
      },
      _active: {
        bg: 'secondary',
      },
    },
    outline: {
      bg: 'secondary',
      color: 'onSecondary',
      rounded: 'sm',
      outline: '2px solid primary',
      outlineOffset: '0',
      _hover: {
        bg: 'onSecondary',
        color: 'secondary',
        outline: '0',
      },
      _active: {
        bg: 'secondary'
      },
    },
    ghost: {
      light: {
        bg: 'none',
        color: '#FFFFFF',
        rounded: 'sm',
        _hover: {
          bg: 'onSecondary',
          color: 'secondary',
        },
        _active: {
          outline: '2px solid #ffffff',
          outlineOffset: '0',
        },
      },
      dark: {
        bg: 'none',
        color: 'primary',
        rounded: 'sm',
        _hover: {
          bg: 'onSecondary',
          color: 'secondary',
        },
        _active: {
          outline: '2px solid #ffffff',
          outlineOffset: '0',
        },
      },
    }
  },
  defaultProps: {
    variant: 'primary',
  }
}