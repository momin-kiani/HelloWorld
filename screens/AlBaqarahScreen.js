import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function AlBaqarahScreen({ navigation }) {
  const verses = [
    { arabic: 'الم', urdu: 'الف، لام، میم' },
    { arabic: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ', urdu: 'یہ وہ کتاب ہے جس میں کوئی شک نہیں، متقین کے لیے ہدایت ہے' },
    { arabic: 'الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ', urdu: 'جو غیب پر ایمان لاتے ہیں اور نماز قائم کرتے ہیں اور جو کچھ ہم نے انہیں دیا ہے اس میں سے خرچ کرتے ہیں' },
    { arabic: 'وَالَّذِينَ يُؤْمِنُونَ بِمَا أُنزِلَ إِلَيْكَ وَمَا أُنزِلَ مِن قَبْلِكَ وَبِالْآخِرَةِ هُمْ يُوقِنُونَ', urdu: 'اور جو ایمان لاتے ہیں اس پر جو تم پر نازل کیا گیا اور اس پر جو تم سے پہلے نازل کیا گیا اور آخرت پر یقین رکھتے ہیں' },
    { arabic: 'أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ ۖ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ', urdu: 'یہی لوگ اپنے رب کی طرف سے ہدایت پر ہیں اور یہی کامیاب ہیں' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Al-Baqarah</Text>
        <Text style={styles.subtitle}>The Cow - سورۃ البقرہ</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>286 verses • Madani • 2nd Surah</Text>
        </View>

        <View style={styles.versesContainer}>
          {verses.map((verse, index) => (
            <View key={index} style={styles.verseCard}>
              <View style={styles.verseNumber}>
                <Text style={styles.verseNumberText}>{index + 1}</Text>
              </View>
              <View style={styles.verseContent}>
                <Text style={styles.arabicText}>{verse.arabic}</Text>
                <Text style={styles.urduText}>{verse.urdu}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.navigationContainer}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>← Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>Next →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Play Audio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Add to Favorites</Text>
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
  infoCard: {
    backgroundColor: '#E8F4FD',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#151515',
    fontWeight: '600',
  },
  versesContainer: {
    marginBottom: 24,
  },
  verseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  verseNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F28C28',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  verseNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  verseContent: {
    flex: 1,
  },
  arabicText: {
    fontSize: 18,
    color: '#151515',
    marginBottom: 8,
    textAlign: 'right',
    lineHeight: 28,
  },
  urduText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#F3EFEA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  navButtonText: {
    color: '#F28C28',
    fontSize: 14,
    fontWeight: '600',
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#F28C28',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
