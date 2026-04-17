import { useThemeColors } from '@/hooks/useThemeColors';
import { colors, fontSizes, paddings, radius } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { CustomText } from '../CustomText';

type IconNames = keyof typeof Ionicons.glyphMap;

type ButtonProps = TouchableOpacityProps & {
  text: string;
  variant?: 'delete' | 'default' | 'secondary' | 'outlined' | 'text';
  isLoading?: boolean;
  leftIcon?: IconNames;
  rightIcon?: IconNames;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Button: FC<ButtonProps> = ({
  text,
  variant = 'default',
  leftIcon,
  containerStyle,
  isLoading,
  rightIcon,
  ...rest
}) => {
  let buttonColor: string;
  let buttonTextColor: string;
  let borderColor: string;

  const theme = useThemeColors();

  switch (variant) {
    case 'delete':
      buttonColor = colors.red[200] as string;
      buttonTextColor = colors.white as string;
      borderColor = colors.red[200] as string;
      break;
    case 'secondary':
      buttonColor = theme.background;
      buttonTextColor = colors.primary;
      borderColor = colors.primary;
      break;
    case 'outlined':
      buttonColor = theme.surface;
      buttonTextColor = theme.text;
      borderColor = theme.text;
      break;
    case 'text':
      buttonColor = 'transparent';
      buttonTextColor = colors.gray[500] as string;
      borderColor = colors.gray[600] as string;
      break;
    default:
      buttonColor = theme.text;
      buttonTextColor = theme.background;
      borderColor = theme.text;
      break;
  }

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.7}
      disabled={isLoading || rest.disabled}
      style={[
        styles.container,
        {
          backgroundColor: buttonColor,
          borderWidth: variant === 'outlined' || variant === 'text' ? 2 : 0,
          borderColor: borderColor,
          justifyContent: leftIcon || rightIcon ? 'space-between' : 'center',
        },
        containerStyle,
      ]}
    >
      {!isLoading ? (
        <>
          {leftIcon && (
            <Ionicons size={24} color={buttonTextColor} name={leftIcon} />
          )}
          <CustomText
            fontType="PoppinsMedium"
            style={[styles.text, { color: buttonTextColor }]}
          >
            {text}
          </CustomText>
          {rightIcon && (
            <Ionicons size={24} color={buttonTextColor} name={rightIcon} />
          )}
        </>
      ) : (
        <ActivityIndicator color={colors.white as string} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    paddingVertical: paddings.lg,
    paddingHorizontal: paddings.xl,
    alignItems: 'center',
    borderRadius: radius.sm,
    flexDirection: 'row',
    gap: 12,
  },
  text: {
    fontSize: fontSizes.xlarge,
    flexShrink: 1,
  },
});
