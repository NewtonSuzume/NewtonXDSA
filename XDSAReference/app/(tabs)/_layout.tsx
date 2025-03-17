import { Tabs } from 'expo-router';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useTheme } from '@/library/context';

export default function TabLayout() {


  const theme = useTheme()


  return (
    <Tabs
      screenOptions={{

        headerShown: false,

        tabBarActiveTintColor: theme.acc.rgba(),
        tabBarStyle: {
          backgroundColor: theme.mg.rgba(),
          borderTopWidth: 0.5,
          borderTopColor: theme.rule.rgba()
        },

        headerStyle: {
          backgroundColor: theme.mg.rgba(),
        },

        headerShadowVisible: false,

        headerTitleStyle: {
          color: theme.main.rgba(),
        },

        headerTitleAlign: 'left'
        
      }}>

        <Tabs.Screen
          name="index"
          options={{
            title: 'Entries',
            tabBarIcon: ({ color, focused }: {color: string, focused: boolean}) => (
              <TabBarIcon name='folder' color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color, focused }: {color: string, focused: boolean}) => (
              <TabBarIcon name='bars' color={color} />
            ),
          }}
        />

    </Tabs>
  );
}
