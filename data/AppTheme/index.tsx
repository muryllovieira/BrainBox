import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface AppThemeContextData {
  theme: 'light' | 'dark';
  themeMode: ThemeMode;
  setTheme: (mode: ThemeMode) => Promise<void>;
}

export const AppThemeContext = createContext<AppThemeContextData>(
  {} as AppThemeContextData,
);

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('system');
  const [isLoaded, setIsLoaded] = useState(false);

  const theme = themeMode === 'system' ? systemScheme || 'light' : themeMode;

  useEffect(() => {
    AsyncStorage.getItem('user_theme').then(saved => {
      if (saved === 'light' || saved === 'dark' || saved === 'system') {
        setThemeModeState(saved as ThemeMode);
      }
      setIsLoaded(true);
    });
  }, []);

  const setTheme = async (mode: ThemeMode) => {
    setThemeModeState(mode);
    await AsyncStorage.setItem('user_theme', mode);
  };

  if (!isLoaded) return null;

  return (
    <AppThemeContext.Provider value={{ theme, themeMode, setTheme }}>
      {children}
    </AppThemeContext.Provider>
  );
};
