// @/presentation/atomic/templates/CustomSplashScreen.tsx
import { AppThemeContext } from '@/data';
import { useThemeColors } from '@/hooks/useThemeColors';
import { CustomText } from '@/presentation/atomic/atoms';
import { fontSizes } from '@/theme';
import React, { useContext } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { BaseScreenTemplate } from '../BaseScreenTemplate';

const { height } = Dimensions.get('window');

export function CustomSplashScreen() {
  const themeColors = useThemeColors();
  const { theme } = useContext(AppThemeContext);

  return (
    <BaseScreenTemplate title="" hideHeader contentStyle={styles.content}>
      <View style={styles.center}>
        <Image
          source={
            theme === 'dark'
              ? require('@/assets/images/LogoDark.png')
              : require('@/assets/images/Logo.png')
          }
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.footer}>
        <CustomText
          fontType="PoppinsMedium"
          style={[styles.brand, { color: themeColors.text }]}
        >
          BrainBox
        </CustomText>
        <CustomText
          fontType="PoppinsLight"
          style={[styles.version, { color: themeColors.subtext }]}
        >
          Version 1.0
        </CustomText>
      </View>
    </BaseScreenTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 120,
    height: 120,
  },
  footer: {
    paddingBottom: height * 0.05,
    alignItems: 'center',
    gap: 4,
  },
  brand: {
    fontSize: fontSizes.xxxlarge,
  },
  version: {
    fontSize: fontSizes.large,
  },
});
