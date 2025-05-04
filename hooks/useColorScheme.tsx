import { createContext, useContext } from "react";
import { useColorScheme } from "react-native";

type ColorSchemeContextType = {
  theme: "light" | "dark";
};

const initialState: ColorSchemeContextType = {
  theme: "light",
};

const ColorSchemeContext = createContext<ColorSchemeContextType>(initialState);

export const ColorSchemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useColorScheme() === "dark" ? "dark" : "light";

  return (
    <ColorSchemeContext.Provider value={{ theme }}>
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
