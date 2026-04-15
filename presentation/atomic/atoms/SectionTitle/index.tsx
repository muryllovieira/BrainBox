import { useThemeColors } from '@/hooks/useThemeColors';
import { fontSizes, paddings, radius } from '@/theme';
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
  const theme = useThemeColors();

  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {canGoBack && (
          <TouchableOpacity
            style={[styles.backButton, { backgroundColor: theme.surface }]}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color={theme.icon}
            />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.center}>
        <CustomText
          fontType="PoppinsMedium"
          style={[styles.title, { color: theme.text }]}
          numberOfLines={1}
        >
          {title}
        </CustomText>
      </View>

      <View style={[styles.side, { alignItems: 'flex-end' }]}>
        {settingsIcon && (
          <TouchableOpacity
            style={styles.sideButton}
            onPress={() => router.navigate('/(main)/profile/profile')}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color={theme.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: paddings.xxl,
    height: 60,
  },
  side: {
    width: 45,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: paddings.sm,
  },
  title: {
    fontSize: fontSizes.xxxlarge,
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  sideButton: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
