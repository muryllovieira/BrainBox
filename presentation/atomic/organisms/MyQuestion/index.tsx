import { CustomText } from '@/presentation/atomic/atoms';
import { colors, fontSizes, radius } from '@/theme';
import { FontAwesome6 } from '@expo/vector-icons';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type MyQuestProps = {
  message: string;
  showEdit?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  imageSource?: ImageSourcePropType;
};

export const MyQuest = ({
  message,
  showEdit = false,
  onPress,
  style,
  imageSource,
}: MyQuestProps) => {
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
        <Image
          source={imageSource}
          style={{ width: 37, height: 37, borderRadius: radius.xs }}
        />
        <View style={{ flexShrink: 1, gap: 12 }}>
          <CustomText
            style={{
              color: colors.black,
              fontSize: fontSizes.medium,
            }}
            fontType="PoppinsMedium"
          >
            {message}
          </CustomText>
        </View>
      </View>

      {showEdit && (
        <FontAwesome6 size={18} name="edit" color={colors.iconColor} />
      )}
    </TouchableOpacity>
  );
};
