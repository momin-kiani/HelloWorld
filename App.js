import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RootNavigator from './appnavigation/RootNavigator';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const SLIDES = [
  {
    key: 'slide1',
    image: require('./assets/slide1.png'),
    title: 'Only 5 minutes a day',
    subtitle:
      "We understand you're busy, and hence, we designed the lessons to fit your schedule.",
  },
  {
    key: 'slide2',
    image: require('./assets/slide2.png'),
    title: 'Quranic Arabic for Busy People',
    subtitle:
      'Learn Arabic via stories from the Quran! Understand the words in their original context.',
  },
  {
    key: 'slide3',
    image: require('./assets/slide3.png'),
    title: 'Apply your Arabic Knowledge',
    subtitle:
      'With every new word you learn, you can test your knowledge by applying it on the Quran.',
  },
];

function Onboarding({ onStart }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % SLIDES.length;
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ x: nextIndex * SCREEN_WIDTH, animated: true });
      }
      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const onMomentumEnd = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SCREEN_WIDTH);
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  };

  const imageHeight = Math.round(SCREEN_HEIGHT * 0.6);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={[styles.sliderContainer, { height: imageHeight }]}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentumEnd}
        >
          {SLIDES.map((slide) => (
            <View key={slide.key} style={{ width: SCREEN_WIDTH, alignItems: 'center', justifyContent: 'center' }}>
              <Image
                source={slide.image}
                resizeMode="contain"
                style={{ width: SCREEN_WIDTH * .8, height: imageHeight * 1.5 }}
              />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{SLIDES[activeIndex].title}</Text>
        <Text style={styles.subtitle}>{SLIDES[activeIndex].subtitle}</Text>

        <View style={styles.pagination}>
          {SLIDES.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === activeIndex ? '#F28C28' : '#E6E0DA' },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity activeOpacity={0.8} style={styles.ctaButton} onPress={onStart}>
          <Text style={styles.ctaText}>Get Started</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Already have an account? <Text style={styles.linkText}>Log In</Text>
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  const [started, setStarted] = useState(false);
  return started ? <RootNavigator /> : <Onboarding onStart={() => setStarted(true)} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8EFEA',
  },
  sliderContainer: {
    width: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#151515',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6D6A67',
    lineHeight: 22,
    marginTop: 12,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 18,
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  ctaButton: {
    marginTop: 22,
    backgroundColor: '#F28C28',
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  footerText: {
    marginTop: 18,
    textAlign: 'center',
    color: '#9A9794',
    fontSize: 14,
  },
  linkText: {
    color: '#1A73E8',
    fontWeight: '600',
  },
});
