import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADER ACCOUNT */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Ionicons name="person" size={44} color="#6B7280" />
          </View>
          <Text style={styles.name}>HAROUCHE Anas</Text>
          <Text style={styles.email}>anas.harouche@emsi.ma</Text>
        </View>

        {/* SECTION : ACADEMIQUE */}
        <Section>
          <Row label="Campus" value="Rabat Bouregreg" />
          <Row
            label="Programme"
            value="Ingénierie Informatique et Réseaux"
          />
          <Row label="Section" value="5IIRR G10 - G101" />
          <Row label="Matricule" value="R-2024-000161" />
          <Row label="Année universitaire" value="2024 / 2025" />
        </Section>

        {/* SECTION : PERSONNEL */}
        <Section>
          <Row label="Téléphone" value="0655259453" />
          <Row
            label="Adresse"
            value="Bloc 01 N°635 Cité Sidi Youssef"
          />
          <Row label="Date de naissance" value="31/08/2001" />
          <Row
            label="Lieu de naissance"
            value="LGFIFATE TAROUDANT"
          />
          <Row label="CNE" value="JT89783" />
        </Section>

        {/* SECTION : TUTEURS */}
        <Section>
          <Row label="Tuteur 1" value="Harouche Larbi" />
          <Row label="Profession Tuteur 1" value="Retraité" />
          <Row label="Tuteur 2" value="-" />
          <Row label="Profession Tuteur 2" value="Retraité" />
        </Section>

        {/* ACTIONS */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.logout}>
            <Text style={styles.logoutText}>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ========================
   REUSABLE COMPONENTS
======================== */

function Section({ children }: { children: any }) {
  return <View style={styles.section}>{children}</View>;
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.6}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.valueBox}>
        <Text style={styles.value}>{value}</Text>
        <Ionicons
          name="chevron-forward"
          size={16}
          color="#C7C7CC"
        />
      </View>
    </TouchableOpacity>
  );
}

/* ========================
   STYLES (iOS SETTINGS)
======================== */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  container: {
    flex: 1,
  },

  header: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
  },
  email: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },

  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },
  label: {
    fontSize: 15,
    color: '#111827',
  },
  valueBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  value: {
    fontSize: 15,
    color: '#6B7280',
  },

  actions: {
    marginTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  logout: {
    backgroundColor: '#EF4444',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});
