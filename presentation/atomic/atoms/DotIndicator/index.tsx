import { colors } from '@/theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface DotIndicatorProps {
  total: number;
  activeIndex: number;
}

function Dot({ isActive }: { isActive: boolean }) {
  const animatedStyle = useAnimatedStyle(() => ({
    width: withTiming(isActive ? 24 : 8, { duration: 300 }),
    backgroundColor: withTiming(isActive ? colors.black : colors.gray[300], {
      duration: 300,
    }),
  }));

  return <Animated.View style={[styles.dot, animatedStyle]} />;
}

export function DotIndicator({ total, activeIndex }: DotIndicatorProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <Dot key={i} isActive={i === activeIndex} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 99,
  },
});
