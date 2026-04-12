import { SectionTitle } from '@/presentation/atomic/atoms';
import { ProfileActionButton } from '@/presentation/atomic/molecules';
import { colors, paddings } from '@/theme';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Preferences() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Preference" canGoBack settingsIcon={false} />
      <View style={{ gap: 50, paddingHorizontal: paddings.xxxl }}>
        <ProfileActionButton
          title="Account Information"
          subtitle="Change your Account information"
          onPress={() => router.navigate('/modal/edit-information')}
          showArrow={false}
          style={styles.options}
          iconName="person"
          iconColor="black"
        />
        <ProfileActionButton
          title="Password"
          subtitle="Change your Password"
          onPress={() => {}}
          showArrow={false}
          style={styles.options}
          iconName="eye"
          iconColor="black"
        />
        <ProfileActionButton
          title="Payment Methods"
          subtitle="Add Your Credit / Credit Cards"
          onPress={() => {}}
          showArrow={false}
          style={styles.options}
          iconName="wallet"
          iconColor="black"
        />
        <ProfileActionButton
          title="Invite Your Friends"
          subtitle="Get $3 For Each Invitation!"
          onPress={() => router.navigate('/modal/invite-friends')}
          showArrow={false}
          style={styles.options}
          iconName="pencil-sharp"
          iconColor="black"
        />
        <ProfileActionButton
          title="Theme Colour"
          subtitle="Change Your Theme Colour"
          onPress={() => {}}
          showArrow={false}
          style={styles.options}
          iconName="settings-outline"
          iconColor="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    gap: 72,
  },
  options: {
    width: '100%',
  },
});
