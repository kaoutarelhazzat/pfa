import { View, Text, StyleSheet, FlatList } from 'react-native';

const MOCK_DOCUMENTS = [
  { id: '1', title: 'Attestation de scolarité', type: 'PDF' },
  { id: '2', title: 'Procédure de réinscription', type: 'PDF' },
  { id: '3', title: 'Règlement pédagogique', type: 'PDF' },
];

export default function DocumentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documents</Text>

      <FlatList
        data={MOCK_DOCUMENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.docTitle}>{item.title}</Text>
            <Text style={styles.docType}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F9FAFB',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  docTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  docType: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
});
