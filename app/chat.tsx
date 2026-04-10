import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { SectionTitle } from '@/presentation/atomic/atoms/SectionTitle';
import { CardInstructions, InputIcon } from '@/presentation/atomic/molecules';
import { colors, fontSizes, paddings } from '@/theme';
import { StyleSheet, View } from 'react-native';

export default function Chat() {
  return (
    <View style={styles.container}>
      <SectionTitle title="Health" canGoBack settingsIcon />

      <CustomText style={styles.title} fontType="PoppinsBold">
        BrainBox
      </CustomText>
      <View style={{ gap: 12 }}>
        <CardInstructions text="Remembers what user said earlier in the conversation" />
        <CardInstructions text="Allows user to provide. follow-up corrections With Ai" />
        <CardInstructions text="Limited knowledge of world and events after 2021" />
        <CardInstructions text="May occasionally generate incorrect information" />
        <CardInstructions text="May occasionally produce harmful instructions or biased content" />
      </View>
      <InputIcon iconName="send" placeholder="Send a message." />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 32,
    backgroundColor: colors.white,
    paddingHorizontal: paddings.xxxl,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: fontSizes.xxxxxlarge,
    color: '#757474',
  },
});
