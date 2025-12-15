import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* AUTH */}
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          title: '',           
          headerBackTitle: '',    
        }}
      />

      {/* MODAL */}
      <Stack.Screen
        name="modal"
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}
