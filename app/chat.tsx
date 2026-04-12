import { CustomText } from '@/presentation/atomic/atoms/CustomText';
import { SectionTitle } from '@/presentation/atomic/atoms/SectionTitle';
import { CardInstructions, InputIcon } from '@/presentation/atomic/molecules';
import { AiResponse, MyQuest } from '@/presentation/atomic/organisms';
import { colors, fontSizes, paddings } from '@/theme';
import React, { useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

export default function Chat() {
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.length > 0) {
      setMessages([...messages, { id: Date.now(), text: text, type: 'user' }]);
      setText('');

      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { id: Date.now(), text: 'Resposta da IA para: ' + text, type: 'ai' },
        ]);
      }, 1000);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, backgroundColor: colors.white }}
    >
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
          <FlatList
            data={messages}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{
              paddingBottom: paddings.xxl,
              paddingTop: paddings.xl,
            }}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  { backgroundColor: item.type === 'ai' ? '#F9F9F9' : 'white' },
                ]}
              >
                {item.type === 'ai' ? (
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

        <View style={styles.footer}>
          <InputIcon
            iconName="send"
            placeholder="Send a message."
            value={text}
            onChangeText={setText}
            onPressIcon={handleSend}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: paddings.xxxl,
  },
  welcomeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
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
  },
  footer: {
    paddingBottom: paddings.xl,
    paddingTop: paddings.lg,
  },
});
