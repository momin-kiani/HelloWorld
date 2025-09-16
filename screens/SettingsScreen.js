import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';

export default function SettingsScreen() {
  const [tab, setTab] = useState(0); // 0 subscription, 1 settings
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.toggleRow}>
        {['Subscription', 'Settings'].map((t, i) => (
          <TouchableOpacity key={t} style={[styles.toggleBtn, i === tab && styles.toggleActive]} onPress={() => setTab(i)}>
            <Text style={[styles.toggleText, { color: i === tab ? '#F28C28' : '#6D6A67' }]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {tab === 0 ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.panel}><Text style={styles.panelTitle}>You're on the Free Plan.</Text><Text>Upgrade for the full experience</Text></View>
          {['Redeem code', 'Restore purchase', 'Donate a subscription'].map((t) => (
            <View key={t} style={styles.row}><Text style={styles.rowText}>{t}</Text></View>
          ))}
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.rowBetween}><Text style={styles.rowText}>In-app sounds</Text><Switch /></View>
          <View style={styles.rowBetween}><Text style={styles.rowText}>Default quiz timer (60s)</Text><Switch value /></View>
          {['Language', 'Quran Translation', 'Rate the app', 'Join our pro community', 'See what\'s new with Quranic', 'Contact Us'].map((t) => (
            <View key={t} style={styles.row}><Text style={styles.rowText}>{t}</Text></View>
          ))}
          <View style={styles.row}><Text style={[styles.rowText, { color: '#D94A38' }]}>Sign out</Text></View>
          <View style={styles.row}><Text style={[styles.rowText, { color: '#D94A38' }]}>Delete Account</Text></View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  title: { fontSize: 32, fontWeight: '800', marginHorizontal: 20, marginTop: 8 },
  toggleRow: { flexDirection: 'row', backgroundColor: '#F3EFEA', margin: 16, borderRadius: 12 },
  toggleBtn: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12 },
  toggleActive: { backgroundColor: '#FFFFFF', elevation: 2 },
  toggleText: { fontWeight: '700' },
  content: { padding: 16, paddingBottom: 120, gap: 12 },
  panel: { backgroundColor: '#EDE5FB', padding: 18, borderRadius: 16 },
  panelTitle: { fontWeight: '800', marginBottom: 6 },
  row: { backgroundColor: '#FFFFFF', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 12, elevation: 1 },
  rowBetween: { backgroundColor: '#FFFFFF', borderRadius: 12, paddingVertical: 16, paddingHorizontal: 12, elevation: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowText: { fontSize: 16, fontWeight: '600' },
});



