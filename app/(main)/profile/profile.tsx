import { SectionTitle } from '@/presentation/atomic/atoms';
import {
  AccountOwner,
  ProfileActionButton,
} from '@/presentation/atomic/molecules';
import { TabBar } from '@/presentation/atomic/organisms';
import { colors, paddings } from '@/theme';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Profile" canGoBack settingsIcon={false} />
      <View
        style={{
          paddingHorizontal: paddings.xxxl,
          gap: 40,
        }}
      >
        <AccountOwner
          name="Tom Hillson"
          email="Tomhill@mail.com"
          avatar={require('@/assets/images/onboarding-1.png')}
        />
        <View style={{ gap: 30 }}>
          <ProfileActionButton
            title="Preferences"
            onPress={() => router.navigate('/modal/preference/preference')}
            showArrow={true}
            style={styles.options}
            iconName="settings-outline"
            iconColor="black"
          />
          <ProfileActionButton
            title="Account Security"
            subtitle="Excellent"
            progress={0.6}
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
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  options: {
    width: '100%',
  },
});
