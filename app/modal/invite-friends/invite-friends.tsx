import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { AppThemeContext } from '@/data';
import { CustomText } from '@/presentation/atomic/atoms';
import { Button } from '@/presentation/atomic/atoms/Button';

import { BaseScreenTemplate } from '@/presentation/atomic/templates';
import { fontSizes } from '@/theme';

export default function InviteFriends() {
  const { theme } = useContext(AppThemeContext);

  return (
    <BaseScreenTemplate
      title="Invite Friends"
      canGoBack
      contentStyle={styles.container}
    >
      <View style={styles.content}>
        <Image
          source={
            theme === 'dark'
              ? require('@/assets/images/IllustrationDark.png')
              : require('@/assets/images/Illustration.png')
          }
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <CustomText
            fontType="PoppinsSemiBold"
            style={{ fontSize: fontSizes.xxxxlarge, textAlign: 'center' }}
          >
            Refer A Friend
          </CustomText>
          <CustomText
            fontType="PoppinsLight"
            style={{ fontSize: fontSizes.xlarge, textAlign: 'center' }}
          >
            Share Your Promo Code & Get $3 For Each Friend
          </CustomText>
        </View>

        <Button text="BrainAiPartnerMR" variant="outlined" rightIcon="copy" />
      </View>
    </BaseScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 64,
    width: '100%',
  },
  image: {
    width: 168,
    height: 246,
  },
  textContainer: {
    gap: 8,
    width: '75%',
  },
});
