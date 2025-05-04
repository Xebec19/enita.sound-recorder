import { useColorSchemeContext } from "@/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useColorSchemeContext();

  return (
    <>
      <StatusBar style={theme === "dark" ? "dark" : "light"} />
      {children}
    </>
  );
}
