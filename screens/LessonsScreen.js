import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const vocabItems = ['Alphabet', 'Maryam', 'Ibrahim', 'Adam', 'Hud', 'Salih', 'Shuayb', 'Musa'];
const grammarItems = [
  'Lesson 01: Intro',
  'Lesson 02: Words',
  'Lesson 03: Words 2',
  'Exercise 01',
  'Lesson 06: Pronouns',
  'Exercise 02',
  'Lesson 11: Pronouns 6',
  'Lesson 12: Sentences',
  'Exercise 04',
  'Lesson 13: Sentences 2',
];

export default function LessonsScreen() {
  const [tab, setTab] = useState(0); // 0 vocab, 1 grammar
  const list = tab === 0 ? vocabItems : grammarItems;

  return (
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>Lessons</Text>
      </View>
      <SectionToggle active={tab} onChange={setTab} />
      <ScrollView contentContainerStyle={styles.listContent}>
        {list.map((label, i) => (
          <View key={i} style={styles.card}>
            <Text style={styles.cardTitle}>{label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { paddingHorizontal: 20, paddingTop: 8 },
  title: { fontSize: 32, fontWeight: '800' },
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
  listContent: { padding: 16, paddingBottom: 120, gap: 12 },
  card: {
    backgroundColor: '#F6F1EB',
    borderRadius: 16,
    padding: 18,
  },
  cardTitle: { fontSize: 20, fontWeight: '700' },
});



