import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

/* =======================
   TYPES
======================= */

type Day = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

type Course = {
  time: string;
  title: string;
  room: string;
  color: string;
};

type TimetableData = Record<Day, Course[]>;

/* =======================
   DATA
======================= */

const DAYS: Day[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const HOURS = ['08:00', '10:00', '12:00', '14:00', '16:00'];

const COURSES: TimetableData = {
  Mon: [
    { time: '08:00', title: 'Math', room: 'A1', color: '#22C55E' },
    { time: '12:00', title: 'Physics', room: 'B2', color: '#F59E0B' },
  ],
  Tue: [
    { time: '10:00', title: 'CS', room: 'Lab 3', color: '#6366F1' },
  ],
  Wed: [
    { time: '14:00', title: 'AI', room: 'C4', color: '#EC4899' },
  ],
  Thu: [],
  Fri: [
    { time: '08:00', title: 'Networks', room: 'D1', color: '#06B6D4' },
  ],
};

/* =======================
   SCREEN
======================= */

export default function TimetableScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Courses</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.table}>
          {/* HOURS COLUMN */}
          <View style={styles.hoursColumn}>
            <View style={styles.dayHeaderSpacer} />
            {HOURS.map(hour => (
              <Text key={hour} style={styles.hourText}>
                {hour}
              </Text>
            ))}
          </View>

          {/* DAYS COLUMNS */}
          {DAYS.map(day => (
            <View key={day} style={styles.dayColumn}>
              <Text style={styles.dayTitle}>{day}</Text>

              {HOURS.map(hour => {
                const course = COURSES[day].find(
                  (c: Course) => c.time === hour
                );

                return course ? (
                  <View key={hour} style={styles.courseCard}>
                    <View
                      style={[
                        styles.colorBar,
                        { backgroundColor: course.color },
                      ]}
                    />
                    <View style={styles.courseContent}>
                      <Text style={styles.courseTitle}>
                        {course.title}
                      </Text>
                      <Text style={styles.courseRoom}>
                        {course.room}
                      </Text>
                      <Text style={styles.courseTime}>
                        {course.time}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <View key={hour} style={styles.emptySlot} />
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* =======================
   STYLES
======================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0F766E',
  },

  header: {
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  table: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 24,
  },

  hoursColumn: {
    width: 60,
    alignItems: 'center',
  },
  dayHeaderSpacer: {
    height: 32,
  },
  hourText: {
    height: 90,
    color: '#E5E7EB',
    fontSize: 12,
  },

  dayColumn: {
    width: 140,
    marginLeft: 10,
  },
  dayTitle: {
    textAlign: 'center',
    marginBottom: 8,
    color: '#FFFFFF',
    fontWeight: '600',
  },

  courseCard: {
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  colorBar: {
    width: 6,
  },
  courseContent: {
    padding: 10,
    flex: 1,
  },
  courseTitle: {
    fontWeight: '700',
    fontSize: 13,
  },
  courseRoom: {
    fontSize: 11,
    color: '#6B7280',
  },
  courseTime: {
    fontSize: 11,
    color: '#9CA3AF',
  },

  emptySlot: {
    height: 80,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
});
