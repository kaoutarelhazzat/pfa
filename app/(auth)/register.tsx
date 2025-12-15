import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#5B5FEF', '#6A5AE0']}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.card}>
          {/* ILLUSTRATION */}
          <Image
            source={require('../../assets/images/login.png')}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.title}>Sign Up</Text>

          {/* INPUTS */}
          <TextInput
            placeholder="Name"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            style={styles.input}
          />

          {/* BUTTON */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.replace('/(auth)/login')}
          >
            <Text style={styles.primaryText}>Sign Up</Text>
          </TouchableOpacity>

          {/* FOOTER */}
          <TouchableOpacity
            onPress={() => router.replace('/(auth)/login')}
          >
            <Text style={styles.link}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

/* ================= STYLES ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  card: {
    width: '85%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
  },

  image: {
    width: 180,
    height: 160,
    marginBottom: 12,
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    color: '#111827',
  },

  input: {
    width: '100%',
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingHorizontal: 16,
    marginBottom: 14,
    backgroundColor: '#F9FAFB',
  },

  primaryButton: {
    width: '100%',
    backgroundColor: '#5B5FEF',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 15,
  },

  link: {
    marginTop: 16,
    color: '#5B5FEF',
    fontWeight: '600',
  },
});
