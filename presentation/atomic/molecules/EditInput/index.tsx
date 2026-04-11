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
  return (
    <View style={[styles.wrapper, containerStyle]}>
      <View style={styles.container}>
        {leftIconName && (
          <MaterialIcons
            name={leftIconName}
            size={24}
            color={colors.gray[500]}
          />
        )}

        <TextInput
          {...props}
          style={[styles.input, style]}
          placeholder={label.toUpperCase()}
          placeholderTextColor={colors.gray[500]}
        />

        {rightIconName && (
          <FontAwesome6
            name={rightIconName}
            size={20}
            color={colors.gray[500]}
          />
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
    backgroundColor: colors.gray[100],
    borderRadius: radius.sm,
    paddingHorizontal: paddings.xxl,
    height: 68,
    gap: 28,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.xlarge,
    color: colors.gray[700],
    fontFamily: 'PoppinsSemiBold',
    letterSpacing: 0.5,
  },
});
