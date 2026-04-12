import { CustomText, SectionTitle } from '@/presentation/atomic/atoms';
import { Button } from '@/presentation/atomic/atoms/Button';
import { colors, fontSizes, paddings } from '@/theme';
import { Image, StyleSheet, View } from 'react-native';

export default function InviteFriends() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Invite Friends" canGoBack settingsIcon={false} />
      <View
        style={{
          paddingHorizontal: paddings.xxxl,
          alignItems: 'center',
          gap: 64,
        }}
      >
        <Image
          source={require('@/assets/images/Illustration.png')}
          style={styles.image}
        />

        <View style={{ gap: 8, width: '75%' }}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    gap: 64,
  },
  image: {
    width: 168,
    height: 246,
  },
});
