import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F80ED",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
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
  const [toggleForm, setToggleForm] = useState(true); //true for register false for login
  const router = useRouter();

  const handleClickAway = () => {
    setMenu(!menu);
  };

  const handleClick = () => {
    setMenu((prev) => !prev);
  };

  const redirectUser = (path) => {
    router.push(`/${path}`);
  };

  const signUpEmail = async (email, password) => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (data.message === "User already exists") {
      console.log(data.message);
    } else if (data.message === "User created") {
      console.log(data.message);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppContext.Provider
          value={{
            menu,
            setMenu,
            handleClickAway,
            handleClick,
            toggleForm,
            setToggleForm,
            signUpEmail,
            redirectUser,
            router,
          }}
        >
          <main>{props.children}</main>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
