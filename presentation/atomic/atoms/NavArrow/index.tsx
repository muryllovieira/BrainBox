import { useThemeColors } from '@/hooks/useThemeColors';
import { radius } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

interface NavArrowProps {
  direction: 'left' | 'right';
  onPress: () => void;
  disabled?: boolean;
}

export function NavArrow({ direction, onPress, disabled }: NavArrowProps) {
  const theme = useThemeColors();
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Ionicons
        name={direction === 'left' ? 'arrow-back' : 'arrow-forward'}
        size={20}
        color={theme.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: radius.max,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.2,
  },
});
