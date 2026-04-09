import { NavArrow } from '@/presentation/atomic/atoms/NavArrow';
import { colors, paddings, radius } from '@/theme';
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
  return (
    <View style={styles.pill}>
      <NavArrow direction="left" onPress={onPrev} disabled={disablePrev} />
      <View style={styles.divider} />
      <NavArrow direction="right" onPress={onNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radius.max,
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
    backgroundColor: colors.gray[300],
    marginHorizontal: 4,
  },
});
