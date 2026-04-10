import { FC } from 'react';
import { Text, TextProps } from 'react-native';

type CustomTextProps = TextProps & {
  fontType?:
    | 'PoppinsBlack'
    | 'PoppinsBold'
    | 'PoppinsExtraBold'
    | 'PoppinsExtraLight'
    | 'PoppinsLight'
    | 'PoppinsMedium'
    | 'PoppinsRegular'
    | 'PoppinsSemiBold'
    | 'PoppinsThin'
    | 'UrbanistBlack'
    | 'UrbanistBlackItalic'
    | 'UrbanistBold'
    | 'UrbanistBoldItalic'
    | 'UrbanistExtraBold'
    | 'UrbanistExtraBoldItalic'
    | 'UrbanistExtraLight'
    | 'UrbanistExtraLightItalic'
    | 'UrbanistItalic'
    | 'UrbanistLight'
    | 'UrbanistLightItalic'
    | 'UrbanistMedium'
    | 'UrbanistMediumItalic'
    | 'UrbanistRegular'
    | 'UrbanistSemiBold'
    | 'UrbanistSemiBoldItalic'
    | 'UrbanistThin'
    | 'UrbanistThinItalic';
};

export const CustomText: FC<CustomTextProps> = ({
  fontType = 'PoppinsRegular',
  ...rest
}) => {
  return (
    <Text {...rest} style={[rest.style, { fontFamily: fontType }]}>
      {rest.children}
    </Text>
  );
};
