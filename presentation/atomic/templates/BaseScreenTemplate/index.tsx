import { useThemeColors } from '@/hooks/useThemeColors';
import { SectionTitle } from '@/presentation/atomic/atoms';
import { paddings } from '@/theme';
import React, { FC } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface BaseScreenTemplateProps {
  title: string;
  children: React.ReactNode;
  canGoBack?: boolean;
  settingsIcon?: boolean;
  contentStyle?: ViewStyle;
  scrollable?: boolean;
  avoidKeyboard?: boolean;
}

export const BaseScreenTemplate: FC<BaseScreenTemplateProps> = ({
  children,
  title,
  canGoBack = false,
  settingsIcon = false,
  contentStyle,
  scrollable = true,
  avoidKeyboard = true,
}) => {
  const themeColors = useThemeColors();
  const ContentWrapper = scrollable ? ScrollView : View;

  const renderContent = () => (
    <ContentWrapper
      style={styles.flex}
      contentContainerStyle={[
        styles.scrollContent,
        contentStyle,
        !scrollable && { flex: 1 },
      ]}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ContentWrapper>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <SectionTitle
        title={title}
        canGoBack={canGoBack}
        settingsIcon={settingsIcon}
      />

      {avoidKeyboard ? (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.flex}
        >
          {renderContent()}
        </KeyboardAvoidingView>
      ) : (
        renderContent()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: paddings.xxxl,
    paddingBottom: paddings.xl,
    paddingTop: 20,
  },
});
