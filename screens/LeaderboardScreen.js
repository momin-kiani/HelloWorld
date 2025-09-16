import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LeaderboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <View style={styles.card}><Text style={styles.cardTitle}>Quranic</Text><Text>All members</Text></View>
      <View style={styles.card}><Text style={styles.cardTitle}>Create your group</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  title: { fontSize: 32, fontWeight: '800', marginHorizontal: 20, marginTop: 8 },
  card: { backgroundColor: '#FDF3EC', marginHorizontal: 16, marginTop: 16, borderRadius: 16, padding: 18 },
  cardTitle: { fontSize: 20, fontWeight: '700', marginBottom: 6 },
});



