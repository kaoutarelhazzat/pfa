import { View, Text, StyleSheet, FlatList } from 'react-native';

const MOCK_TIMETABLE = [
  {
    id: '1',
    module: 'Algorithmique',
    time: '08:30 - 10:00',
    room: 'Salle B12',
    teacher: 'M. El Amrani',
  },
  {
    id: '2',
    module: 'Bases de données',
    time: '10:15 - 11:45',
    room: 'Salle C04',
    teacher: 'Mme Zahraoui',
  },
  {
    id: '3',
    module: 'Génie logiciel',
    time: '14:00 - 15:30',
    room: 'Salle A21',
    teacher: 'M. Benali',
  },
];

function TimetableCard({ item }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.module}>{item.module}</Text>
      <Text style={styles.info}>{item.time}</Text>
      <Text style={styles.info}>{item.room}</Text>
      <Text style={styles.teacher}>{item.teacher}</Text>
    </View>
  );
}

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emploi du temps</Text>
      <Text style={styles.subtitle}>Aujourd’hui</Text>

      <FlatList
        data={MOCK_TIMETABLE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TimetableCard item={item} />}
        showsVerticalScrollIndicator={false}
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
  module: {
    fontSize: 16,
    fontWeight: '600',
  },
  info: {
    fontSize: 13,
    color: '#374151',
    marginTop: 2,
  },
  teacher: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 6,
  },
});
