import { useContext } from 'react';

import { AppThemeContext } from '@/data';
import { colors } from '@/theme';

export function useThemeColors() {
  const { theme } = useContext(AppThemeContext);
  return theme === 'dark' ? colors.dark : colors.light;
}
