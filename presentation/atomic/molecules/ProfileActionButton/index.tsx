import { CustomText } from '@/presentation/atomic/atoms';
import { colors, fontSizes } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

type ProfileActionButtonProps = {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'danger';
  showArrow?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
};

export const ProfileActionButton = ({
  title,
  subtitle,
  variant = 'default',
  showArrow = false,
  onPress,
  style,
}: ProfileActionButtonProps) => {
  const isDanger = variant === 'danger';

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
        },
        style,
      ]}
    >
      <View style={{ flexShrink: 1, gap: 4 }}>
        <CustomText
          style={{
            color: isDanger ? colors.red[300] : colors.black,
            fontSize: fontSizes.xlarge,
          }}
          fontType="PoppinsMedium"
        >
          {title}
        </CustomText>

        {subtitle && (
          <CustomText style={{ fontSize: fontSizes.large }}>
            {subtitle}
          </CustomText>
        )}
      </View>

      {showArrow && (
        <MaterialIcons
          size={18}
          name="arrow-forward-ios"
          color={isDanger ? colors.red[300] : colors.gray[500]}
        />
      )}
    </TouchableOpacity>
  );
};
