import { SectionTitle } from '@/presentation/atomic/atoms';
import {
  AccountOwner,
  ProfileActionButton,
} from '@/presentation/atomic/molecules';
import { colors, paddings } from '@/theme';
import { StyleSheet, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Profile" canGoBack settingsIcon={false} />
      <AccountOwner
        name="Tom Hillson"
        email="Tomhill@mail.com"
        avatar={require('../assets/images/onboarding-1.png')}
      />
      <ProfileActionButton
        title="Edit Profile"
        onPress={() => {}}
        showArrow={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: paddings.xxxl,
  },
});
