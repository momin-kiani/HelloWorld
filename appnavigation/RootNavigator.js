import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FooterTabBar from '../components/FooterTabBar';
import LessonsScreen from '../screens/LessonsScreen';
import PracticeScreen from '../screens/PracticeScreen';
import QuranScreen from '../screens/QuranScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const TABS = {
  lessons: LessonsScreen,
  practice: PracticeScreen,
  quran: QuranScreen,
  groups: LeaderboardScreen,
  settings: SettingsScreen,
};

export default function RootNavigator() {
  const [activeTab, setActiveTab] = useState('lessons');
  const ActiveComponent = TABS[activeTab];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ActiveComponent />
        <FooterTabBar activeTab={activeTab} onChangeTab={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
});




