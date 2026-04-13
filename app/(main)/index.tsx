import { ONBOARDING_SLIDES } from '@/constants/Onboarding';
import { DotIndicator, SkipButton } from '@/presentation/atomic/atoms';
import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { OnboardingNavControls } from '@/presentation/atomic/molecules';
import { OnboardingSlide } from '@/presentation/atomic/organisms';
import { colors, fontSizes, paddings } from '@/theme';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === ONBOARDING_SLIDES.length - 1;

  const handleNext = () => {
    if (isLast) {
      return;
    }
    carouselRef.current?.next();
  };

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleSkip = () => {
    router.navigate('/(main)/chat/chat');
  };

  return (
    <View style={styles.container}>
      <SkipButton onPress={handleSkip} />

      <View style={styles.carouselContainer}>
        <Carousel
          ref={carouselRef}
          width={width}
          data={ONBOARDING_SLIDES}
          onSnapToItem={setActiveIndex}
          renderItem={({ item }) => <OnboardingSlide image={item.image} />}
        />
      </View>
      <DotIndicator
        total={ONBOARDING_SLIDES.length}
        activeIndex={activeIndex}
      />
      <View style={styles.textContainer}>
        <CustomText style={styles.title} fontType="PoppinsBold">
          {ONBOARDING_SLIDES[activeIndex].title}
        </CustomText>
        <CustomText style={styles.subtitle} fontType="PoppinsLight">
          {ONBOARDING_SLIDES[activeIndex].subtitle}
        </CustomText>
      </View>
      <OnboardingNavControls
        onPrev={handlePrev}
        onNext={handleNext}
        disablePrev={isFirst}
        isLast={isLast}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  carouselContainer: {
    height: '65%',
  },
  title: {
    fontSize: fontSizes.xxxxxlarge,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: fontSizes.xlarge,
    textAlign: 'center',
    color: colors.gray[500],
  },
  textContainer: {
    paddingHorizontal: 80,
    gap: paddings.sm,
  },
});
