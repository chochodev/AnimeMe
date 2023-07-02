import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { InputStyles as Input } from "./components/InputStyles";
import { TextStyles as Text, LinkStyles as Link } from './components/TextStyles';
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

    primaryText: '#CCCCCC',
    secondaryText: '#848484',
    accentText: '#555555',

    warning: '#685d24',
    danger: '#681c1c',

    star: '#FFD700',

  },
  components: {
    Button,
    Input,
    Text,
    Link,
  },
  breakpoints: {
    sm: "30em",
    msm: "34em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
});