import { SectionTitle } from '@/presentation/atomic/atoms';
import { colors, paddings } from '@/theme';
import { StyleSheet, View } from 'react-native';

export default function EditInformation() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Edit Information" canGoBack settingsIcon={false} />
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
