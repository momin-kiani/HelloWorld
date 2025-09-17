import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function TranslateScreen({ navigation }) {
  const [inputText, setInputText] = useState('');
  const [translation, setTranslation] = useState('');

  const handleTranslate = () => {
    // Simulate translation
    if (inputText.trim()) {
      setTranslation(`Translation of "${inputText}" will appear here. The Quranic Algorithm will find verses for you to translate based on the words you have learned.`);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Translate</Text>
        <Text style={styles.subtitle}>Quranic Translation Tool</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>
            The Quranic Algorithm will find verses for you to translate based on the words you have learned.
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter text to translate:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type Arabic text here..."
            value={inputText}
            onChangeText={setInputText}
            multiline
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.translateButton} onPress={handleTranslate}>
            <Text style={styles.translateButtonText}>Translate</Text>
          </TouchableOpacity>
        </View>

        {translation && (
          <View style={styles.translationContainer}>
            <Text style={styles.translationLabel}>Translation:</Text>
            <View style={styles.translationCard}>
              <Text style={styles.translationText}>{translation}</Text>
            </View>
          </View>
        )}

        <View style={styles.suggestionsContainer}>
          <Text style={styles.suggestionsTitle}>Suggested Verses:</Text>
          {[
            { arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', english: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.' },
            { arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ', english: 'Praise be to Allah, Lord of the worlds.' },
            { arabic: 'الرَّحْمَٰنِ الرَّحِيمِ', english: 'The Entirely Merciful, the Especially Merciful.' },
          ].map((verse, index) => (
            <TouchableOpacity key={index} style={styles.verseCard}>
              <Text style={styles.verseArabic}>{verse.arabic}</Text>
              <Text style={styles.verseEnglish}>{verse.english}</Text>
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
  descriptionCard: {
    backgroundColor: '#E8F4FD',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#151515',
    textAlign: 'center',
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  translateButton: {
    backgroundColor: '#F28C28',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  translateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  translationContainer: {
    marginBottom: 20,
  },
  translationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 8,
  },
  translationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  translationText: {
    fontSize: 16,
    color: '#151515',
    lineHeight: 22,
  },
  suggestionsContainer: {
    marginBottom: 20,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 12,
  },
  verseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  verseArabic: {
    fontSize: 18,
    color: '#151515',
    marginBottom: 8,
    textAlign: 'right',
    lineHeight: 28,
  },
  verseEnglish: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});
