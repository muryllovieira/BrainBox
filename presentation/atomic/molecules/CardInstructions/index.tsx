import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { colors, fontSizes, paddings, radius } from '@/theme';
import { StyleSheet, View } from 'react-native';

interface CardInstructionsProps {
  text: string;
}

export const CardInstructions = ({ text }: CardInstructionsProps) => {
  return (
    <View style={styles.container}>
      <CustomText fontType="PoppinsRegular" style={styles.text}>
        {text}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xlarge,
    color: colors.gray[500],
    textAlign: 'center',
    letterSpacing: 0.18,
    padding: paddings.sm,
  },
  container: {
    backgroundColor: colors.gray[300],
    borderRadius: radius.sm,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: paddings.xl,
  },
});
