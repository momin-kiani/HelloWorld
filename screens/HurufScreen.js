import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function HurufScreen({ navigation }) {
  const hurufItems = [
    { title: 'Letters', icon: '🔤', description: 'Learn Arabic letters', color: '#E8F4FD' },
    { title: '2-letter words', icon: '📝', description: 'Basic word formation', color: '#F0E6FF' },
    { title: '3-letter words', icon: '📚', description: 'Advanced word building', color: '#FFF2E8' },
    { title: '4-letter words', icon: '📖', description: 'Complex vocabulary', color: '#E8F8F0' },
    { title: '5-letter words', icon: '✍️', description: 'Advanced vocabulary', color: '#F0F8FF' },
    { title: 'Reading practice', icon: '👁️', description: 'Improve reading skills', color: '#FFF8E8' },
    { title: 'Writing practice', icon: '✏️', description: 'Handwriting exercises', color: '#F8F0FF' },
    { title: 'Pronunciation', icon: '🗣️', description: 'Perfect your accent', color: '#E8F0FF' },
    { title: 'Vocabulary test', icon: '📊', description: 'Test your knowledge', color: '#FFE6F0' },
    { title: 'Advanced reading', icon: '📰', description: 'Complex texts', color: '#F0F8FF' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Huruf</Text>
        <Text style={styles.subtitle}>Arabic Letters & Words</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.grid}>
          {hurufItems.map((item, index) => (
            <TouchableOpacity key={index} style={[styles.itemCard, { backgroundColor: item.color }]}>
              <Text style={styles.itemIcon}>{item.icon}</Text>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFEA',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
    backgroundColor: '#F28C28',
    borderRadius: 10,
    zIndex: 1,
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6D6A67',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  itemCard: {
    width: '48%',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 4,
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 16,
  },
});
