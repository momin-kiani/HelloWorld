import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function KuizScreen({ navigation }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What does 'Al-Fatihah' mean?",
      options: ["The Opening", "The Cow", "The Family", "The Women"],
      correct: 0
    },
    {
      question: "How many verses are in Al-Fatihah?",
      options: ["5", "6", "7", "8"],
      correct: 2
    },
    {
      question: "What is the first word of the Quran?",
      options: ["Bismillah", "Alhamdulillah", "Allahu", "Rahman"],
      correct: 0
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed
      navigation.navigate('SampleScreen', { title: 'Quiz Completed', score: score });
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Text style={styles.title}>Kuiz</Text>
        <Text style={styles.progress}>Question {currentQuestion + 1} of {questions.length}</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === index && styles.selectedOption,
                selectedAnswer !== null && index === questions[currentQuestion].correct && styles.correctOption
              ]}
              onPress={() => handleAnswerSelect(index)}
              disabled={selectedAnswer !== null}
            >
              <Text style={[
                styles.optionText,
                selectedAnswer === index && styles.selectedOptionText,
                selectedAnswer !== null && index === questions[currentQuestion].correct && styles.correctOptionText
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedAnswer !== null && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Text>
          </TouchableOpacity>
        )}
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
  progress: {
    fontSize: 16,
    color: '#6D6A67',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 20,
  },
  questionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#151515',
    textAlign: 'center',
    lineHeight: 24,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  optionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selectedOption: {
    backgroundColor: '#F28C28',
  },
  correctOption: {
    backgroundColor: '#10B981',
  },
  optionText: {
    fontSize: 16,
    color: '#151515',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  correctOptionText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  nextButton: {
    backgroundColor: '#F28C28',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
