import { SectionTitle } from '@/presentation/atomic/atoms';
import {
  AccountOwner,
  ProfileActionButton,
} from '@/presentation/atomic/molecules';
import { colors, paddings } from '@/theme';
import { router } from 'expo-router';
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
      <View style={{ gap: 30 }}>
        <ProfileActionButton
          title="Preferences"
          onPress={() => router.navigate('/modal/preference')}
          showArrow={true}
          style={styles.options}
          iconName="settings-outline"
          iconColor="black"
        />
        <ProfileActionButton
          title="Account Security"
          subtitle="Excellent"
          onPress={() => {}}
          showArrow={true}
          style={styles.options}
          iconName="lock-open-outline"
          iconColor="black"
        />
        <ProfileActionButton
          title="Customer Support"
          onPress={() => {}}
          showArrow={true}
          style={styles.options}
          iconName="help-circle-outline"
          iconColor="black"
        />
        <ProfileActionButton
          title="Logout"
          onPress={() => {}}
          showArrow={false}
          style={styles.options}
          iconName="log-out-outline"
          iconColor="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: paddings.xxxl,
    gap: 61,
  },
  options: {
    width: '100%',
  },
});
