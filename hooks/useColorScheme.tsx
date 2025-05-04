import { Theme } from "@/types/theme";
import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

const sizes = [
  "0px",
  "4px",
  "8px",
  "12px",
  "16px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
  "40px",
];

// main theme colors are #e52165 and #0d1137

const lightTheme = {
  background: "#ffffff",
  surface: "#",
  text: "#e22262",
  primary: "#e52165",
  primaryText: "#ffffff",
} as Theme;

const darkTheme = {
  background: "#ffffff",
  surface: "#ffffff",
  text: "#000000",
  primary: "#6200ee",
  primaryText: "#ffffff",
} as Theme;

type ColorSchemeContextType = {
  theme: "light" | "dark";
  sizes: string[];
  themeStyles: Theme;
};

const initialState: ColorSchemeContextType = {
  theme: "light",
  sizes: sizes,
  themeStyles: lightTheme as Theme,
};

const ColorSchemeContext = createContext<ColorSchemeContextType>(initialState);

export const ColorSchemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useColorScheme() === "dark" ? "dark" : "light";

  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ColorSchemeContext.Provider
      value={{ theme, sizes, themeStyles: themeStyles }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
};

export const useColorSchemeContext = () => {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error(
      "useColorSchemeContext must be used within a ColorSchemeProvider"
    );
  }
  return context;
};
