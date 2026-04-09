import { ImageSourcePropType } from 'react-native';

interface OnboardingSlideData {
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}

export const ONBOARDING_SLIDES: OnboardingSlideData[] = [
  {
    image: require('@/assets/images/onboarding-1.png'),
    title: 'Unlock the Power Of Future AI',
    subtitle: 'Chat with the smartest AI Future Experience power of AI with us',
  },
  {
    image: require('@/assets/images/onboarding-1.png'),
    title: 'Always Here To Help You',
    subtitle:
      'Get instant answers and smart suggestions whenever you need them',
  },
  {
    image: require('@/assets/images/onboarding-1.png'),
    title: 'Your Intelligent Companion',
    subtitle:
      'Personalized conversations that learn and grow with you over time',
  },
];
