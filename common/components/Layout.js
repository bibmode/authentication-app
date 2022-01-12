import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useState } from "react";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F80ED",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1300,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
  },
});

export const AppContext = createContext("");

const Layout = (props) => {
  const [menu, setMenu] = useState(false);

  const handleClickAway = () => {
    setMenu(!menu);
  };

  const handleClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{ menu, setMenu, handleClickAway, handleClick }}
        >
          <main>{props.children}</main>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
