import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LeaderboardScreen({ navigation }) {
  const handleCreateGroup = () => {
    navigation?.navigate('SampleScreen', { title: 'Create Group' });
  };

  const handleQuranicGroup = () => {
    navigation?.navigate('SampleScreen', { title: 'Quranic Group' });
  };

  const handleDonate = () => {
    navigation?.navigate('SampleScreen', { title: 'Donate' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleCreateGroup}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity style={styles.card} onPress={handleQuranicGroup}>
          <View style={styles.cardIcon}>
            <Text style={styles.cardIconText}>📖</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Quranic</Text>
            <Text style={styles.cardSubtitle}>All members</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleCreateGroup}>
          <View style={styles.cardIcon}>
            <Text style={styles.cardIconText}>+</Text>
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Create your group</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.donateCard} onPress={handleDonate}>
          <View style={styles.donateIcon}>
            <Text style={styles.donateIconText}>🎁</Text>
          </View>
          <View style={styles.donateContent}>
            <Text style={styles.donateTitle}>I want to donate!</Text>
            <Text style={styles.donateSubtitle}>Help a student on their learning journey with a Quranic Pro membership.</Text>
          </View>
          <Text style={styles.donateArrow}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  title: { fontSize: 32, fontWeight: '800' },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F28C28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: { fontSize: 24, color: '#FFFFFF', fontWeight: '700' },
  content: { padding: 16, paddingBottom: 120 },
  card: {
    backgroundColor: '#FDF3EC',
    marginBottom: 16,
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  cardIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FDF3EC',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F28C28',
  },
  cardIconText: { fontSize: 24 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 20, fontWeight: '700', marginBottom: 4 },
  cardSubtitle: { fontSize: 16, color: '#666' },
  donateCard: {
    backgroundColor: '#FDF3EC',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  donateIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F28C28',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donateIconText: { fontSize: 24, color: '#FFFFFF' },
  donateContent: { flex: 1 },
  donateTitle: { fontSize: 18, fontWeight: '700', marginBottom: 4 },
  donateSubtitle: { fontSize: 14, color: '#666', lineHeight: 20 },
  donateArrow: { fontSize: 18, color: '#000' },
});



