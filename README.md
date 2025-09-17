# HelloWorld - Quranic Learning App

A comprehensive React Native Expo application designed for Quranic learning with an intuitive interface and engaging user experience.

## 🚀 Features

### 📱 Onboarding Experience
- **Auto-sliding Image Carousel**: 3-slide onboarding with 5-second auto-advance
- **Manual Swipe Navigation**: Users can swipe through slides manually
- **Orange Pagination Dots**: Visual indicators for current slide position
- **60% Image Coverage**: Optimized layout with prominent visual content
- **Call-to-Action**: "Get Started" button and "Log In" text for user engagement

### 📚 Lessons Section
- **Vocabulary Tab**: 
  - Continue Maryam section with rounded design (30% border radius)
  - Alphabet section with scrollable content
  - Story cards with colorful backgrounds and emoji icons
  - Clickable elements leading to detailed screens
- **Grammar Tab**:
  - Grid layout with specific pattern (1-2-2-2...)
  - Same-sized square cards with consistent styling
  - Color-coded lesson categories
  - Large project card at the end with image

### 🎯 Practice Section
- **Interactive Tiles**:
  - Quiz (Light Yellow) - Calendar icon
  - My Words (Light Blue) - Book icon  
  - Recite (Light Purple) - Book icon
  - Translate (Light Pink) - Refresh icon
  - Pray (Light Green) - Rectangle format
- **20% Rounded Corners**: Modern design aesthetic
- **Right Arrow Indicators**: Visual cues for clickable elements
- **Filter by Option**: Expandable filter modal

### 📖 Quran Section
- **Fully Scrollable Interface**: No fixed elements, complete scroll experience
- **Surahs & Rooms Tabs**: Toggle between different content types
- **Juz Organization**: 23 Juz sections with 2 surah cards each
- **Surah Cards**: Number, Arabic name, translation, and word percentage
- **Filter Options**: "Filter by First to last" with search functionality

### 🏆 Leaderboard Section
- **Centered + Button**: Prominent create group option
- **Quranic Group Card**: Main community access
- **Donate Card**: Positioned above footer for visibility
- **Clean Layout**: Focused on group creation and community

### ⚙️ Settings Section
- **Subscription Tab**:
  - Free Plan panel with upgrade option
  - Redeem code, Restore purchase, Donate subscription options
  - I want to donate card
- **Settings Tab**:
  - Offline Lesson Access with purple icon
  - Daily reminders, Language, Quran Translation
  - Toggle switches for In-app sounds and Quiz timer
  - Rate app, Join community, Contact Us options
  - Sign out and Delete Account options

## 🎨 Design System

### Color Palette
- **Primary Orange**: #F28C28 (Buttons, active states, accents)
- **Background**: #F8EFEA (Warm, inviting background)
- **Card Backgrounds**: Various light colors for visual hierarchy
- **Text Colors**: #151515 (Primary), #6D6A67 (Secondary), #666 (Tertiary)

### Typography
- **Headers**: 28-32px, Bold (800 weight)
- **Subheaders**: 18-20px, Semi-bold (600-700 weight)
- **Body Text**: 14-16px, Regular-Medium
- **Small Text**: 12-14px, Regular

### Components
- **Cards**: 12-16px border radius, elevation shadows
- **Buttons**: 8-12px border radius, orange background
- **Icons**: Emoji-based for universal recognition
- **Navigation**: Custom footer tab bar with active states

## 📱 Screen Navigation

### Main Screens
1. **Onboarding** → Main App / Login
2. **Lessons** → Birth of Maryam, Huruf, Words screens
3. **Practice** → Quiz, Perkataan, Translate, Waktu Solat screens
4. **Quran** → Al-Fatihah, Al-Baqarah, other Surah screens
5. **Leaderboard** → Group creation and community screens
6. **Settings** → Various configuration and account screens

### Detailed Screens
- **Birth of Maryam**: Story progression with lesson breakdown
- **Huruf**: Arabic letters and word building exercises
- **Words**: Grammar lesson content display
- **Kuiz**: Interactive quiz with multiple choice questions
- **Perkataan**: Word collection with search and categorization
- **Translate**: Quranic translation tool with algorithm integration
- **Waktu Solat**: Prayer times and reminder management
- **Al-Fatihah/Al-Baqarah**: Surah display with Arabic text and Urdu translation

## 🛠️ Technical Implementation

### Framework
- **React Native Expo**: Cross-platform mobile development
- **Custom Navigation**: In-app navigation without external libraries
- **State Management**: React hooks (useState) for component state
- **Styling**: StyleSheet for consistent, performant styling

### Architecture
- **Component-based**: Reusable UI components
- **Screen-based Navigation**: Dedicated screens for each feature
- **Props-based Communication**: Data flow between components
- **Custom Hooks**: Reusable logic patterns

### File Structure
```
HelloWorld/
├── App.js                          # Main application entry point
├── appnavigation/
│   └── RootNavigator.js            # Navigation logic and routing
├── components/
│   └── FooterTabBar.js             # Custom bottom navigation
├── screens/
│   ├── LessonsScreen.js            # Main lessons interface
│   ├── PracticeScreen.js           # Practice activities
│   ├── QuranScreen.js              # Quran reading interface
│   ├── LeaderboardScreen.js        # Community features
│   ├── SettingsScreen.js           # App configuration
│   ├── SampleScreen.js             # Generic sample screen
│   ├── LoginScreen.js              # Authentication
│   ├── BirthOfMaryamScreen.js      # Detailed story screen
│   ├── HurufScreen.js              # Arabic letters learning
│   ├── WordsScreen.js              # Grammar content
│   ├── KuizScreen.js               # Interactive quiz
│   ├── PerkataanScreen.js          # Word collection
│   ├── TranslateScreen.js          # Translation tool
│   ├── WaktuSolatScreen.js         # Prayer times
│   ├── AlFatihahScreen.js          # Surah Al-Fatihah
│   └── AlBaqarahScreen.js          # Surah Al-Baqarah
└── assets/                         # Images and static resources
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npx expo start
   ```

### Running on Device
- **iOS**: Scan QR code with Camera app or Expo Go
- **Android**: Scan QR code with Expo Go app
- **Web**: Press 'w' in terminal to open in browser

## 📱 User Experience

### Onboarding Flow
1. User opens app → Onboarding slides auto-advance
2. User can swipe manually or wait for auto-advance
3. "Get Started" → Main application
4. "Log In" → Login screen

### Learning Journey
1. **Lessons**: Vocabulary and Grammar sections with interactive content
2. **Practice**: Quiz, word collection, recitation, and translation tools
3. **Quran**: Surah reading with Arabic text and translations
4. **Community**: Leaderboard and group features
5. **Settings**: Personalization and account management

### Navigation Patterns
- **Footer Tabs**: Primary navigation between main sections
- **Back Buttons**: Consistent return navigation
- **Sample Screens**: Placeholder content for future features
- **Modal Overlays**: Filter options and additional content

## 🎯 Future Enhancements

### Planned Features
- **Audio Integration**: Quranic recitation and pronunciation
- **Progress Tracking**: Learning analytics and achievements
- **Offline Support**: Downloadable content for offline access
- **Social Features**: Study groups and community interaction
- **Personalization**: Custom themes and learning paths

### Technical Improvements
- **Performance Optimization**: Image loading and memory management
- **Accessibility**: Screen reader support and voice navigation
- **Internationalization**: Multi-language support
- **Push Notifications**: Reminder and engagement features
- **Analytics**: User behavior tracking and insights

## 📄 License

This project is developed for educational and learning purposes. All rights reserved.

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the development team.

---

**Built with ❤️ for Quranic learning and education**
