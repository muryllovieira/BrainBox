import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Button } from '@/presentation/atomic/atoms/Button';
import { EditInput } from '@/presentation/atomic/molecules';
import { BaseScreenTemplate } from '@/presentation/atomic/templates';
import { paddings } from '@/theme';

export default function EditInformation() {
  return (
    <BaseScreenTemplate
      title="Edit Information"
      canGoBack
      contentStyle={styles.container}
    >
      <View style={styles.formContainer}>
        <View style={styles.inputGap}>
          <EditInput
            label="Full Name"
            leftIconName="person-outline"
            rightIconName="edit"
          />
          <EditInput
            label="Email"
            leftIconName="mail-outline"
            rightIconName="edit"
          />
          <EditInput
            label="Password"
            leftIconName="lock-outline"
            rightIconName="edit"
          />
        </View>

        <Button text="SAVE CHANGES" />
      </View>
    </BaseScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddings.xxxxl,
    justifyContent: 'center',
  },
  formContainer: {
    gap: 40,
  },
  inputGap: {
    gap: 24,
  },
});
