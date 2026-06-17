import { ClerkProvider } from '@clerk/expo';
import { tokenCache } from '@clerk/expo/token-cache';
import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useFonts } from 'expo-font';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file');
}

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <>
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <KeyboardProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              statusBarStyle: 'dark',
              contentStyle: {
                backgroundColor: '#fff8f3',
              },
              animation: 'slide_from_right',
            }}
          >
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(home)" />
          </Stack>
        </KeyboardProvider>
      </ClerkProvider>
    </>
  );
}
