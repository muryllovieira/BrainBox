import { colors, fontSizes } from '@/theme';
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
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      {label && <CustomText style={styles.inputLabel}>{label}</CustomText>}
      <View style={styles.container}>
        {iconSide === 'left' && (
          <TouchableOpacity onPress={onPressIcon} disabled={!onPressIcon}>
            <MaterialIcons
              style={[
                styles.icon,
                iconColor ? { color: iconColor as string } : null,
              ]}
              size={24}
              name={iconName}
            />
          </TouchableOpacity>
        )}

        <TextInput
          {...rest}
          style={styles.input}
          placeholderTextColor={colors.gray[500]}
        />

        {iconSide === 'right' && (
          <TouchableOpacity onPress={onPressIcon} disabled={!onPressIcon}>
            <MaterialIcons
              style={[
                styles.icon,
                iconColor ? { color: colors[iconColor] as string } : null,
              ]}
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
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.white,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  input: {
    color: colors.gray[700],
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
    color: colors.black,
    fontSize: fontSizes.large,
  },
});
