import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, Stack } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Settings', 
          headerBackTitle: '',   
        }}
      />

      <SafeAreaView style={styles.safe}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* TITLE */}
          <Text style={styles.screenTitle}>Settings</Text>

          {/* PROFILE CARD */}
          <TouchableOpacity
            style={styles.profileCard}
            activeOpacity={0.85}
            onPress={() => router.push('/profile')}
          >
            <View style={styles.avatar}>
              <Ionicons name="person" size={32} color="#fff" />
            </View>

            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>HAROUCHE ANAS</Text>
              <Text style={styles.profileSub}>Voir le profil</Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>

          {/* SETTINGS SECTION */}
          <View style={styles.section}>
            <SettingsRow
              icon="color-palette"
              iconColor="#3B82F6"
              title="Appearance"
              subtitle="Make ZiarApp yours"
            />

            <SettingsRow
              icon="lock-closed"
              iconColor="#EF4444"
              title="Privacy"
              subtitle="Lock ZiarApp to improve your privacy"
            />

            {/* DARK MODE */}
            <View style={styles.row}>
              <View style={styles.rowLeft}>
                <View
                  style={[
                    styles.iconBox,
                    { backgroundColor: '#111827' },
                  ]}
                >
                  <Ionicons
                    name="moon"
                    size={18}
                    color="#fff"
                  />
                </View>

                <View>
                  <Text style={styles.rowTitle}>Dark mode</Text>
                  <Text style={styles.rowSubtitle}>
                    Automatic
                  </Text>
                </View>
              </View>

              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
              />
            </View>

            <SettingsRow
              icon="information-circle"
              iconColor="#8B5CF6"
              title="About"
              subtitle="Learn more about ZiarApp"
            />

            <SettingsRow
              icon="chatbox"
              iconColor="#F59E0B"
              title="Send Feedback"
              subtitle="Let us know how we can improve"
            />
          </View>

          {/* ACCOUNT */}
          <Text style={styles.sectionTitle}>Account</Text>

          <View style={styles.section}>
            <SettingsRow
              icon="mail"
              iconColor="#3B82F6"
              title="Change email"
            />
            <SettingsRow
              icon="log-out"
              iconColor="#EF4444"
              title="Sign Out"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}


function SettingsRow({
  icon,
  iconColor,
  title,
  subtitle,
}: {
  icon: any;
  iconColor: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <View style={styles.rowLeft}>
        <View
          style={[styles.iconBox, { backgroundColor: iconColor }]}
        >
          <Ionicons name={icon} size={18} color="#fff" />
        </View>

        <View>
          <Text style={styles.rowTitle}>{title}</Text>
          {subtitle && (
            <Text style={styles.rowSubtitle}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>

      <Ionicons
        name="chevron-forward"
        size={16}
        color="#C7C7CC"
      />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },

  screenTitle: {
    fontSize: 32,
    fontWeight: '700',
    margin: 16,
  },

  profileCard: {
    backgroundColor: '#F59E0B',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileInfo: {
    flex: 1,
  },

  profileName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  profileSub: {
    color: '#fff',
    fontSize: 13,
    opacity: 0.85,
  },

  section: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 14,
    overflow: 'hidden',
  },

  sectionTitle: {
    marginTop: 24,
    marginLeft: 20,
    fontSize: 13,
    color: '#6B7280',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E7EB',
  },

  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  rowTitle: {
    fontSize: 15,
    fontWeight: '500',
  },

  rowSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
});
