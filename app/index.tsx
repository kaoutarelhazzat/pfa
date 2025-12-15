import { Redirect } from 'expo-router';

export default function Index() {
  // 🔐 Auth simulée (à remplacer plus tard)
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(auth)/login" />;
}
