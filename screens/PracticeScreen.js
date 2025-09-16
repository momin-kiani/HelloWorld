import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PracticeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice</Text>
      <View style={styles.grid}>
        {['Quiz', 'My words', 'Recite', 'Translate', 'Pray'].map((t) => (
          <View key={t} style={styles.tile}><Text style={styles.tileText}>{t}</Text></View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  title: { fontSize: 32, fontWeight: '800', marginHorizontal: 20, marginTop: 8 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', padding: 16, gap: 12 },
  tile: { width: '47%', backgroundColor: '#F6F1EB', borderRadius: 14, padding: 16 },
  tileText: { fontWeight: '700', fontSize: 18 },
});



