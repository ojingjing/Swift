import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  StackRouter,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.w
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* initialRouteName="(pages)/start" */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* <Stack.Screen name="(pages)" options={{ headerShown: false }} /> */}

        <Stack.Screen name="(pages)/start" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/card" options={{ headerShown: false }} />

        <Stack.Screen name="(pages)/parking" options={{ headerShown: false }} />
        <Stack.Screen
          name="(pages)/inputdetail"
          options={{ headerShown: false }}
        />

        <Stack.Screen name="(pages)/login1" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/login2" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/login3" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/login4" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/login5" options={{ headerShown: false }} />
        <Stack.Screen name="(pages)/login6" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
