import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  AccountOwner,
  ProfileActionButton,
} from '@/presentation/atomic/molecules';
import { TabBar } from '@/presentation/atomic/organisms';
import { BaseScreenTemplate } from '@/presentation/atomic/templates';

export default function Profile() {
  return (
    <View style={styles.container}>
      <BaseScreenTemplate title="Profile" canGoBack>
        <View style={styles.content}>
          <AccountOwner
            name="Tom Hillson"
            email="Tomhill@mail.com"
            avatar={require('@/assets/images/onboarding-1.png')}
          />

          <View style={styles.listGap}>
            <ProfileActionButton
              title="Preferences"
              onPress={() => router.navigate('/modal/preference/preference')}
              showArrow={true}
              iconName="settings-outline"
            />
            <ProfileActionButton
              title="Account Security"
              subtitle="Excellent"
              progress={0.6}
              onPress={() => {}}
              showArrow={true}
              iconName="lock-open-outline"
            />
            <ProfileActionButton
              title="Customer Support"
              onPress={() => {}}
              showArrow={true}
              iconName="help-circle-outline"
            />
            <ProfileActionButton
              title="Logout"
              onPress={() => {}}
              showArrow={false}
              iconName="log-out-outline"
            />
          </View>
        </View>
      </BaseScreenTemplate>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    gap: 40,
  },
  listGap: {
    gap: 30,
  },
});
