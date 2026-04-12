import { CustomText } from '@/presentation/atomic/atoms';
import { colors, fontSizes } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

type IconNames = keyof typeof Ionicons.glyphMap;

type ProfileActionButtonProps = {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'danger';
  showArrow?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  iconName?: IconNames;
  iconColor?: keyof typeof colors;
  progress?: number;
};

export const ProfileActionButton = ({
  title,
  subtitle,
  variant = 'default',
  showArrow = false,
  onPress,
  style,
  iconName,
  iconColor,
  progress,
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
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 24 }}>
        <Ionicons
          style={iconColor ? { color: iconColor } : { color: colors.gray[600] }}
          size={32}
          name={iconName}
        />
        <View style={{ flexShrink: 1, gap: 12 }}>
          <CustomText
            style={{
              color: isDanger ? colors.red[300] : colors.black,
              fontSize: fontSizes.xxlarge,
            }}
            fontType="PoppinsMedium"
          >
            {title}
          </CustomText>

          {subtitle && (
            <View style={{ gap: 8 }}>
              {progress && (
                <View
                  style={{
                    height: 6,
                    borderRadius: 99,
                    backgroundColor: colors.gray[200],
                    width: '100%',
                  }}
                >
                  <View
                    style={{
                      height: 6,
                      borderRadius: 99,
                      backgroundColor: colors.black,
                      width: `${progress * 100}%`,
                    }}
                  />
                </View>
              )}
              <CustomText
                style={{ fontSize: fontSizes.large, color: colors.gray[500] }}
                fontType="PoppinsRegular"
              >
                {subtitle}
              </CustomText>
            </View>
          )}
        </View>
      </View>

      {showArrow && (
        <Ionicons
          size={18}
          name="chevron-forward"
          color={isDanger ? colors.red[300] : colors.gray[500]}
        />
      )}
    </TouchableOpacity>
  );
};
