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
    | 'PoppinsThin';
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
