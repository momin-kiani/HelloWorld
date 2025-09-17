import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [tab, setTab] = useState(0); // 0 subscription, 1 settings
  const [inAppSounds, setInAppSounds] = useState(false);
  const [quizTimer, setQuizTimer] = useState(true);

  const handleItemPress = (title) => {
    navigation?.navigate('SampleScreen', { title });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile</Text>
        <Text style={styles.email}>mominkiani73@gmail.com</Text>
        <TouchableOpacity style={styles.shareButton} onPress={() => handleItemPress('Share App')}>
          <Text style={styles.shareButtonText}>Share App</Text>
          <Text style={styles.shareArrow}>↗</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.toggleRow}>
        {['Subscription', 'Settings'].map((t, i) => (
          <TouchableOpacity key={t} style={[styles.toggleBtn, i === tab && styles.toggleActive]} onPress={() => setTab(i)}>
            <Text style={[styles.toggleText, { color: i === tab ? '#F28C28' : '#6D6A67' }]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {tab === 0 ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.freePlanPanel}>
            <Text style={styles.panelTitle}>You're on the Free Plan.</Text>
            <Text style={styles.panelSubtitle}>You're on the Free Plan. You have limited benefits. Upgrade for the full experience.</Text>
            <TouchableOpacity style={styles.upgradeButton} onPress={() => handleItemPress('Upgrade Plan')}>
              <Text style={styles.upgradeButtonText}>Upgrade Plan</Text>
              <Text style={styles.upgradeIcon}>💎</Text>
            </TouchableOpacity>
          </View>
          
          {[
            { title: 'Redeem code', icon: '🎫' },
            { title: 'Restore purchase', icon: '🔄' },
            { title: 'Donate a subscription', icon: '📖' },
          ].map((item) => (
            <TouchableOpacity key={item.title} style={styles.subscriptionRow} onPress={() => handleItemPress(item.title)}>
              <Text style={styles.subscriptionIcon}>{item.icon}</Text>
              <Text style={styles.subscriptionText}>{item.title}</Text>
              <Text style={styles.subscriptionArrow}>→</Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity style={styles.donateCard} onPress={() => handleItemPress('Donate')}>
            <Text style={styles.donateIcon}>🎁</Text>
            <View style={styles.donateContent}>
              <Text style={styles.donateTitle}>I want to donate!</Text>
              <Text style={styles.donateSubtitle}>Help a student on their learning journey with a Quranic Pro membership.</Text>
            </View>
            <Text style={styles.donateArrow}>→</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          <TouchableOpacity style={styles.settingsRow} onPress={() => handleItemPress('Offline Lesson Access')}>
            <Text style={styles.settingsIcon}>📥</Text>
            <Text style={styles.settingsText}>Offline Lesson Access</Text>
            <Text style={styles.settingsPurpleIcon}>💜</Text>
            <Text style={styles.settingsArrow}>→</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsRow} onPress={() => handleItemPress('Daily reminders')}>
            <Text style={styles.settingsIcon}>☀️</Text>
            <Text style={styles.settingsText}>Daily reminders</Text>
            <Text style={styles.settingsArrow}>→</Text>
          </TouchableOpacity>
          
          <View style={styles.settingsRowBetween}>
            <View style={styles.settingsRowLeft}>
              <Text style={styles.settingsIcon}>🔔</Text>
              <Text style={styles.settingsText}>In-app sounds</Text>
            </View>
            <Switch value={inAppSounds} onValueChange={setInAppSounds} />
          </View>
          
          <View style={styles.settingsRowBetween}>
            <View style={styles.settingsRowLeft}>
              <Text style={styles.settingsIcon}>⏱️</Text>
              <Text style={styles.settingsText}>Default quiz timer (60s)</Text>
              <Text style={styles.settingsPurpleIcon}>💜</Text>
            </View>
            <Switch value={quizTimer} onValueChange={setQuizTimer} />
          </View>
          
          {[
            { title: 'Language', icon: '🌐', subtitle: 'English', flag: '🇺🇸' },
            { title: 'Quran Translation', icon: '📖' },
            { title: 'Rate the app', icon: '⭐' },
            { title: 'Join our pro community', icon: '👥' },
            { title: 'See what\'s new with Quranic', icon: '🆕' },
            { title: 'Contact Us', icon: '📞' },
          ].map((item) => (
            <TouchableOpacity key={item.title} style={styles.settingsRow} onPress={() => handleItemPress(item.title)}>
              <Text style={styles.settingsIcon}>{item.icon}</Text>
              <Text style={styles.settingsText}>{item.title}</Text>
              {item.subtitle && (
                <View style={styles.settingsSubtitleContainer}>
                  <Text style={styles.settingsFlag}>{item.flag}</Text>
                  <Text style={styles.settingsSubtitle}>{item.subtitle}</Text>
                </View>
              )}
              <Text style={styles.settingsArrow}>→</Text>
            </TouchableOpacity>
          ))}
          
          <TouchableOpacity style={styles.settingsRow} onPress={() => handleItemPress('Sign out')}>
            <Text style={[styles.settingsText, { color: '#D94A38' }]}>Sign out</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.settingsRow} onPress={() => handleItemPress('Delete Account')}>
            <Text style={[styles.settingsText, { color: '#D94A38' }]}>Delete Account</Text>
          </TouchableOpacity>
          
          <Text style={styles.versionText}>App version 2.28.0(14)-</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    paddingHorizontal: 20,
    paddingTop: 8,
    position: 'relative',
  },
  title: { fontSize: 32, fontWeight: '800', marginBottom: 4 },
  email: { fontSize: 16, color: '#666', marginBottom: 8 },
  shareButton: {
    position: 'absolute',
    top: 8,
    right: 20,
    backgroundColor: '#FDF3EC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  shareButtonText: { fontSize: 14, fontWeight: '600' },
  shareArrow: { fontSize: 12 },
  toggleRow: { flexDirection: 'row', backgroundColor: '#F3EFEA', margin: 16, borderRadius: 12 },
  toggleBtn: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 12 },
  toggleActive: { backgroundColor: '#FFFFFF', elevation: 2 },
  toggleText: { fontWeight: '700' },
  content: { padding: 16, paddingBottom: 120 },
  freePlanPanel: {
    backgroundColor: '#EDE5FB',
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
  },
  panelTitle: { fontSize: 18, fontWeight: '800', marginBottom: 6 },
  panelSubtitle: { fontSize: 14, color: '#666', marginBottom: 12, lineHeight: 20 },
  upgradeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  upgradeButtonText: { color: '#FFFFFF', fontWeight: '700' },
  upgradeIcon: { fontSize: 16 },
  subscriptionRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 1,
  },
  subscriptionIcon: { fontSize: 20 },
  subscriptionText: { flex: 1, fontSize: 16, fontWeight: '600' },
  subscriptionArrow: { fontSize: 16, color: '#666' },
  donateCard: {
    backgroundColor: '#FDF3EC',
    borderRadius: 16,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 8,
  },
  donateIcon: { fontSize: 24 },
  donateContent: { flex: 1 },
  donateTitle: { fontSize: 16, fontWeight: '700', marginBottom: 4 },
  donateSubtitle: { fontSize: 14, color: '#666', lineHeight: 18 },
  donateArrow: { fontSize: 16 },
  settingsRow: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 1,
  },
  settingsRowBetween: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
  },
  settingsRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  settingsIcon: { fontSize: 20 },
  settingsText: { fontSize: 16, fontWeight: '600', flex: 1 },
  settingsPurpleIcon: { fontSize: 16 },
  settingsSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  settingsFlag: { fontSize: 16 },
  settingsSubtitle: { fontSize: 14, color: '#666' },
  settingsArrow: { fontSize: 16, color: '#666' },
  versionText: { fontSize: 12, color: '#999', textAlign: 'center', marginTop: 16 },
});



