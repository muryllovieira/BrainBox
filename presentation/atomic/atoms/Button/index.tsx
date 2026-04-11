import { colors, fontSizes, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
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

type IconNames = keyof typeof MaterialIcons.glyphMap;

type ButtonProps = TouchableOpacityProps & {
  text: string;
  variant?: 'delete' | 'default' | 'secondary' | 'outlined';
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
  let buttonColor;
  let buttonTextColor;

  switch (variant) {
    case 'default':
      buttonColor = colors.primary;
      buttonTextColor = colors.white;
      break;
    case 'delete':
      buttonColor = colors.red;
      buttonTextColor = colors.white;
      break;
    case 'secondary':
      buttonColor = colors.white;
      buttonTextColor = colors.primary;
    case 'outlined':
      buttonColor = 'transparent';
      buttonTextColor = colors.primary;
    default:
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
          backgroundColor: colors.black,
          borderWidth: variant === 'outlined' ? 1 : 0,
          borderColor: colors.primary,
        },
        containerStyle,
      ]}
    >
      {!isLoading ? (
        <>
          {leftIcon && (
            <MaterialIcons size={24} color={buttonTextColor} name={leftIcon} />
          )}
          <CustomText
            fontType="PoppinsMedium"
            style={[styles.text, { color: buttonTextColor }]}
          >
            {text}
          </CustomText>
          {rightIcon && (
            <MaterialIcons size={24} color={buttonTextColor} name={rightIcon} />
          )}
        </>
      ) : (
        <ActivityIndicator color={colors.white} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.sm,
    flexDirection: 'row',
    gap: 16,
  },
  text: {
    fontSize: fontSizes.xlarge,
  },
});
