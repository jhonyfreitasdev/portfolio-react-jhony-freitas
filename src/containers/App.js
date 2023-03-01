import { ThemeProvider } from "styled-components";
import { variables } from "../constants/variables"
import { GlobalStyle } from "../_assets/styles/global-style";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <ThemeProvider theme={variables}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}