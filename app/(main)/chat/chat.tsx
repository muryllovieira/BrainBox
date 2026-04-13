import { useChat } from '@/data/ChatBot';
import { Button } from '@/presentation/atomic/atoms';
import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { SectionTitle } from '@/presentation/atomic/atoms/SectionTitle';
import { CardInstructions, InputIcon } from '@/presentation/atomic/molecules';
import { AiResponse, MyQuest } from '@/presentation/atomic/organisms';
import { colors, fontSizes, paddings } from '@/theme';
import React, { useEffect, useRef } from 'react';
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from 'react-native';

export default function Chat() {
  const { messages, sendMessage, sendMessageStatus, clearMessages } = useChat();
  const [text, setText] = React.useState('');
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
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.white }}>
      <SectionTitle title="Health" canGoBack settingsIcon />
      <View style={styles.container}>
        {messages.length === 0 ? (
          <View style={styles.welcomeView}>
            <CustomText style={styles.title} fontType="PoppinsBold">
              BrainBox
            </CustomText>
            <View style={{ gap: 12, width: '100%' }}>
              <CardInstructions text="Remembers what user said earlier in the conversation" />
              <CardInstructions text="Allows user to provide follow-up corrections With Ai" />
              <CardInstructions text="Limited knowledge of world and events after 2021" />
              <CardInstructions text="May occasionally generate incorrect information" />
              <CardInstructions text="May occasionally produce harmful instructions or biased content" />
            </View>
          </View>
        ) : (
          <>
            <FlatList
              ref={flatListRef}
              data={messages}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: paddings.xxl,
                paddingTop: paddings.xl,
              }}
              renderItem={({ item }) => (
                <View
                  style={[
                    styles.messageContainer,
                    {
                      backgroundColor:
                        item.role === 'model' ? '#F9F9F9' : 'white',
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
            <View
              style={{
                maxWidth: '75%',

                alignSelf: 'center',
                padding: paddings.xxl,
              }}
            >
              <Button
                text="Regenerate Response"
                leftIcon="refresh"
                variant="text"
                onPress={clearMessages}
                disabled={isLoading}
              />
            </View>
          </>
        )}

        <View style={styles.footer}>
          <InputIcon
            iconName={isLoading ? 'send' : 'send'}
            placeholder="Send a message."
            value={text}
            onChangeText={setText}
            onPressIcon={handleSend}
            disabled={isLoading}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    paddingHorizontal: paddings.xxxl,
  },
  title: {
    fontSize: fontSizes.xxxxxlarge,
    color: colors.gray[500],
    textAlign: 'center',
  },
  messageContainer: {
    padding: paddings.lg,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    width: '100%',
    paddingHorizontal: paddings.xxxl,
  },
  footer: {
    paddingBottom: paddings.xl,
    paddingTop: paddings.lg,
    paddingHorizontal: paddings.xxxl,
  },
});
