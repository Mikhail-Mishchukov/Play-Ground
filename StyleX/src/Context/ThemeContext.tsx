import { PropsWithChildren, createContext, useContext, useState } from "react";
import { darkTheme } from "../Theme/DarkTheme";

type Theme = null | typeof darkTheme;

type ThemeNames = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  setTheme: (theme: ThemeNames) => void;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(null);

  const setNewTheme = (newTheme: ThemeNames) => {
    if (newTheme === "light") {
      setTheme(null);
      return;
    }

    if (newTheme === "dark") {
      setTheme(darkTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setNewTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error("useTheme must in ThemeProvider");
  }

  return theme;
};
