import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { InputStyles as Input } from "./components/InputStyles";
import { styles } from "./global";

export const myCustomTheme = extendTheme ({
  styles,
  colors: {
    surface: '#0E0E0E',
    onSurface: '#1C1C1C',

    primary: '#5F4BB6',
    onPrimary: '#F8F8F8',
    primaryHover: '#7E6EC4',

    secondary: '#AAAAAA',
    onSecondary: '#040404',
    secondaryHover: '#EEEEEE',

    accent: '#040404',
    onAccent: '#A8A8A8',

  },
  components: {
    Button,
    Input,
  }
});