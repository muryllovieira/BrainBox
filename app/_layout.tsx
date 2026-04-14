import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import 'react-native-reanimated';

import { AppThemeContext, AppThemeProvider } from '@/data';
import { ChatProvider } from '@/data/ChatBot';
import { CustomSplashScreen } from '@/presentation/atomic/templates';
import { colors } from '@/theme';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'onboarding',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <AppThemeProvider>
      <RootLayoutNav />
    </AppThemeProvider>
  );
}

function RootLayoutNav() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { theme } = useContext(AppThemeContext);

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

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();

      const timeout = setTimeout(() => {
        setAppIsReady(true);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [loaded, error]);

  if (!appIsReady) {
    return <CustomSplashScreen />;
  }

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
            <Stack.Screen name="(main)/index" />
            <Stack.Screen name="(main)/chat/chat" />
            <Stack.Screen name="(main)/profile/profile" />
            <Stack.Screen
              name="modal/edit-information/edit-information"
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="modal/invite-friends/invite-friends"
              options={{ presentation: 'modal' }}
            />
            <Stack.Screen
              name="modal/preference/preference"
              options={{ presentation: 'modal' }}
            />
          </Stack>
        </ChatProvider>
        <Toast />
      </SafeAreaView>
    </ThemeProvider>
  );
}
