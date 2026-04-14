import { useThemeColors } from '@/hooks/useThemeColors';
import { NavArrow } from '@/presentation/atomic/atoms/NavArrow';
import { paddings, radius } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface OnboardingNavControlsProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  isLast?: boolean;
}

export function OnboardingNavControls({
  onPrev,
  onNext,
  disablePrev,
}: OnboardingNavControlsProps) {
  const theme = useThemeColors();

  return (
    <View style={[styles.pill, { backgroundColor: theme.background }]}>
      <NavArrow direction="left" onPress={onPrev} disabled={disablePrev} />
      <View style={[styles.divider, { backgroundColor: theme.border }]} />
      <NavArrow direction="right" onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: radius.sm,
    paddingHorizontal: paddings.sm,
    paddingVertical: paddings.xs,
    gap: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: radius.sm,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  divider: {
    width: 1,
    height: 22,

    marginHorizontal: 4,
  },
});
