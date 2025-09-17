import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import FooterTabBar from '../components/FooterTabBar';
import LessonsScreen from '../screens/LessonsScreen';
import PracticeScreen from '../screens/PracticeScreen';
import QuranScreen from '../screens/QuranScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SampleScreen from '../screens/SampleScreen';
import LoginScreen from '../screens/LoginScreen';

const TABS = {
  lessons: LessonsScreen,
  practice: PracticeScreen,
  quran: QuranScreen,
  groups: LeaderboardScreen,
  settings: SettingsScreen,
};

export default function RootNavigator({ loginMode = false }) {
  const [activeTab, setActiveTab] = useState('lessons');
  const [currentScreen, setCurrentScreen] = useState(loginMode ? 'login' : 'main');
  const [screenParams, setScreenParams] = useState({});

  const navigate = (screenName, params = {}) => {
    if (screenName === 'SampleScreen') {
      setCurrentScreen('sample');
      setScreenParams(params);
    } else {
      setCurrentScreen(screenName);
      setScreenParams(params);
    }
  };

  const goBack = () => {
    setCurrentScreen('main');
    setScreenParams({});
  };

  const navigation = {
    navigate,
    goBack,
  };

  if (currentScreen === 'login') {
    return <LoginScreen navigation={navigation} />;
  }

  if (currentScreen === 'sample') {
    return <SampleScreen route={{ params: screenParams }} navigation={navigation} />;
  }

  const ActiveComponent = TABS[activeTab];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <ActiveComponent navigation={navigation} />
        <FooterTabBar activeTab={activeTab} onChangeTab={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { flex: 1 },
});




