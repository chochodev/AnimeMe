import { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: (props) => ({
    html: {
      scrollBehaivor: 'smooth',
    },
    body: {
      boxSizing: 'border-box',
      minHeight: '100vh',
      bg: 'surface',
    },
    '*': {
      boxSizing: 'border-box',
      margin: '0',
      padding: '0',
      fontFamily: 'Nunito,Archivo,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans"',
    },
    '*::selection': {
      color: '#AAAAAA',
      bg: '#F8F8F8',
    },
    ul: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    }
  })
}