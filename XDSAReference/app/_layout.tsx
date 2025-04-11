import { EntryListContext } from '@/data/MatchEntry/MatchEntryContext';
import SakakiContext from '@/library/context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Pressable style={{flexGrow: 1}}>
        
          <SafeAreaProvider>
            <EntryListContext>
              <SakakiContext>

                <Stack
                
                  screenOptions={{

                    headerShown: false

                  }}

                >

                  <Stack.Screen name="(tabs)"/>
                  
                  <Stack.Screen name="modals/selectedserver" options={{presentation: 'modal'}}/>
                  <Stack.Screen name="modals/createentry" options={{presentation: 'modal'}}/>
                  <Stack.Screen name="modals/setdefaults" options={{presentation: 'modal'}}/>
                  <Stack.Screen name="modals/[editentry]" options={{presentation: 'modal'}}/>


                </Stack>
                

              </SakakiContext>
            </EntryListContext>
          </SafeAreaProvider>
      </Pressable>
  );
}
