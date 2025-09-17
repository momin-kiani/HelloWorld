import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

function Tab({ label, active, onPress }) {
  return (
    <TouchableOpacity style={[styles.qtab, active && styles.qtabActive]} onPress={onPress}>
      <Text style={[styles.qtabText, { color: active ? '#F28C28' : '#6D6A67' }]}>{label}</Text>
    </TouchableOpacity>
  );
}

const surahData = [
  { juz: 1, surahs: [
    { number: 1, name: 'Al-Fatihah', translation: 'The Opening', words: '13%', image: '🕌' },
    { number: 2, name: 'Al-Baqarah', translation: 'The Cow', words: '17%', image: '🐄' },
  ]},
  { juz: 2, surahs: [
    { number: 3, name: 'Al-Imran', translation: 'The Family of Amran', words: '18%', image: '🏔️' },
    { number: 4, name: 'An-Nisa', translation: 'The Women', words: '17%', image: '👩' },
  ]},
  { juz: 3, surahs: [
    { number: 5, name: 'Al-Ma`idah', translation: 'The Food', words: '16%', image: '🍽️' },
    { number: 6, name: 'Al-An`am', translation: 'The Cattle', words: '17%', image: '🐄' },
  ]},
  { juz: 4, surahs: [
    { number: 7, name: 'Al-A`raf', translation: 'The Heights', words: '16%', image: '⛰️' },
    { number: 8, name: 'Al-Anfal', translation: 'The Spoils', words: '15%', image: '⚔️' },
  ]},
  { juz: 5, surahs: [
    { number: 9, name: 'At-Tawbah', translation: 'The Repentance', words: '18%', image: '🔄' },
    { number: 10, name: 'Yunus', translation: 'Jonah', words: '16%', image: '🐋' },
  ]},
  { juz: 6, surahs: [
    { number: 11, name: 'Hud', translation: 'Hud', words: '17%', image: '🏔️' },
    { number: 12, name: 'Yusuf', translation: 'Joseph', words: '16%', image: '👨' },
  ]},
  { juz: 7, surahs: [
    { number: 13, name: 'Ar-Ra`d', translation: 'The Thunder', words: '15%', image: '⚡' },
    { number: 14, name: 'Ibrahim', translation: 'Abraham', words: '16%', image: '👨' },
  ]},
  { juz: 8, surahs: [
    { number: 15, name: 'Al-Hijr', translation: 'The Rocky Tract', words: '14%', image: '🏔️' },
    { number: 16, name: 'An-Nahl', translation: 'The Bee', words: '17%', image: '🐝' },
  ]},
  { juz: 9, surahs: [
    { number: 17, name: 'Al-Isra', translation: 'The Night Journey', words: '16%', image: '🌙' },
    { number: 18, name: 'Al-Kahf', translation: 'The Cave', words: '18%', image: '🕳️' },
  ]},
  { juz: 10, surahs: [
    { number: 19, name: 'Maryam', translation: 'Mary', words: '18%', image: '👩' },
    { number: 20, name: 'Ta Ha', translation: 'Ta Ha', words: '14%', image: '🌅' },
  ]},
  { juz: 11, surahs: [
    { number: 21, name: 'Al-Anbiya', translation: 'The Prophets', words: '17%', image: '👨‍🏫' },
    { number: 22, name: 'Al-Hajj', translation: 'The Pilgrimage', words: '17%', image: '🕋' },
  ]},
  { juz: 12, surahs: [
    { number: 23, name: 'Al-Mu`minun', translation: 'The Believers', words: '17%', image: '🤲' },
    { number: 24, name: 'An-Nur', translation: 'The Light', words: '16%', image: '💡' },
  ]},
  { juz: 13, surahs: [
    { number: 25, name: 'Al-Furqan', translation: 'The Discrimination', words: '16%', image: '📖' },
    { number: 26, name: 'Ash-Shu`ara', translation: 'The Poets', words: '22%', image: '🔥' },
  ]},
  { juz: 14, surahs: [
    { number: 27, name: 'An-Naml', translation: 'The Ant', words: '18%', image: '🐜' },
    { number: 28, name: 'Al-Qasas', translation: 'The Narrative', words: '17%', image: '📚' },
  ]},
  { juz: 15, surahs: [
    { number: 29, name: 'Al-`Ankabut', translation: 'The Spider', words: '17%', image: '🕷️' },
    { number: 30, name: 'Ar-Rum', translation: 'The Romans', words: '21%', image: '🏛️' },
  ]},
  { juz: 16, surahs: [
    { number: 31, name: 'Luqman', translation: 'Luqman', words: '16%', image: '👨' },
    { number: 32, name: 'As-Sajdah', translation: 'The Adoration', words: '19%', image: '🤲' },
  ]},
  { juz: 17, surahs: [
    { number: 33, name: 'Al-Ahzab', translation: 'The Allies', words: '18%', image: '⚔️' },
    { number: 34, name: 'Saba', translation: 'The Saba', words: '17%', image: '🏔️' },
  ]},
  { juz: 18, surahs: [
    { number: 35, name: 'Al-Fatir', translation: 'The Originator', words: '17%', image: '🌟' },
    { number: 36, name: 'Ya Sin', translation: 'Ya Sin', words: '17%', image: '📖' },
  ]},
  { juz: 19, surahs: [
    { number: 37, name: 'As-Saffat', translation: 'Those Ranging in Ranks', words: '16%', image: '👥' },
    { number: 38, name: 'Sad', translation: 'Sad', words: '16%', image: '📖' },
  ]},
  { juz: 20, surahs: [
    { number: 39, name: 'Az-Zumar', translation: 'The Companies', words: '16%', image: '👥' },
    { number: 40, name: 'Ghafir', translation: 'The Forgiver', words: '17%', image: '🤲' },
  ]},
  { juz: 21, surahs: [
    { number: 41, name: 'Fussilat', translation: 'Explained in Detail', words: '18%', image: '📖' },
    { number: 42, name: 'Ash-Shura', translation: 'The Consultation', words: '16%', image: '👥' },
  ]},
  { juz: 22, surahs: [
    { number: 43, name: 'Az-Zukhruf', translation: 'The Gold', words: '17%', image: '✨' },
    { number: 44, name: 'Ad-Dukhan', translation: 'The Smoke', words: '16%', image: '💨' },
  ]},
  { juz: 23, surahs: [
    { number: 45, name: 'Al-Jathiyah', translation: 'The Crouching', words: '15%', image: '🤲' },
    { number: 46, name: 'Al-Ahqaf', translation: 'The Wind-Curved Sandhills', words: '16%', image: '🏜️' },
  ]},
];

const roomData = [
  { name: 'Room 1: 1:1', image: '🏠' },
  { name: 'Room 2: 1:1', image: '🏠' },
  { name: 'Room 3: 20:1', image: '🏠' },
  { name: 'Room 4: 2:1', image: '🏠' },
];

export default function QuranScreen({ navigation }) {
  const [tab, setTab] = useState('Surahs');

  const handleSurahPress = (surah) => {
    if (surah.name === 'Al-Fatihah') {
      navigation?.navigate('AlFatihahScreen');
    } else if (surah.name === 'Al-Baqarah') {
      navigation?.navigate('AlBaqarahScreen');
    } else {
      navigation?.navigate('SampleScreen', { title: surah.name });
    }
  };

  const handleRoomPress = (room) => {
    navigation?.navigate('RoomScreen', { title: room.name });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Quran</Text>
        <Text style={styles.todayText}>Today 0 min</Text>
      </View>
      
      <View style={styles.storiesRow}>
        <View style={styles.addStory}>
          <Text style={styles.addStoryText}>+</Text>
        </View>
        {roomData.slice(0, 3).map((room, i) => (
          <TouchableOpacity key={i} style={styles.storyItem} onPress={() => handleRoomPress(room)}>
            <View style={styles.storyImage}>
              <Text style={styles.storyEmoji}>{room.image}</Text>
            </View>
            <Text style={styles.storyText}>{room.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.qtabRow}>
        <Tab label="Surahs" active={tab === 'Surahs'} onPress={() => setTab('Surahs')} />
        <Tab label="Rooms" active={tab === 'Rooms'} onPress={() => setTab('Rooms')} />
      </View>

      {tab === 'Surahs' ? (
        <>
          <View style={styles.continueBanner}>
            <Text style={styles.continueIcon}>🕯️</Text>
            <Text style={styles.continueText}>Continue Reading Al-Ma'idah</Text>
            <Text style={styles.continueArrow}>→</Text>
          </View>

          <View style={styles.filterRow}>
            <Text style={styles.filterText}>Filter by </Text>
            <Text style={styles.filterValue}>First to last</Text>
            <Text style={styles.filterArrow}>▼</Text>
            <Text style={styles.searchIcon}>🔍</Text>
          </View>

          <View style={styles.listContent}>
            {surahData.map((juz, juzIndex) => (
              <View key={juzIndex}>
                <Text style={styles.juzTitle}>Juz' {juz.juz}</Text>
                {juz.surahs.map((surah, surahIndex) => (
                  <TouchableOpacity
                    key={surahIndex}
                    style={styles.surahCard}
                    onPress={() => handleSurahPress(surah)}
                  >
                    <Text style={styles.surahNumber}>{surah.number}</Text>
                    <View style={styles.surahInfo}>
                      <Text style={styles.surahName}>{surah.name}</Text>
                      <Text style={styles.surahTranslation}>{surah.translation}</Text>
                    </View>
                    <Text style={styles.surahEmoji}>{surah.image}</Text>
                    <View style={styles.surahWords}>
                      <Text style={styles.wordsPercent}>{surah.words}</Text>
                      <Text style={styles.wordsText}>WORDS</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </>
      ) : (
        <View style={styles.listContent}>
          {roomData.map((room, i) => (
            <TouchableOpacity key={i} style={styles.roomCard} onPress={() => handleRoomPress(room)}>
              <Text style={styles.roomEmoji}>{room.image}</Text>
              <Text style={styles.roomName}>{room.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { paddingBottom: 120 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  title: { fontSize: 32, fontWeight: '800' },
  todayText: { fontSize: 16, color: '#666' },
  storiesRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  addStory: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addStoryText: { fontSize: 24, color: '#000' },
  storyItem: {
    alignItems: 'center',
    gap: 4,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#F28C28',
  },
  storyEmoji: { fontSize: 24, color: '#FFF' },
  storyText: { fontSize: 12, color: '#000' },
  qtabRow: { flexDirection: 'row', backgroundColor: '#F3EFEA', margin: 16, borderRadius: 12 },
  qtab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12 },
  qtabActive: { backgroundColor: '#FFFFFF', elevation: 2 },
  qtabText: { fontWeight: '700' },
  continueBanner: {
    backgroundColor: '#F5F5F5',
    marginHorizontal: 16,
    marginTop: 8,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  continueIcon: { fontSize: 24 },
  continueText: { flex: 1, fontSize: 16, fontWeight: '600' },
  continueArrow: { fontSize: 18, color: '#000' },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 4,
  },
  filterText: { fontSize: 16, color: '#000' },
  filterValue: { fontSize: 16, color: '#1A73E8' },
  filterArrow: { fontSize: 12, color: '#1A73E8' },
  searchIcon: { fontSize: 18, marginLeft: 'auto' },
  listContent: { padding: 16, paddingBottom: 120 },
  juzTitle: { 
    fontSize: 20, 
    fontWeight: '800', 
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  surahCard: {
    backgroundColor: '#333',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  surahNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFF',
  },
  surahInfo: { flex: 1 },
  surahName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 4,
  },
  surahTranslation: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.8,
  },
  surahEmoji: { fontSize: 24 },
  surahWords: { alignItems: 'flex-end' },
  wordsPercent: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFF',
  },
  wordsText: {
    fontSize: 12,
    color: '#FFF',
    opacity: 0.8,
  },
  roomCard: {
    backgroundColor: '#F6F1EB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  roomEmoji: { fontSize: 32 },
  roomName: { fontSize: 18, fontWeight: '700', flex: 1 },
});



