import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function PerkataanScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Kad'); // 'Kad' or 'Senaraikan'

  const words = [
    { arabic: 'بسم', english: 'In the name of', category: 'Basic' },
    { arabic: 'الله', english: 'Allah', category: 'Basic' },
    { arabic: 'الرحمن', english: 'The Most Gracious', category: 'Basic' },
    { arabic: 'الرحيم', english: 'The Most Merciful', category: 'Basic' },
    { arabic: 'الحمد', english: 'Praise', category: 'Basic' },
    { arabic: 'لله', english: 'to Allah', category: 'Basic' },
    { arabic: 'رب', english: 'Lord', category: 'Basic' },
    { arabic: 'العالمين', english: 'of the worlds', category: 'Advanced' },
  ];

  const filteredWords = words.filter(word => 
    word.arabic.toLowerCase().includes(searchText.toLowerCase()) ||
    word.english.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Perkataan</Text>
        <Text style={styles.subtitle}>My Words Collection</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search words..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Kad' && styles.activeTab]} 
            onPress={() => setActiveTab('Kad')}
          >
            <Text style={[styles.tabText, activeTab === 'Kad' && styles.activeTabText]}>Kad</Text>
            {activeTab === 'Kad' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'Senaraikan' && styles.activeTab]} 
            onPress={() => setActiveTab('Senaraikan')}
          >
            <Text style={[styles.tabText, activeTab === 'Senaraikan' && styles.activeTabText]}>Senaraikan</Text>
            {activeTab === 'Senaraikan' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>

        <View style={styles.wordsContainer}>
          {filteredWords.map((word, index) => (
            <TouchableOpacity key={index} style={styles.wordCard}>
              <View style={styles.wordContent}>
                <Text style={styles.arabicText}>{word.arabic}</Text>
                <Text style={styles.englishText}>{word.english}</Text>
                <Text style={styles.categoryText}>{word.category}</Text>
              </View>
              <Text style={styles.cardArrow}>→</Text>
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
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3EFEA',
    borderRadius: 12,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    position: 'relative',
  },
  activeTab: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6D6A67',
  },
  activeTabText: {
    color: '#F28C28',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 4,
    width: 20,
    height: 3,
    backgroundColor: '#F28C28',
    borderRadius: 2,
  },
  wordsContainer: {
    gap: 12,
  },
  wordCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  wordContent: {
    flex: 1,
  },
  arabicText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 4,
  },
  englishText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    color: '#F28C28',
    fontWeight: '600',
  },
  cardArrow: {
    fontSize: 18,
    color: '#666',
  },
});
