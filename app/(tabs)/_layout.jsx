import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#ffd33d' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Мои языки программирования',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Обо мне',
          tabBarIcon: ({ color, focused }) => <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />,
        }}
      />
    </Tabs>
  );
}
