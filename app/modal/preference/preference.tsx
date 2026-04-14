import { router } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import { AppThemeContext } from '@/data';
import { ProfileActionButton } from '@/presentation/atomic/molecules';
import { BaseScreenTemplate } from '@/presentation/atomic/templates';
import { paddings } from '@/theme';

export default function Preferences() {
  const { themeMode, setTheme } = useContext(AppThemeContext);

  const handleThemeChange = () => {
    if (themeMode === 'light') setTheme('dark');
    else if (themeMode === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getThemeSubtitle = () => {
    if (themeMode === 'system') return 'Following the cell phone system theme';
    return themeMode === 'light' ? 'Light mode active' : 'Dark mode active';
  };

  return (
    <BaseScreenTemplate title="Preference" canGoBack>
      <View style={styles.listContainer}>
        <ProfileActionButton
          title="Account Information"
          subtitle="Change your Account information"
          onPress={() =>
            router.navigate('/modal/edit-information/edit-information')
          }
          iconName="person"
        />

        <ProfileActionButton
          title="Password"
          subtitle="Change your Password"
          onPress={() => {}}
          iconName="eye"
        />

        <ProfileActionButton
          title="Payment Methods"
          subtitle="Add Your Credit / Credit Cards"
          onPress={() => {}}
          iconName="wallet"
        />

        <ProfileActionButton
          title="Invite Your Friends"
          subtitle="Get $3 For Each Invitation!"
          onPress={() =>
            router.navigate('/modal/invite-friends/invite-friends')
          }
          iconName="pencil-sharp"
        />

        <ProfileActionButton
          title="Theme Colour"
          subtitle={getThemeSubtitle()}
          onPress={handleThemeChange}
          iconName="settings-outline"
        />
      </View>
    </BaseScreenTemplate>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    gap: 40,
    paddingVertical: paddings.xl,
  },
});
