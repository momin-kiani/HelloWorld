import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
  const handleItemPress = (item) => {
    navigation?.navigate('SampleScreen', { title: item.name });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice</Text>
      <View style={styles.grid}>
        {practiceItems.map((item, index) => (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.tile,
              { 
                backgroundColor: item.color,
                width: item.isSquare ? '47%' : '100%',
                borderRadius: 20,
              }
            ]}
            onPress={() => handleItemPress(item)}
          >
            <Text style={styles.tileIcon}>{item.icon}</Text>
            <Text style={styles.tileTitle}>{item.name}</Text>
            <Text style={styles.tileSubtitle}>{item.subtitle}</Text>
            <Text style={styles.tileArrow}>→</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  title: { fontSize: 32, fontWeight: '800', marginHorizontal: 20, marginTop: 8 },
  grid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    padding: 16, 
    gap: 12,
    justifyContent: 'space-between',
  },
  tile: { 
    padding: 20,
    position: 'relative',
    minHeight: 120,
  },
  tileIcon: { 
    fontSize: 32, 
    marginBottom: 8,
  },
  tileTitle: { 
    fontWeight: '700', 
    fontSize: 18,
    marginBottom: 4,
  },
  tileSubtitle: { 
    fontSize: 14, 
    color: '#666',
    marginBottom: 8,
  },
  tileArrow: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    fontSize: 18,
    color: '#000',
  },
});



