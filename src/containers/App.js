// import { ThemeProvider } from "styled-components";
// import { theme } from "../constants/theme"
import { Container } from "./styles";
import { GlobalStyle } from "../_assets/styles/global-style";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    // <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <AppRoutes />
      </Container>
    // </ThemeProvider>
  );
}