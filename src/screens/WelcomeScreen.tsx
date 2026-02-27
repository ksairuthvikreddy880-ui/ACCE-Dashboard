import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import AnimatedView from '../components/ui/AnimatedView';
import PremiumButton from '../components/ui/PremiumButton';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const { height } = Dimensions.get('window');

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const handleExploreApp = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.primary[50], Colors.white]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <AnimatedView delay={0} style={styles.headerContainer}>
            <View style={styles.iconContainer}>
              <Ionicons name="people-circle" size={80} color={Colors.primary[600]} />
            </View>
          </AnimatedView>

          <AnimatedView delay={200} style={styles.textContainer}>
            <Text style={styles.title}>
              Welcome to Your{'\n'}
              <Text style={styles.titleAccent}>Professional Community</Text>
            </Text>
          </AnimatedView>

          <AnimatedView delay={400} style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Connect, collaborate, and grow with industry leaders. Access exclusive events,
              resources, and networking opportunities designed for professionals like you.
            </Text>
          </AnimatedView>

          <AnimatedView delay={600} style={styles.buttonContainer}>
            <PremiumButton
              title="Explore App"
              onPress={handleExploreApp}
              style={styles.exploreButton}
              textStyle={styles.exploreButtonText}
            />
          </AnimatedView>

          <AnimatedView delay={800} style={styles.hintContainer}>
            <Text style={styles.hintText}>Discover what awaits you</Text>
            <View style={styles.arrowContainer}>
              <Ionicons name="chevron-down" size={20} color={Colors.neutral[400]} />
            </View>
          </AnimatedView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    marginBottom: 32,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  titleAccent: {
    color: Colors.primary[600],
  },
  descriptionContainer: {
    marginBottom: 48,
    paddingHorizontal: 16,
  },
  description: {
    fontSize: 18,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonContainer: {
    marginBottom: 32,
  },
  exploreButton: {
    paddingHorizontal: 48,
    paddingVertical: 18,
    shadowColor: Colors.primary[600],
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  exploreButtonText: {
    fontSize: 18,
    fontFamily: Fonts.heading.medium,
  },
  hintContainer: {
    alignItems: 'center',
  },
  hintText: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[400],
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  arrowContainer: {
    opacity: 0.6,
  },
});