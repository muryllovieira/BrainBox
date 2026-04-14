import { useThemeColors } from '@/hooks/useThemeColors';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export function TabBar() {
  const theme = useThemeColors();
  return (
    <View
      style={[
        styles.tabBar,
        {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
        },
      ]}
    >
      <TouchableOpacity onPress={() => router.navigate('/(main)')}>
        <Ionicons name="home-outline" size={24} color={theme.subtext} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('/(main)/chat/chat')}>
        <Ionicons name="grid-outline" size={24} color={theme.subtext} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="time-outline" size={24} color={theme.subtext} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="person-circle" size={28} color={theme.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
  },
});
