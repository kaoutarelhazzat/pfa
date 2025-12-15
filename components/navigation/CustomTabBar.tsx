import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function CustomTabBar({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const scale = useSharedValue(isFocused ? 1.3 : 1);

        // 🔥 animation quand focus change
        scale.value = withSpring(isFocused ? 1.3 : 1, {
          damping: 12,
          stiffness: 150,
        });

        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: scale.value }],
        }));

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        let iconName: any = 'home';
        if (route.name === 'index') iconName = 'home';
        if (route.name === 'timetable') iconName = 'calendar';
        if (route.name === 'chatbot') iconName = 'chatbubbles';
        if (route.name === 'documents') iconName = 'document-text';
        if (route.name === 'settings') iconName = 'settings';

        const isCenter = route.name === 'chatbot';

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={[
              styles.tab,
              isCenter && styles.centerTab,
            ]}
            activeOpacity={0.7}
          >
            <Animated.View style={animatedStyle}>
              <Ionicons
                name={iconName}
                size={isCenter ? 32 : 22}
                color={isFocused ? '#2563EB' : '#9CA3AF'}
              />
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  centerTab: {
    backgroundColor: '#EEF2FF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -24,
  },
});
