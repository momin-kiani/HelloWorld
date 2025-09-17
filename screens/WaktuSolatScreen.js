import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function WaktuSolatScreen({ navigation }) {
  const [reminders, setReminders] = useState({
    fajr: true,
    dhuhr: true,
    asr: false,
    maghrib: true,
    isha: false,
  });

  const prayerTimes = [
    { name: 'Fajr', time: '05:30', arabic: 'الفجر', translation: 'Dawn' },
    { name: 'Dhuhr', time: '12:15', arabic: 'الظهر', translation: 'Midday' },
    { name: 'Asr', time: '15:45', arabic: 'العصر', translation: 'Afternoon' },
    { name: 'Maghrib', time: '18:20', arabic: 'المغرب', translation: 'Sunset' },
    { name: 'Isha', time: '19:35', arabic: 'العشاء', translation: 'Night' },
  ];

  const toggleReminder = (prayer) => {
    setReminders(prev => ({
      ...prev,
      [prayer]: !prev[prayer]
    }));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Waktu Solat</Text>
        <Text style={styles.subtitle}>Prayer Times & Reminders</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.locationCard}>
          <Text style={styles.locationIcon}>📍</Text>
          <View style={styles.locationInfo}>
            <Text style={styles.locationTitle}>Current Location</Text>
            <Text style={styles.locationText}>Kuala Lumpur, Malaysia</Text>
          </View>
        </View>

        <View style={styles.dateCard}>
          <Text style={styles.dateText}>Today, December 15, 2024</Text>
        </View>

        <View style={styles.prayerTimesContainer}>
          <Text style={styles.sectionTitle}>Prayer Times</Text>
          {prayerTimes.map((prayer, index) => (
            <View key={index} style={styles.prayerCard}>
              <View style={styles.prayerInfo}>
                <Text style={styles.prayerName}>{prayer.name}</Text>
                <Text style={styles.prayerArabic}>{prayer.arabic}</Text>
                <Text style={styles.prayerTranslation}>{prayer.translation}</Text>
              </View>
              <View style={styles.prayerTimeContainer}>
                <Text style={styles.prayerTime}>{prayer.time}</Text>
                <TouchableOpacity 
                  style={[
                    styles.reminderToggle,
                    reminders[prayer.name.toLowerCase()] && styles.reminderActive
                  ]}
                  onPress={() => toggleReminder(prayer.name.toLowerCase())}
                >
                  <Text style={[
                    styles.reminderText,
                    reminders[prayer.name.toLowerCase()] && styles.reminderTextActive
                  ]}>
                    {reminders[prayer.name.toLowerCase()] ? 'ON' : 'OFF'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Set Custom Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Change Location</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFEA',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: '#F28C28',
    borderRadius: 10,
    zIndex: 1,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6D6A67',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  locationCard: {
    backgroundColor: '#E8F8F0',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  locationIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  locationInfo: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
  },
  dateCard: {
    backgroundColor: '#F0E6FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
  },
  prayerTimesContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 16,
  },
  prayerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  prayerInfo: {
    flex: 1,
  },
  prayerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 4,
  },
  prayerArabic: {
    fontSize: 16,
    color: '#666',
    marginBottom: 2,
  },
  prayerTranslation: {
    fontSize: 14,
    color: '#999',
  },
  prayerTimeContainer: {
    alignItems: 'center',
  },
  prayerTime: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F28C28',
    marginBottom: 8,
  },
  reminderToggle: {
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  reminderActive: {
    backgroundColor: '#F28C28',
  },
  reminderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  reminderTextActive: {
    color: '#FFFFFF',
  },
  actionsContainer: {
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#F28C28',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
