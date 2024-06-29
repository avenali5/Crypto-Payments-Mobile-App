import { Header } from "@/src/common/components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../src/common/constants/Colors";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    MulishRegular: require("../assets/fonts/Mulish-Regular.ttf"),
    MulishSemiBold: require("../assets/fonts/Mulish-SemiBold.ttf"),
    MulishBold: require("../assets/fonts/Mulish-Bold.ttf"),
    ...FontAwesome.font,
  });

  // useFonts({
  //   TwemojiMozilla: require("../node_modules/react-native-international-phone-number/lib/assets/fonts/TwemojiMozilla.woff2"),
  // });

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
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: () => <Header title="Crear pago" hasDropdown />,
        }}
      />
      <Stack.Screen
        name="change-currency"
        options={{
          headerShown: true,
          header: () => (
            <Header title="Selecciona una divisa" hasBackArrow noShadow />
          ),
        }}
      />
      <Stack.Screen
        name="send-payment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bitnovo-code"
        options={{
          header: () => <Header title="" hasBackArrow noShadow />,
        }}
      />
    </Stack>
  );
}
