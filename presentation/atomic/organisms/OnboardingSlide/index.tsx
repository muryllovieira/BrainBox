import { paddings, radius } from '@/theme';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';

interface OnboardingSlideProps {
  image: ImageSourcePropType;
}

export function OnboardingSlide({ image }: OnboardingSlideProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={image} style={styles.image} resizeMode="cover" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: paddings.xxxxl,
  },
  imageWrapper: {
    borderRadius: radius.xxl,
    overflow: 'hidden',
    backgroundColor: '#1a1a2e',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
