import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import { useChat } from '@/data/ChatBot';
import { useThemeColors } from '@/hooks/useThemeColors';

import { Button, CustomText } from '@/presentation/atomic/atoms';
import { CardInstructions, InputIcon } from '@/presentation/atomic/molecules';
import { AiResponse, MyQuest } from '@/presentation/atomic/organisms';
import { BaseScreenTemplate } from '@/presentation/atomic/templates';
import { fontSizes, paddings } from '@/theme';
import { ScrollView } from 'react-native-gesture-handler';

export default function Chat() {
  const theme = useThemeColors();
  const { messages, sendMessage, sendMessageStatus, clearMessages } = useChat();
  const [text, setText] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const isLoading = sendMessageStatus.status === 'pending';

  const handleSend = async () => {
    if (text.trim().length > 0 && !isLoading) {
      const messageToSend = text;
      setText('');
      await sendMessage(messageToSend);
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current?.scrollToEnd({ animated: true });
    }
  }, [messages]);

  return (
    <BaseScreenTemplate
      title="Health"
      settingsIcon
      scrollable={false}
      canGoBack
      avoidKeyboard={false}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <View style={styles.container}>
          {messages.length === 0 ? (
            <ScrollView
              contentContainerStyle={styles.welcomeView}
              showsVerticalScrollIndicator={false}
            >
              <CustomText
                style={[styles.title, { color: theme.subtext }]}
                fontType="UrbanistBold"
              >
                BrainBox
              </CustomText>
              <View style={{ gap: 12 }}>
                <CardInstructions text="Remembers what user said earlier in the conversation" />
                <CardInstructions text="Allows user to provide follow-up corrections With Ai" />
                <CardInstructions text="Limited knowledge of world and events after 2021" />
                <CardInstructions text="May occasionally generate incorrect information" />
              </View>
            </ScrollView>
          ) : (
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(_, index) => index.toString()}
              onContentSizeChange={() =>
                flatListRef.current?.scrollToEnd({ animated: true })
              }
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.messageWrapper,
                    {
                      backgroundColor:
                        item.role === 'model'
                          ? theme.surface
                          : theme.background,
                      borderBottomColor: theme.border,
                    },
                  ]}
                >
                  {item.role === 'model' ? (
                    <AiResponse
                      message={item.text}
                      imageSource={require('@/assets/images/Brainbox.png')}
                    />
                  ) : (
                    <MyQuest
                      message={item.text}
                      imageSource={require('@/assets/images/onboarding-1.png')}
                      showEdit
                    />
                  )}
                </View>
              )}
            />
          )}

          {messages.length > 0 && (
            <View style={styles.regenerateContainer}>
              <Button
                text="Regenerate Response"
                leftIcon="refresh"
                variant="text"
                onPress={clearMessages}
                disabled={isLoading}
              />
            </View>
          )}

          <View style={styles.footer}>
            <InputIcon
              iconName="send"
              placeholder="Send a message."
              value={text}
              onChangeText={setText}
              onPressIcon={handleSend}
              disabled={isLoading}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </BaseScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  welcomeView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    paddingHorizontal: paddings.xxxl,
    paddingVertical: paddings.xxl,
  },
  title: { fontSize: fontSizes.xxxxxxlarge, textAlign: 'center' },
  flatListContent: { paddingBottom: paddings.xxl },
  messageWrapper: {
    padding: paddings.lg,
    borderBottomWidth: 1,
    width: '100%',
    paddingHorizontal: paddings.xxxl,
  },
  regenerateContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: paddings.md,
    maxWidth: '75%',
  },
  footer: {
    paddingBottom: paddings.xl,
    paddingTop: paddings.lg,
    paddingHorizontal: paddings.xxxl,
  },
});
