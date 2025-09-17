import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function BirthOfMaryamScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>The Birth of Maryam</Text>
        <Text style={styles.subtitle}>Continue: Maryam</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.storyCard}>
          <Text style={styles.storyIcon}>👩</Text>
          <Text style={styles.storyTitle}>Maryam's Story</Text>
          <Text style={styles.storyDescription}>
            Learn about the miraculous birth of Maryam (Mary), the mother of Prophet Isa (Jesus), 
            and her special place in Islamic tradition.
          </Text>
        </View>

        <View style={styles.lessonsContainer}>
          <Text style={styles.lessonsTitle}>Lessons in this story:</Text>
          {[
            { title: 'Introduction to Maryam', duration: '2 mins', completed: true },
            { title: 'The Annunciation', duration: '3 mins', completed: true },
            { title: 'The Birth of Isa', duration: '4 mins', completed: false },
            { title: 'Maryam\'s Virtues', duration: '2 mins', completed: false },
          ].map((lesson, index) => (
            <TouchableOpacity key={index} style={styles.lessonItem}>
              <View style={styles.lessonIcon}>
                <Text style={styles.lessonIconText}>{lesson.completed ? '✓' : '○'}</Text>
              </View>
              <View style={styles.lessonContent}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonDuration}>{lesson.duration}</Text>
              </View>
              <Text style={styles.lessonArrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue Learning</Text>
        </TouchableOpacity>
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
  storyCard: {
    backgroundColor: '#F0E6FF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    alignItems: 'center',
  },
  storyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  storyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 8,
  },
  storyDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  lessonsContainer: {
    marginBottom: 24,
  },
  lessonsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 16,
  },
  lessonItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  lessonIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F28C28',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  lessonIconText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonContent: {
    flex: 1,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 4,
  },
  lessonDuration: {
    fontSize: 14,
    color: '#666',
  },
  lessonArrow: {
    fontSize: 18,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#F28C28',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
