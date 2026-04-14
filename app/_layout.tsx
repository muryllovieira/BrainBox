import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import 'react-native-reanimated';

import { AppThemeContext, AppThemeProvider } from '@/data';
import { ChatProvider } from '@/data/ChatBot';
import { colors } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'onboarding',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PoppinsBlack: require('../assets/fonts/Poppins-Black.ttf'),
    PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    PoppinsExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    PoppinsExtraLight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
    PoppinsLight: require('../assets/fonts/Poppins-Light.ttf'),
    PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
    PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf'),
    UrbanistBlack: require('../assets/fonts/Urbanist-Black.ttf'),
    UrbanistBlackItalic: require('../assets/fonts/Urbanist-BlackItalic.ttf'),
    UrbanistBold: require('../assets/fonts/Urbanist-Bold.ttf'),
    UrbanistBoldItalic: require('../assets/fonts/Urbanist-BoldItalic.ttf'),
    UrbanistExtraBold: require('../assets/fonts/Urbanist-ExtraBold.ttf'),
    UrbanistExtraBoldItalic: require('../assets/fonts/Urbanist-ExtraBoldItalic.ttf'),
    UrbanistExtraLight: require('../assets/fonts/Urbanist-ExtraLight.ttf'),
    UrbanistExtraLightItalic: require('../assets/fonts/Urbanist-ExtraLightItalic.ttf'),
    UrbanistItalic: require('../assets/fonts/Urbanist-Italic.ttf'),
    UrbanistLight: require('../assets/fonts/Urbanist-Light.ttf'),
    UrbanistLightItalic: require('../assets/fonts/Urbanist-LightItalic.ttf'),
    UrbanistMedium: require('../assets/fonts/Urbanist-Medium.ttf'),
    UrbanistMediumItalic: require('../assets/fonts/Urbanist-MediumItalic.ttf'),
    UrbanistRegular: require('../assets/fonts/Urbanist-Regular.ttf'),
    UrbanistSemiBold: require('../assets/fonts/Urbanist-SemiBold.ttf'),
    UrbanistSemiBoldItalic: require('../assets/fonts/Urbanist-SemiBoldItalic.ttf'),
    UrbanistThin: require('../assets/fonts/Urbanist-Thin.ttf'),
    UrbanistThinItalic: require('../assets/fonts/Urbanist-ThinItalic.ttf'),

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

  return (
    <AppThemeProvider>
      <RootLayoutNav />
    </AppThemeProvider>
  );
}

function RootLayoutNav() {
  const { theme } = useContext(AppThemeContext);

  const themeColors = theme === 'dark' ? colors.dark : colors.light;
  const navTheme = theme === 'dark' ? DarkTheme : DefaultTheme;
  return (
    <ThemeProvider value={navTheme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: themeColors.background }}
      >
        <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        <ChatProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="index" />
            <Stack.Screen name="chat" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </ChatProvider>
        <Toast />
      </SafeAreaView>
    </ThemeProvider>
  );
}
