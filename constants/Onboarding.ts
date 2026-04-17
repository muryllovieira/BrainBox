import { ImageSourcePropType } from 'react-native';

interface OnboardingSlideData {
  image: ImageSourcePropType;
  title?: string;
  subtitle?: string;
}

export const ONBOARDING_SLIDES: OnboardingSlideData[] = [
  {
    image: require('@/assets/images/onboarding-1.png'),
    title: 'Unlock the Power Of Future AI',
    subtitle: 'Chat with the smartest AI Future Experience power of AI with us',
  },
  {
    image: require('@/assets/images/onboarding-1.png'),
    title: 'Unlock the Power Of Future AI',
    subtitle: 'Chat with the smartest AI Future Experience power of AI with us',
  },
  {
    image: require('@/assets/images/onboarding-1.png'),
    title: 'Unlock the Power Of Future AI',
    subtitle: 'Chat with the smartest AI Future Experience power of AI with us',
  },
];
