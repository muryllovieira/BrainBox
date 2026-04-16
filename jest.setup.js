import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  default: jest.fn(() => 'light'),
}));

jest.mock('@google/genai/web', () => {
  return {
    GoogleGenAI: jest.fn().mockImplementation(() => ({
      getGenerativeModel: jest.fn().mockReturnValue({
        startChat: jest.fn().mockReturnValue({
          sendMessage: jest.fn().mockResolvedValue({
            response: { text: () => 'Resposta mockada' },
          }),
        }),
      }),
    })),
  };
});

process.env.EXPO_PUBLIC_GEMINI_API_KEY = '123';

jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native');
  return {
    Ionicons: props => React.createElement(Text, null, props.name),
    MaterialIcons: props => React.createElement(Text, null, props.name),
    MaterialCommunityIcons: props =>
      React.createElement(Text, null, props.name),
    FontAwesome: props => React.createElement(Text, null, props.name),
    FontAwesome6: props => React.createElement(Text, null, props.name),
  };
});
