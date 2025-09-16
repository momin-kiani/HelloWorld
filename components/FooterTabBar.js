import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TABS = [
  { key: 'lessons', label: 'Home', icon: '🏠' },
  { key: 'practice', label: 'Practice', icon: '🧩' },
  { key: 'quran', label: 'Quran', icon: '📖' },
  { key: 'groups', label: 'Groups', icon: '👥' },
  { key: 'settings', label: 'Settings', icon: '⚙️' },
];

export default function FooterTabBar({ activeTab, onChangeTab }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.bar}>
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <TouchableOpacity
              key={tab.key}
              style={styles.item}
              activeOpacity={0.8}
              onPress={() => onChangeTab(tab.key)}
            >
              <Text style={[styles.icon, { color: isActive ? '#F28C28' : '#9B8F86' }]}>
                {tab.icon}
              </Text>
              <View style={[styles.activePill, { opacity: isActive ? 1 : 0 }]} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 12,
    alignItems: 'center',
  },
  bar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius: 28,
    paddingHorizontal: 12,
    paddingVertical: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    minWidth: 50,
  },
  icon: {
    fontSize: 22,
  },
  activePill: {
    marginTop: 6,
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F28C28',
  },
});



