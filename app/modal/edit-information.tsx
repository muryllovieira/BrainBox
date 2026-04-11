import { SectionTitle } from '@/presentation/atomic/atoms';
import { Button } from '@/presentation/atomic/atoms/Button';
import { EditInput } from '@/presentation/atomic/molecules';
import { colors, paddings } from '@/theme';
import { StyleSheet, View } from 'react-native';

export default function EditInformation() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Edit Information" canGoBack settingsIcon={false} />
      <View style={{ gap: 24 }}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: paddings.xxxl,
    gap: 72,
  },
  options: {
    width: '100%',
  },
});
