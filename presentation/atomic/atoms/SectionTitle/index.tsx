import { colors, fontSizes } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CustomText } from '../CustomText';

interface SectionTitleProps {
  title: string;
  canGoBack?: boolean;
  settingsIcon?: boolean;
}

export const SectionTitle: FC<SectionTitleProps> = ({
  title,
  canGoBack = true,
  settingsIcon = true,
}) => {
  const handleBack = () => {
    router.back();
  };

  const handleProfile = () => {
    router.navigate('/profile');
  };

  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: canGoBack
            ? settingsIcon
              ? 'space-between'
              : 'flex-start'
            : 'center',
        },
      ]}
    >
      {canGoBack && (
        <TouchableOpacity onPress={handleBack}>
          <Ionicons
            back
            name="chevron-back-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
      )}
      <View style={styles.center}>
        <CustomText fontType="PoppinsSemiBold" style={styles.title}>
          {title}
        </CustomText>
      </View>
      <View style={styles.side}>
        {settingsIcon && (
          <TouchableOpacity onPress={handleProfile}>
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color={colors.gray[500]}
            />
          </TouchableOpacity>
        )}
      </View>
      {settingsIcon && <View />}
      {canGoBack && <View />}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: fontSizes.xxlarge,
    color: colors.black,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  side: {
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.gray[100],
  },
});
