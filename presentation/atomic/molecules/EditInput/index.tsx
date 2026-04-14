import { useThemeColors } from '@/hooks/useThemeColors';
import { colors, fontSizes, paddings, radius } from '@/theme';
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

type IconNamesMaterial = keyof typeof MaterialIcons.glyphMap;
type IconNamesFontAwesome = keyof typeof FontAwesome6.glyphMap;

type EditInputProps = TextInputProps & {
  leftIconName: IconNamesMaterial;
  rightIconName: IconNamesFontAwesome;
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
};

export const EditInput: React.FC<EditInputProps> = ({
  leftIconName,
  rightIconName,
  label,
  containerStyle,
  style,
  ...props
}) => {
  const theme = useThemeColors();
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={[styles.container, { backgroundColor: theme.surface }]}>
        {leftIconName && (
          <MaterialIcons name={leftIconName} size={24} color={theme.subtext} />
        )}
        <TextInput
          {...props}
          style={[styles.input, { color: theme.text }, style]}
          placeholder={label.toUpperCase()}
          placeholderTextColor={theme.subtext}
        />
        {rightIconName && (
          <FontAwesome6 name={rightIconName} size={20} color={theme.subtext} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  label: {
    fontSize: fontSizes.xlarge,
    color: colors.black,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius: radius.sm,
    paddingHorizontal: paddings.xxl,
    height: 68,
    gap: 28,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.xlarge,

    fontFamily: 'PoppinsSemiBold',
    letterSpacing: 0.5,
  },
});
