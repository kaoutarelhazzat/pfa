import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

/**
 * Données mockées (remplacées plus tard par API)
 */
const MOCK_DOCUMENTS = [
  {
    id: '1',
    title: 'Attestation de scolarité',
    description: 'Document officiel prouvant votre inscription',
    type: 'PDF',
    status: 'Disponible',
  },
  {
    id: '2',
    title: 'Relevé de notes',
    description: 'Notes du semestre en cours',
    type: 'PDF',
    status: 'En attente',
  },
  {
    id: '3',
    title: 'Règlement pédagogique',
    description: 'Règles et procédures académiques',
    type: 'PDF',
    status: 'Disponible',
  },
];

function DocumentCard({ item }: any) {
  const isAvailable = item.status === 'Disponible';

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons
          name="document-text-outline"
          size={26}
          color="#2563EB"
        />
        <View style={styles.cardTitleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>

      <View style={styles.cardFooter}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.type}</Text>
        </View>

        <TouchableOpacity
          disabled={!isAvailable}
          style={[
            styles.actionButton,
            !isAvailable && styles.disabledButton,
          ]}
        >
          <Text
            style={[
              styles.actionText,
              !isAvailable && styles.disabledText,
            ]}
          >
            {isAvailable ? 'Télécharger' : 'Indisponible'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function DocumentsScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Documents</Text>
        <Text style={styles.subtitle}>
          Vos documents administratifs
        </Text>

        <FlatList
          data={MOCK_DOCUMENTS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DocumentCard item={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
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
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  cardTitleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  description: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#EEF2FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 12,
    color: '#2563EB',
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
  },
  disabledText: {
    color: '#9CA3AF',
  },
});
