import { colors, fontSizes, radius } from '@/theme';
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
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons
            back
            name="chevron-back-outline"
            size={24}
            color={colors.black}
          />
        </TouchableOpacity>
      )}
      <View style={styles.center}>
        <CustomText fontType="PoppinsMedium" style={styles.title}>
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
    fontSize: fontSizes.xxxlarge,
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
    width: 45,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#D3D1D8',
    shadowOffset: { width: 5.92, height: 11.84 },
    shadowOpacity: 0.3,
    shadowRadius: 23.68 / 2,
    elevation: 8,
  },
});
