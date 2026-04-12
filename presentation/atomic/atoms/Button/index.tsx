import { colors, fontSizes, paddings } from '@/theme';
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
  let buttonColor: string;
  let buttonTextColor: string;

  switch (variant) {
    case 'delete':
      buttonColor = colors.red[200] as string;
      buttonTextColor = colors.white as string;
      break;
    case 'secondary':
      buttonColor = colors.white as string;
      buttonTextColor = colors.primary as string;
      break;
    case 'outlined':
      buttonColor = colors.gray[200] as string;
      buttonTextColor = colors.black as string;
      break;
    default:
      buttonColor = colors.black as string;
      buttonTextColor = colors.white as string;
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
          borderWidth: variant === 'outlined' ? 2 : 0,
          borderColor: colors.black as string,
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
    width: '100%',
    paddingVertical: paddings.lg,
    paddingHorizontal: paddings.xl,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
  },
  text: {
    fontSize: fontSizes.xlarge,
  },
});
