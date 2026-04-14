import { useThemeColors } from '@/hooks/useThemeColors';
import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { fontSizes, paddings, radius } from '@/theme';
import { StyleSheet, View } from 'react-native';

interface CardInstructionsProps {
  text: string;
}

export const CardInstructions = ({ text }: CardInstructionsProps) => {
  const theme = useThemeColors();

  return (
    <View style={[styles.container, { backgroundColor: theme.surface }]}>
      <CustomText
        fontType="PoppinsRegular"
        style={[styles.text, { color: theme.subtext }]}
      >
        {text}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xlarge,
    textAlign: 'center',
    letterSpacing: 0.18,
    padding: paddings.sm,
  },
  container: {
    borderRadius: radius.sm,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: paddings.xl,
  },
});
