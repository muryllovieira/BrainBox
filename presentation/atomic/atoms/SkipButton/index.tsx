import { colors, fontFamily, fontSizes } from '@/theme';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface SkipButtonProps {
  onPress: () => void;
}

export function SkipButton({ onPress }: SkipButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <Text style={styles.label}>Skip</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
  label: {
    fontFamily: fontFamily.poppins['medium'],
    fontSize: fontSizes.xxlarge,
    color: colors.gray[600],
  },
});
