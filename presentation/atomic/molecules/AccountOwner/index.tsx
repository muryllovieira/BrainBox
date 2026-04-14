import { useThemeColors } from '@/hooks/useThemeColors';
import { colors, fontSizes, radius } from '@/theme';
import { FC } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { CustomText } from '../../atoms';

interface AccountOwnerProps {
  name: string;
  email?: string;
  avatar?: ImageSourcePropType;
  isOnline?: boolean;
}

export const AccountOwner: FC<AccountOwnerProps> = ({
  name,
  email,
  avatar,
  isOnline = false,
}) => {
  const theme = useThemeColors();

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <View
          style={[styles.avatarWrapper, { backgroundColor: theme.surface }]}
        >
          {avatar ? (
            <Image source={avatar} style={styles.avatar} />
          ) : (
            <View
              style={[styles.avatarFallback, { backgroundColor: theme.border }]}
            />
          )}
        </View>
        {isOnline && <View style={styles.onlineDot} />}
      </View>

      <View>
        <CustomText fontType="PoppinsSemiBold" style={styles.name}>
          {name}
        </CustomText>
        {email && (
          <CustomText
            fontType="PoppinsRegular"
            style={[styles.email, { color: theme.subtext }]}
          >
            {email}
          </CustomText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarWrapper: {
    width: 96,
    height: 96,
    borderRadius: radius.max,
    overflow: 'hidden',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: radius.max,
    backgroundColor: colors.green[500],
    borderWidth: 2,
    borderColor: 'white',
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarFallback: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: fontSizes.xxxxlarge,
    textAlign: 'center',
  },
  email: {
    fontSize: fontSizes.large,
    textAlign: 'center',
  },
});
