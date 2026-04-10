import { colors, fontSizes, radius } from '@/theme';
import { FC } from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { CustomText } from '../../atoms';

interface AccountOwnerProps {
  name: string;
  email?: string;
  avatar?: ImageSourcePropType;
}

export const AccountOwner: FC<AccountOwnerProps> = ({
  name,
  email,
  avatar,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        {avatar ? (
          <Image source={avatar} style={styles.avatar} />
        ) : (
          <View style={styles.avatarFallback} />
        )}
      </View>
      <View>
        <CustomText fontType="PoppinsSemiBold" style={styles.name}>
          {name}
        </CustomText>
        {email && (
          <CustomText fontType="PoppinsRegular" style={styles.email}>
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
  avatarWrapper: {
    width: 96,
    height: 96,
    borderRadius: radius.max,
    overflow: 'hidden',
    backgroundColor: colors.gray[200],
  },
  avatar: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarFallback: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.gray[300],
  },
  name: {
    fontSize: fontSizes.xxxxlarge,
    color: colors.black,
    textAlign: 'center',
  },
  email: {
    fontSize: fontSizes.large,
    color: colors.gray[500],
    textAlign: 'center',
  },
});
