import { darkTheme, lightTheme } from "@/config/theme";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components/native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const theme = useColorScheme();

  const isDarkMode = theme === "dark";
  const themeConfig = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="light" />
      </ThemeProvider>
    </>
  );
}
