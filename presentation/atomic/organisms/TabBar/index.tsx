import { colors } from '@/theme';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export function TabBar() {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => router.navigate('/(main)')}>
        <Ionicons
          name="home-outline"
          size={24}
          color={colors.gray[500] as string}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.navigate('/(main)/chat/chat')}>
        <Ionicons
          name="grid-outline"
          size={24}
          color={colors.gray[500] as string}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="time-outline"
          size={24}
          color={colors.gray[500] as string}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons
          name="person-circle"
          size={28}
          color={colors.black as string}
        />
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
    borderTopColor: colors.gray[200],
    backgroundColor: colors.white,
  },
});
