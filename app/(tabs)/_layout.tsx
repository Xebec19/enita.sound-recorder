import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: true,
          tabBarStyle: {
            backgroundColor: "#1a1a1a",
            borderTopColor: "#333",
          },
          tabBarActiveTintColor: "#ff4757",
          tabBarInactiveTintColor: "#888",
          headerStyle: {
            backgroundColor: "#1a1a1a",
          },
          headerTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="mic" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="recordings"
          options={{
            title: "Recordings",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
