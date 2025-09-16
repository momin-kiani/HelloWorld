import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Tab({ label, active, onPress }) {
  return (
    <TouchableOpacity style={[styles.qtab, active && styles.qtabActive]} onPress={onPress}>
      <Text style={[styles.qtabText, { color: active ? '#F28C28' : '#6D6A67' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

export default function QuranScreen() {
  const [tab, setTab] = useState('Surahs');
  const list = tab === 'Surahs'
    ? ['Al-Fatihah', 'Al-Baqarah', 'Al-Imran', 'An-Nisa', 'Al-Ma`idah', 'Al-An`am', 'Al-A`raf']
    : ['Room 1: 1:1', 'Room 2: 1:1', 'Room 3: 20:1', 'Room 4: 2:1'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quran</Text>
      <View style={styles.qtabRow}>
        <Tab label="Surahs" active={tab === 'Surahs'} onPress={() => setTab('Surahs')} />
        <Tab label="Rooms" active={tab === 'Rooms'} onPress={() => setTab('Rooms')} />
      </View>
      <ScrollView contentContainerStyle={styles.listContent}>
        {list.map((label, i) => (
          <View key={i} style={styles.card}><Text style={styles.cardTitle}>{label}</Text></View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  title: { fontSize: 32, fontWeight: '800', marginHorizontal: 20, marginTop: 8 },
  qtabRow: { flexDirection: 'row', backgroundColor: '#F3EFEA', margin: 16, borderRadius: 12 },
  qtab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12 },
  qtabActive: { backgroundColor: '#FFFFFF', elevation: 2 },
  qtabText: { fontWeight: '700' },
  listContent: { padding: 16, paddingBottom: 120, gap: 12 },
  card: { backgroundColor: '#F6F1EB', borderRadius: 16, padding: 18 },
  cardTitle: { fontSize: 20, fontWeight: '700' },
});



