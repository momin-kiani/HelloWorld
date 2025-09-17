import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function RoomScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Room 1: 1:1</Text>
        <Text style={styles.subtitle}>Study Room</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.roomInfo}>
          <Text style={styles.roomIcon}>🏠</Text>
          <Text style={styles.roomDescription}>
            Welcome to your study room. Here you can practice with other learners and track your progress.
          </Text>
        </View>

        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>Room Menu</Text>
          
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SampleScreen', { title: 'Start Study Session' })}>
            <Text style={styles.menuIcon}>📚</Text>
            <Text style={styles.menuText}>Start Study Session</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SampleScreen', { title: 'Invite Friends' })}>
            <Text style={styles.menuIcon}>👥</Text>
            <Text style={styles.menuText}>Invite Friends</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SampleScreen', { title: 'Room Settings' })}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Room Settings</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SampleScreen', { title: 'View Progress' })}>
            <Text style={styles.menuIcon}>📊</Text>
            <Text style={styles.menuText}>View Progress</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SampleScreen', { title: 'Leave Room' })}>
            <Text style={styles.menuIcon}>🚪</Text>
            <Text style={styles.menuText}>Leave Room</Text>
            <Text style={styles.menuArrow}>→</Text>
          </TouchableOpacity>
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
  roomInfo: {
    backgroundColor: '#E8F4FD',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 24,
  },
  roomIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  roomDescription: {
    fontSize: 16,
    color: '#151515',
    textAlign: 'center',
    lineHeight: 22,
  },
  menuContainer: {
    marginBottom: 24,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151515',
    marginBottom: 16,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#151515',
  },
  menuArrow: {
    fontSize: 18,
    color: '#666',
  },
});
