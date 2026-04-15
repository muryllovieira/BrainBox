import { useThemeColors } from '@/hooks/useThemeColors';
import { CustomText } from '@/presentation/atomic/atoms';
import { colors, fontSizes, radius } from '@/theme';
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
  const theme = useThemeColors();

  const isDanger = variant === 'danger';
  const resolvedIconColor = iconColor
    ? (colors[iconColor] as string)
    : theme.subtext;

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
          style={{ color: resolvedIconColor }}
          size={32}
          name={iconName}
        />
        <View style={{ flexShrink: 1, gap: 12 }}>
          <CustomText
            style={{
              color: isDanger ? colors.red[300] : theme.text,
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
                    borderRadius: radius.max,
                    backgroundColor: theme.surface,
                    width: '100%',
                  }}
                >
                  <View
                    style={{
                      height: 6,
                      borderRadius: radius.max,
                      backgroundColor: theme.text,
                      width: `${progress * 100}%`,
                    }}
                  />
                </View>
              )}
              <CustomText
                style={{ fontSize: fontSizes.large, color: theme.subtext }}
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
          color={isDanger ? colors.red[300] : theme.subtext}
        />
      )}
    </TouchableOpacity>
  );
};
