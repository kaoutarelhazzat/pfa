import { Tabs } from 'expo-router';
import CustomTabBar from '@/components/navigation/CustomTabBar';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        title: '',
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="timetable" />
      <Tabs.Screen name="chatbot" />
      <Tabs.Screen name="documents" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
}
