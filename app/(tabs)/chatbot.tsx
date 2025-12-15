import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function ChatbotScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe}>
      <View
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom + 90,
          },
        ]}
      >
        <View>
          <Text style={styles.screenTitle}>Assistant</Text>
          <Text style={styles.subtitle}>
            Bienvenue sur votre espace assistant
          </Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/assistant.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Chat without limits, anytime
          </Text>

          <Text style={styles.description}>
            Whether you need quick answers, creative ideas,
            or just a smart conversation, your assistant is
            here to help you instantly.
          </Text>
        </View>

        {/* ACTION BUTTONS */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => router.push('/')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push('/chat')}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },

  /* PAGE TITLE */
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,     
    marginBottom: 12 
  },

  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 260,
    height: 320,
  },

  /* TEXT CONTENT */
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },

  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  skipButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
  },

  nextButton: {
    flex: 1,
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  nextText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
