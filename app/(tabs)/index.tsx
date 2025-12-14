import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Assistant Scolarité</Text>
        <Text style={styles.subtitle}>
          Bienvenue sur votre espace étudiant
        </Text>

        <View style={styles.cards}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Emploi du temps</Text>
            <Text style={styles.cardText}>
              Consultez votre planning
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Documents</Text>
            <Text style={styles.cardText}>
              Attestations & procédures
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Assistant</Text>
            <Text style={styles.cardText}>
              Poser une question
            </Text>
          </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 24,
  },
  cards: {
    gap: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 6,
  },
});
