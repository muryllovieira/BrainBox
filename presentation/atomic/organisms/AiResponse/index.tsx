import { useThemeColors } from '@/hooks/useThemeColors';
import { fontSizes, radius } from '@/theme';
import { FontAwesome6, SimpleLineIcons } from '@expo/vector-icons';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Markdown from 'react-native-markdown-display';

type AiResponseProps = {
  message: string;
  onPress?: () => void;
  style?: ViewStyle;
  imageSource?: ImageSourcePropType;
};

export const AiResponse = ({
  message,
  onPress,
  style,
  imageSource,
}: AiResponseProps) => {
  const theme = useThemeColors();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ justifyContent: 'space-between', gap: 18 }, style]}
    >
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={imageSource}
          style={{ width: 37, height: 37, borderRadius: radius.xs }}
        />
        <View style={{ flexDirection: 'row', gap: 12 }}>
          <FontAwesome6 size={18} name="copy" color={theme.icon} />
          <SimpleLineIcons size={18} name="share" color={theme.icon} />
        </View>
      </View>

      <Markdown
        style={{
          body: {
            color: theme.text,
            fontSize: fontSizes.medium,
            fontFamily: 'Poppins-Medium',
          },
          strong: {
            fontFamily: 'Poppins-Bold',
            fontWeight: 'bold',
          },
          bullet_list: { marginVertical: 4 },
          list_item: { marginVertical: 2 },
          paragraph: { marginVertical: 0 },
        }}
      >
        {message}
      </Markdown>
    </TouchableOpacity>
  );
};
