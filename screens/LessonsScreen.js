import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

function SectionToggle({ active, onChange }) {
  return (
    <View style={styles.toggleRow}>
      {['Vocabulary', 'Grammar'].map((name, idx) => {
        const isActive = active === idx;
        return (
          <TouchableOpacity key={name} style={[styles.toggleBtn, isActive && styles.toggleActive]} onPress={() => onChange(idx)}>
            <Text style={[styles.toggleText, { color: isActive ? '#F28C28' : '#6D6A67' }]}>{name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const vocabItems = [
  { name: 'Alphabet', color: '#E8F4FD', image: '🔤' },
  { name: 'Maryam', color: '#F0E6FF', image: '👩' },
  { name: 'Ibrahim', color: '#FFF2E8', image: '👨' },
  { name: 'Adam', color: '#E8F8F0', image: '👤' },
  { name: 'Hud', color: '#F0F8FF', image: '🏔️' },
  { name: 'Salih', color: '#FFF8E8', image: '🐪' },
  { name: 'Shuayb', color: '#F8F0FF', image: '🏜️' },
  { name: 'Musa', color: '#E8F0FF', image: '🏛️' },
];

const grammarItems = [
  { name: 'Lesson 01: Intro', color: '#8B5CF6', duration: '2 mins' },
  { name: 'Lesson 02: Words', color: '#3B82F6', duration: '1 min' },
  { name: 'Lesson 03: Words 2', color: '#F59E0B', duration: '2 mins' },
  { name: 'Lesson 04: Words 3', color: '#10B981', duration: '1 min' },
  { name: 'Lesson 05: Words 4', color: '#8B5CF6', duration: '2 mins' },
  { name: 'Exercise 01', color: '#06B6D4', duration: '3 mins' },
  { name: 'Lesson 06: Pronouns', color: '#10B981', duration: '1 min' },
  { name: 'Lesson 07: Pronouns 2', color: '#3B82F6', duration: '3 mins' },
  { name: 'Lesson 08: Pronouns 3', color: '#F59E0B', duration: '3 mins' },
  { name: 'Lesson 09: Pronouns 4', color: '#8B5CF6', duration: '2 mins' },
  { name: 'Exercise 02', color: '#8B5CF6', duration: '2 mins' },
  { name: 'Lesson 10: Pronouns 5', color: '#06B6D4', duration: '1 min' },
  { name: 'Lesson 11: Pronouns 6', color: '#10B981', duration: '2 mins' },
  { name: 'Exercise 03', color: '#3B82F6', duration: '1 min' },
  { name: 'Lesson 12: Sentences', color: '#F59E0B', duration: '1 min' },
  { name: 'Exercise 04', color: '#8B5CF6', duration: '1 min' },
  { name: 'Lesson 13: Sentences 2', color: '#10B981', duration: '2 mins' },
];

export default function LessonsScreen({ navigation }) {
  const [tab, setTab] = useState(0); // 0 vocab, 1 grammar

  const handleItemPress = (item) => {
    // Navigate to a sample screen
    navigation?.navigate('SampleScreen', { title: item.name });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Lessons</Text>
        <View style={styles.badges}>
          <View style={styles.badge}>
            <Text style={styles.badgeIcon}>⚡</Text>
            <Text style={styles.badgeText}>0</Text>
          </View>
          <View style={[styles.badge, { backgroundColor: '#F28C28' }]}>
            <Text style={styles.badgeIcon}>📖</Text>
            <Text style={styles.badgeText}>8%</Text>
          </View>
        </View>
      </View>
      
      <SectionToggle active={tab} onChange={setTab} />
      
      {tab === 0 && (
        <View style={styles.continueBanner}>
          <Text style={styles.continueIcon}>📚</Text>
          <View style={styles.continueText}>
            <Text style={styles.continueTitle}>Continue: Letters</Text>
            <Text style={styles.continueSubtitle}>2. Lesson</Text>
          </View>
          <Text style={styles.continueArrow}>→</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.listContent}>
        {tab === 0 ? (
          vocabItems.map((item, i) => (
            <TouchableOpacity key={i} style={[styles.vocabCard, { backgroundColor: item.color }]} onPress={() => handleItemPress(item)}>
              <Text style={styles.vocabImage}>{item.image}</Text>
              <Text style={styles.vocabTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.grammarGrid}>
            {grammarItems.map((item, i) => (
              <TouchableOpacity key={i} style={[styles.grammarCard, { backgroundColor: item.color }]} onPress={() => handleItemPress(item)}>
                <View style={styles.grammarDot} />
                <Text style={styles.grammarTitle}>{item.name}</Text>
                <Text style={styles.grammarDuration}>{item.duration}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { 
    paddingHorizontal: 20, 
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: { fontSize: 32, fontWeight: '800' },
  badges: {
    flexDirection: 'row',
    gap: 8,
  },
  badge: {
    backgroundColor: '#FF69B4',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  badgeIcon: { fontSize: 12, color: '#FFFFFF' },
  badgeText: { fontSize: 12, fontWeight: '700', color: '#FFFFFF' },
  toggleRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginHorizontal: 16,
    backgroundColor: '#F3EFEA',
    borderRadius: 12,
  },
  toggleBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  toggleActive: { backgroundColor: '#FFFFFF', elevation: 2 },
  toggleText: { fontSize: 16, fontWeight: '700' },
  continueBanner: {
    backgroundColor: '#E8F5E8',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  continueIcon: { fontSize: 24 },
  continueText: { flex: 1 },
  continueTitle: { fontSize: 16, fontWeight: '700' },
  continueSubtitle: { fontSize: 14, color: '#666' },
  continueArrow: { fontSize: 18, color: '#000' },
  listContent: { padding: 16, paddingBottom: 120 },
  vocabCard: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  vocabImage: { fontSize: 32 },
  vocabTitle: { fontSize: 20, fontWeight: '700', flex: 1 },
  grammarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  grammarCard: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    position: 'relative',
  },
  grammarDot: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#F28C28',
  },
  grammarTitle: { 
    fontSize: 14, 
    fontWeight: '700', 
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 4,
  },
  grammarDuration: { 
    fontSize: 12, 
    color: '#FFFFFF',
    opacity: 0.8,
  },
});



