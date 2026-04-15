import { useThemeColors } from '@/hooks/useThemeColors';
import { colors, fontSizes, paddings, radius } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { FC } from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { CustomText } from '../../atoms';

type IconNames = keyof typeof MaterialIcons.glyphMap;

type InputIconProps = TextInputProps & {
  iconSide?: 'left' | 'right';
  iconName: IconNames;
  label?: string;
  inputStyle?: StyleProp<ViewStyle>;
  iconColor?: keyof typeof colors;
  onPressIcon?: () => void;
  disabled?: boolean;
};

export const InputIcon: FC<InputIconProps> = ({
  iconSide = 'right',
  iconName,
  inputStyle,
  iconColor,
  label,
  onPressIcon,
  disabled,
  ...rest
}) => {
  const theme = useThemeColors();
  const resolvedIconColor = iconColor
    ? (colors[iconColor] as string)
    : theme.subtext;

  return (
    <View style={[styles.inputContainer, inputStyle]}>
      {label && (
        <CustomText style={[styles.inputLabel, { color: theme.text }]}>
          {label}
        </CustomText>
      )}
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
          },
        ]}
      >
        {iconSide === 'left' && (
          <TouchableOpacity onPress={onPressIcon} disabled={!onPressIcon}>
            <MaterialIcons
              style={[styles.icon, { color: resolvedIconColor }]}
              size={24}
              name={iconName}
            />
          </TouchableOpacity>
        )}
        <TextInput
          {...rest}
          style={[styles.input, { color: theme.text }]}
          placeholderTextColor={theme.subtext}
        />
        {iconSide === 'right' && (
          <TouchableOpacity onPress={onPressIcon} disabled={!onPressIcon}>
            <MaterialIcons
              style={[styles.icon, { color: resolvedIconColor }]}
              size={24}
              name={iconName}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 46,
    paddingHorizontal: paddings.md,
    borderRadius: radius.sm,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  input: {
    fontSize: fontSizes.xlarge,
    flex: 1,
    fontFamily: 'UrbanistRegular',
    letterSpacing: 0.2,
  },
  icon: {
    color: colors.gray[600],
  },
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: fontSizes.large,
  },
});
