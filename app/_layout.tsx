import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../src/common/constants/Colors";
import { Header } from "@/src/common/components/Header/Header";
export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Mulish-Regular": require("../assets/fonts/MulishRegular.ttf"),
    "Mulish-Bold": require("../assets/fonts/MulishBold.ttf"),
    ...FontAwesome.font,
  });

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
          header: () => <Header title="Crear pago" hasDropdown />,
        }}
      />
      <Stack.Screen
        name="change-currency"
        options={{
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
      <Stack.Screen
        name="payment-received"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
