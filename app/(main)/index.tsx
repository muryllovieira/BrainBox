import { ONBOARDING_SLIDES } from '@/constants/Onboarding';
import { useThemeColors } from '@/hooks/useThemeColors';
import { DotIndicator, SkipButton } from '@/presentation/atomic/atoms';
import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { OnboardingNavControls } from '@/presentation/atomic/molecules';
import { OnboardingSlide } from '@/presentation/atomic/organisms';
import { BaseScreenTemplate } from '@/presentation/atomic/templates';
import { fontSizes, paddings } from '@/theme';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const theme = useThemeColors();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === ONBOARDING_SLIDES.length - 1;

  const handleNext = () => {
    if (isLast) return;
    carouselRef.current?.next();
  };
  const handlePrev = () => carouselRef.current?.prev();
  const handleSkip = () => router.navigate('/(main)/chat/chat');

  return (
    <BaseScreenTemplate
      title=""
      hideHeader
      scrollable={false}
      avoidKeyboard={false}
      contentStyle={styles.content}
    >
      <View style={styles.skipContainer}>
        <SkipButton onPress={handleSkip} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.carouselWrapper}>
          <Carousel
            ref={carouselRef}
            width={width}
            height={width * 1.2}
            data={ONBOARDING_SLIDES}
            onSnapToItem={setActiveIndex}
            renderItem={({ item }) => <OnboardingSlide image={item.image} />}
          />
        </View>

        <View style={styles.footerContainer}>
          <DotIndicator
            total={ONBOARDING_SLIDES.length}
            activeIndex={activeIndex}
          />

          <View style={styles.textContainer}>
            <CustomText style={styles.title} fontType="PoppinsBold">
              {ONBOARDING_SLIDES[activeIndex].title}
            </CustomText>
            <CustomText
              style={[styles.subtitle, { color: theme.subtext }]}
              fontType="PoppinsLight"
            >
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
      </View>
    </BaseScreenTemplate>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  skipContainer: {
    alignItems: 'flex-end',
    paddingHorizontal: paddings.lg,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselWrapper: {
    height: width * 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    gap: 32,
  },
  title: {
    fontSize: fontSizes.xxxxxlarge,
    textAlign: 'center',
    lineHeight: 38,
  },
  subtitle: {
    fontSize: fontSizes.large,
    textAlign: 'center',
    marginTop: 8,
  },
  textContainer: {
    paddingHorizontal: paddings.xxxxl,
  },
});
