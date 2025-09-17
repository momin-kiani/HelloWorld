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
  { name: 'Alphabet', color: '#E8F4FD', image: '🔤', subtitle: 'Letters' },
  { name: 'Maryam', color: '#F0E6FF', image: '👩', subtitle: 'The Birth of Maryam' },
  { name: 'Ibrahim', color: '#FFF2E8', image: '👨', subtitle: 'The Story of Ibrahim' },
  { name: 'Adam', color: '#E8F8F0', image: '👤', subtitle: 'The First Man' },
  { name: 'Hud', color: '#F0F8FF', image: '🏔️', subtitle: 'The Prophet Hud' },
  { name: 'Salih', color: '#FFF8E8', image: '🐪', subtitle: 'The Prophet Salih' },
  { name: 'Shuayb', color: '#F8F0FF', image: '🏜️', subtitle: 'The Prophet Shuayb' },
  { name: 'Musa', color: '#E8F0FF', image: '🏛️', subtitle: 'The Prophet Musa' },
  { name: 'Isa', color: '#FFE6F0', image: '✝️', subtitle: 'The Prophet Isa' },
  { name: 'Nuh', color: '#F0F8FF', image: '🚢', subtitle: 'The Prophet Nuh' },
];

const grammarItems = [
  { name: 'Lesson 01: Intro', color: '#8B5CF6', duration: '2 mins', type: 'lesson' },
  { name: 'Lesson 02: Words', color: '#3B82F6', duration: '1 min', type: 'lesson' },
  { name: 'Lesson 03: Words 2', color: '#F59E0B', duration: '2 mins', type: 'lesson' },
  { name: 'Lesson 04: Words 3', color: '#10B981', duration: '1 min', type: 'lesson' },
  { name: 'Lesson 05: Words 4', color: '#8B5CF6', duration: '2 mins', type: 'lesson' },
  { name: 'Exercise 01', color: '#06B6D4', duration: '3 mins', type: 'exercise' },
  { name: 'Lesson 06: Pronouns', color: '#10B981', duration: '1 min', type: 'lesson' },
  { name: 'Lesson 07: Pronouns 2', color: '#3B82F6', duration: '3 mins', type: 'lesson' },
  { name: 'Lesson 08: Pronouns 3', color: '#F59E0B', duration: '3 mins', type: 'lesson' },
  { name: 'Lesson 09: Pronouns 4', color: '#8B5CF6', duration: '2 mins', type: 'lesson' },
  { name: 'Exercise 02', color: '#8B5CF6', duration: '2 mins', type: 'exercise' },
  { name: 'Lesson 10: Pronouns 5', color: '#06B6D4', duration: '1 min', type: 'lesson' },
  { name: 'Lesson 11: Pronouns 6', color: '#10B981', duration: '2 mins', type: 'lesson' },
  { name: 'Exercise 03', color: '#3B82F6', duration: '1 min', type: 'exercise' },
  { name: 'Lesson 12: Sentences', color: '#F59E0B', duration: '1 min', type: 'lesson' },
  { name: 'Exercise 04', color: '#8B5CF6', duration: '1 min', type: 'exercise' },
  { name: 'Lesson 13: Sentences 2', color: '#10B981', duration: '2 mins', type: 'lesson' },
  { name: 'Lesson 14: Advanced', color: '#8B5CF6', duration: '3 mins', type: 'lesson' },
  { name: 'Exercise 05', color: '#F59E0B', duration: '2 mins', type: 'exercise' },
  { name: 'Final Project', color: '#10B981', duration: '5 mins', type: 'project', isLarge: true },
];

export default function LessonsScreen({ navigation }) {
  const [tab, setTab] = useState(0); // 0 vocab, 1 grammar

  const handleItemPress = (item) => {
    if (item.name === 'Maryam') {
      navigation?.navigate('BirthOfMaryamScreen');
    } else if (item.name === 'Alphabet') {
      navigation?.navigate('HurufScreen');
    } else {
      navigation?.navigate('SampleScreen', { title: item.name });
    }
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
        <TouchableOpacity style={styles.continueBanner} onPress={() => navigation?.navigate('BirthOfMaryamScreen')}>
          <Text style={styles.continueIcon}>📚</Text>
          <View style={styles.continueText}>
            <Text style={styles.continueTitle}>Continue: Maryam</Text>
            <Text style={styles.continueSubtitle}>2. Lesson</Text>
          </View>
          <Text style={styles.continueArrow}>→</Text>
        </TouchableOpacity>
      )}

      <ScrollView contentContainerStyle={styles.listContent}>
        {tab === 0 ? (
          <View style={styles.vocabContainer}>
            {vocabItems.map((item, i) => (
              <TouchableOpacity key={i} style={[styles.vocabCard, { backgroundColor: item.color }]} onPress={() => handleItemPress(item)}>
                <View style={styles.vocabImageContainer}>
                  <Text style={styles.vocabImage}>{item.image}</Text>
                </View>
                <View style={styles.vocabContent}>
                  <Text style={styles.vocabTitle}>{item.name}</Text>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: item.name === 'Maryam' ? '20%' : '0%' }]} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.grammarContainer}>
            {grammarItems.map((item, i) => {
              // First item: single centered square
              if (i === 0) {
                return (
                  <View key={i} style={styles.grammarRow}>
                    <View style={styles.grammarSpacer} />
                    <TouchableOpacity style={[styles.grammarCard, { backgroundColor: item.color }]} onPress={() => navigation?.navigate('WordsScreen')}>
                      <View style={styles.grammarDot} />
                      <Text style={styles.grammarTitle}>{item.name}</Text>
                      <Text style={styles.grammarDuration}>{item.duration}</Text>
                    </TouchableOpacity>
                    <View style={styles.grammarSpacer} />
                  </View>
                );
              }
              
              // Last item: large rectangle spanning 2x2
              if (item.isLarge) {
                return (
                  <View key={i} style={styles.grammarRow}>
                    <TouchableOpacity style={[styles.grammarLargeCard, { backgroundColor: item.color }]} onPress={() => navigation?.navigate('WordsScreen')}>
                      <View style={styles.grammarDot} />
                      <Text style={styles.grammarTitle}>{item.name}</Text>
                      <Text style={styles.grammarDuration}>{item.duration}</Text>
                      <Text style={styles.grammarImage}>📚</Text>
                    </TouchableOpacity>
                  </View>
                );
              }
              
              // Regular items: 2 per row
              const isFirstInRow = (i - 1) % 2 === 0;
              const isLastInRow = i % 2 === 0;
              
              if (isFirstInRow) {
                return (
                  <View key={i} style={styles.grammarRow}>
                    <TouchableOpacity style={[styles.grammarCard, { backgroundColor: item.color }]} onPress={() => navigation?.navigate('WordsScreen')}>
                      <View style={styles.grammarDot} />
                      <Text style={styles.grammarTitle}>{item.name}</Text>
                      <Text style={styles.grammarDuration}>{item.duration}</Text>
                    </TouchableOpacity>
                    {isLastInRow && <View style={styles.grammarSpacer} />}
                  </View>
                );
              } else {
                return (
                  <TouchableOpacity key={i} style={[styles.grammarCard, { backgroundColor: item.color }]} onPress={() => navigation?.navigate('WordsScreen')}>
                    <View style={styles.grammarDot} />
                    <Text style={styles.grammarTitle}>{item.name}</Text>
                    <Text style={styles.grammarDuration}>{item.duration}</Text>
                  </TouchableOpacity>
                );
              }
            })}
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
    borderRadius: 30,
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
  vocabContainer: { flex: 1 },
  vocabCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  vocabImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  vocabImage: { fontSize: 32 },
  vocabContent: { flex: 1 },
  vocabTitle: { 
    fontSize: 18, 
    fontWeight: '700', 
    marginBottom: 8,
    color: '#151515' 
  },
  progressBar: {
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  grammarContainer: { flex: 1 },
  grammarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  grammarSpacer: { width: '48%' },
  grammarCard: {
    width: '48%',
    height: 80,
    borderRadius: 16,
    padding: 12,
    position: 'relative',
    justifyContent: 'center',
  },
  grammarLargeCard: {
    width: '100%',
    height: 120,
    borderRadius: 16,
    padding: 16,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 12, 
    fontWeight: '700', 
    color: '#FFFFFF',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  grammarDuration: { 
    fontSize: 10, 
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
  },
  grammarImage: {
    fontSize: 24,
    marginTop: 8,
  },
});



