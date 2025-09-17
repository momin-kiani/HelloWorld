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
import BirthOfMaryamScreen from '../screens/BirthOfMaryamScreen';
import HurufScreen from '../screens/HurufScreen';
import WordsScreen from '../screens/WordsScreen';
import KuizScreen from '../screens/KuizScreen';
import PerkataanScreen from '../screens/PerkataanScreen';
import TranslateScreen from '../screens/TranslateScreen';
import WaktuSolatScreen from '../screens/WaktuSolatScreen';
import AlFatihahScreen from '../screens/AlFatihahScreen';
import AlBaqarahScreen from '../screens/AlBaqarahScreen';
import RoomScreen from '../screens/RoomScreen';

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
    } else if (screenName === 'BirthOfMaryamScreen') {
      setCurrentScreen('birthOfMaryam');
      setScreenParams(params);
    } else if (screenName === 'HurufScreen') {
      setCurrentScreen('huruf');
      setScreenParams(params);
    } else if (screenName === 'WordsScreen') {
      setCurrentScreen('words');
      setScreenParams(params);
    } else if (screenName === 'KuizScreen') {
      setCurrentScreen('kuiz');
      setScreenParams(params);
    } else if (screenName === 'PerkataanScreen') {
      setCurrentScreen('perkataan');
      setScreenParams(params);
    } else if (screenName === 'TranslateScreen') {
      setCurrentScreen('translate');
      setScreenParams(params);
    } else if (screenName === 'WaktuSolatScreen') {
      setCurrentScreen('waktuSolat');
      setScreenParams(params);
    } else if (screenName === 'AlFatihahScreen') {
      setCurrentScreen('alFatihah');
      setScreenParams(params);
    } else if (screenName === 'AlBaqarahScreen') {
      setCurrentScreen('alBaqarah');
      setScreenParams(params);
    } else if (screenName === 'RoomScreen') {
      setCurrentScreen('room');
      setScreenParams(params);
    } else if (screenName === 'QuranScreen') {
      setActiveTab('quran');
      setCurrentScreen('main');
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

  if (currentScreen === 'birthOfMaryam') {
    return <BirthOfMaryamScreen navigation={navigation} />;
  }

  if (currentScreen === 'huruf') {
    return <HurufScreen navigation={navigation} />;
  }

  if (currentScreen === 'words') {
    return <WordsScreen navigation={navigation} />;
  }

  if (currentScreen === 'kuiz') {
    return <KuizScreen navigation={navigation} />;
  }

  if (currentScreen === 'perkataan') {
    return <PerkataanScreen navigation={navigation} />;
  }

  if (currentScreen === 'translate') {
    return <TranslateScreen navigation={navigation} />;
  }

  if (currentScreen === 'waktuSolat') {
    return <WaktuSolatScreen navigation={navigation} />;
  }

  if (currentScreen === 'alFatihah') {
    return <AlFatihahScreen navigation={navigation} />;
  }

  if (currentScreen === 'alBaqarah') {
    return <AlBaqarahScreen navigation={navigation} />;
  }

  if (currentScreen === 'room') {
    return <RoomScreen navigation={navigation} />;
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




