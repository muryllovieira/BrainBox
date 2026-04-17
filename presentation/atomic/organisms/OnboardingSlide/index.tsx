import { useThemeColors } from '@/hooks/useThemeColors';
import { radius } from '@/theme';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';

interface OnboardingSlideProps {
  image: ImageSourcePropType;
}

const { width } = Dimensions.get('window');

export function OnboardingSlide({ image }: OnboardingSlideProps) {
  const theme = useThemeColors();

  const isDark = theme.background !== '#FFFFFF' && theme.background !== '#fff';
  const shadowColor = isDark ? '#ffffff' : '#000000';

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.shadowBox,
          { shadowColor, backgroundColor: isDark ? '#1a1a1a' : '#fff' },
        ]}
      >
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} resizeMode="cover" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadowBox: {
    width: width * 0.8,
    aspectRatio: 0.85,
    borderRadius: radius.xxl,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.15,
    shadowRadius: radius.xxl,
    elevation: 15,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: radius.xxl,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
