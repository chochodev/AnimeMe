import { extendTheme } from '@chakra-ui/react';

export const TextStyles = {
  baseStyle: {
    variant: '',
  },
  size: {
  },
  variants: {
    primary: {
      field: {
        '&::placeholder': {
          color: 'secondary',
        },
        bg: '#171717',
        color: 'secondary',
        border: '0',
        outline: '1px solid #292929',
        _focus: {
          outline: "2px solid #5F4BB6",
        },
      },
    },
  },
  defaultProps: {
    variant: '',
  }
}


export const LinkStyles = {
  baseStyle: {
    variant: '',
  },
  size: {
  },
  variants: {
    primary: {
      field: {
        '&::placeholder': {
          color: 'secondary',
        },
        bg: '#171717',
        color: 'secondary',
        height: '2.25rem',
        border: '0',
        outline: '1px solid #292929',
        _focus: {
          outline: "2px solid #5F4BB6",
        },
      },
    },
  },
  defaultProps: {
    variant: '',
  }
}