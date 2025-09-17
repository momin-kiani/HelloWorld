import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const practiceItems = [
  {
    name: 'Quiz',
    subtitle: 'Review words',
    color: '#FFF8DC',
    icon: '📅',
    isSquare: true,
  },
  {
    name: 'My words',
    subtitle: 'Flashcards',
    color: '#E6F3FF',
    icon: '📚',
    isSquare: true,
  },
  {
    name: 'Recite',
    subtitle: 'With others',
    color: '#F0E6FF',
    icon: '📖',
    isSquare: true,
  },
  {
    name: 'Translate',
    subtitle: 'Quran verses',
    color: '#FFE6F0',
    icon: '🔄',
    isSquare: true,
  },
  {
    name: 'Pray',
    subtitle: 'Set reminders',
    color: '#E8F8F0',
    icon: '🤲',
    isSquare: false,
  },
];

export default function PracticeScreen({ navigation }) {
  const [showFilter, setShowFilter] = useState(false);

  const handleItemPress = (item) => {
    if (item.name === 'Quiz') {
      navigation?.navigate('KuizScreen');
    } else if (item.name === 'My words') {
      navigation?.navigate('PerkataanScreen');
    } else if (item.name === 'Recite') {
      navigation?.navigate('QuranScreen');
    } else if (item.name === 'Translate') {
      navigation?.navigate('TranslateScreen');
    } else if (item.name === 'Pray') {
      navigation?.navigate('WaktuSolatScreen');
    } else {
      navigation?.navigate('SampleScreen', { title: item.name, screenType: item.name.toLowerCase() });
    }
  };

  const handleFilterPress = () => {
    setShowFilter(!showFilter);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Practice</Text>
        <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
          <Text style={styles.filterText}>Filter by</Text>
        </TouchableOpacity>
      </View>

      {showFilter && (
        <View style={styles.filterModal}>
          <Text style={styles.filterTitle}>Filter by</Text>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterOptionText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterOptionText}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterOption}>
            <Text style={styles.filterOptionText}>Favorites</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
          {/* First row: Quiz and My words */}
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.squareTile, { backgroundColor: practiceItems[0].color }]}
              onPress={() => handleItemPress(practiceItems[0])}
            >
              <Text style={styles.tileIcon}>{practiceItems[0].icon}</Text>
              <Text style={styles.tileTitle}>{practiceItems[0].name}</Text>
              <Text style={styles.tileSubtitle}>{practiceItems[0].subtitle}</Text>
              <Text style={styles.tileArrow}>→</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.squareTile, { backgroundColor: practiceItems[1].color }]}
              onPress={() => handleItemPress(practiceItems[1])}
            >
              <Text style={styles.tileIcon}>{practiceItems[1].icon}</Text>
              <Text style={styles.tileTitle}>{practiceItems[1].name}</Text>
              <Text style={styles.tileSubtitle}>{practiceItems[1].subtitle}</Text>
              <Text style={styles.tileArrow}>→</Text>
            </TouchableOpacity>
          </View>

          {/* Second row: Recite and Translate */}
          <View style={styles.row}>
            <TouchableOpacity
              style={[styles.squareTile, { backgroundColor: practiceItems[2].color }]}
              onPress={() => handleItemPress(practiceItems[2])}
            >
              <Text style={styles.tileIcon}>{practiceItems[2].icon}</Text>
              <Text style={styles.tileTitle}>{practiceItems[2].name}</Text>
              <Text style={styles.tileArrow}>→</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.squareTile, { backgroundColor: practiceItems[3].color }]}
              onPress={() => handleItemPress(practiceItems[3])}
            >
              <Text style={styles.tileIcon}>{practiceItems[3].icon}</Text>
              <Text style={styles.tileTitle}>{practiceItems[3].name}</Text>
              <Text style={styles.tileSubtitle}>{practiceItems[3].subtitle}</Text>
              <Text style={styles.tileArrow}>→</Text>
            </TouchableOpacity>
          </View>

          {/* Pray section - rectangle */}
          <TouchableOpacity
            style={[styles.rectangleTile, { backgroundColor: practiceItems[4].color }]}
            onPress={() => handleItemPress(practiceItems[4])}
          >
            <Text style={styles.tileIcon}>{practiceItems[4].icon}</Text>
            <Text style={styles.tileTitle}>{practiceItems[4].name}</Text>
            <Text style={styles.tileSubtitle}>{practiceItems[4].subtitle}</Text>
            <Text style={styles.tileArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    marginBottom: 16,
  },
  title: { 
    fontSize: 32, 
    fontWeight: '800' 
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3EFEA',
    borderRadius: 20,
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#151515',
  },
  filterModal: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#151515',
  },
  filterOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  filterOptionText: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  grid: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  squareTile: {
    flex: 1,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    minHeight: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleTile: {
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tileIcon: { 
    fontSize: 32, 
    marginBottom: 8,
  },
  tileTitle: { 
    fontWeight: '700', 
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'center',
  },
  tileSubtitle: { 
    fontSize: 14, 
    color: '#666',
    marginBottom: 8,
    textAlign: 'center',
  },
  tileArrow: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    fontSize: 18,
    color: '#000',
  },
});
