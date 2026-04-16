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
  hideHeader?: boolean;
}

export const BaseScreenTemplate: FC<BaseScreenTemplateProps> = ({
  children,
  title,
  canGoBack = false,
  settingsIcon = false,
  contentStyle,
  scrollable = true,
  avoidKeyboard = true,
  hideHeader = false,
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled={avoidKeyboard}
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      {!hideHeader && (
        <SectionTitle
          title={title}
          canGoBack={canGoBack}
          settingsIcon={settingsIcon}
        />
      )}
      {renderContent()}
    </KeyboardAvoidingView>
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
    paddingTop: paddings.xl,
  },
});
