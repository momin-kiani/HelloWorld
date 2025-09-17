import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function SampleScreen({ route, navigation }) {
  const { title } = route.params || { title: 'Sample Screen' };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.screenTitle}>{title}</Text>
        <Text style={styles.description}>
          This is a sample screen that opens when you tap on any clickable element in the app.
          In a real application, this would contain the specific content for the selected item.
        </Text>
        
        <View style={styles.features}>
          <Text style={styles.featureTitle}>Features:</Text>
          <Text style={styles.featureItem}>• Interactive UI elements</Text>
          <Text style={styles.featureItem}>• Navigation between screens</Text>
          <Text style={styles.featureItem}>• Responsive design</Text>
          <Text style={styles.featureItem}>• Modern styling</Text>
        </View>
        
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.goBack()}>
          <Text style={styles.actionButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: { fontSize: 20, color: '#000' },
  title: { 
    flex: 1, 
    fontSize: 20, 
    fontWeight: '700', 
    textAlign: 'center',
    marginHorizontal: 16,
  },
  placeholder: { width: 40 },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  screenTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#F28C28',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 30,
  },
  features: {
    alignSelf: 'stretch',
    marginBottom: 30,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#333',
  },
  featureItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  actionButton: {
    backgroundColor: '#F28C28',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 28,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});
