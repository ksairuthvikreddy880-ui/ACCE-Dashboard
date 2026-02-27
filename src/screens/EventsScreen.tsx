import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import AnimatedView from '../components/ui/AnimatedView';
import PremiumButton from '../components/ui/PremiumButton';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

type EventsScreenProps = {
  navigation: StackNavigationProp<any>;
};

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Leadership Summit',
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    location: 'Grand Conference Center',
    attendees: 150,
    type: 'Conference',
  },
  {
    id: 2,
    title: 'Networking Mixer',
    date: 'March 22, 2024',
    time: '6:00 PM - 9:00 PM',
    location: 'Downtown Club',
    attendees: 75,
    type: 'Networking',
  },
  {
    id: 3,
    title: 'Professional Workshop',
    date: 'April 5, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Training Center',
    attendees: 50,
    type: 'Workshop',
  },
];

export default function EventsScreen({ navigation }: EventsScreenProps) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  const handleRegister = (eventId: number) => {
    // Handle event registration
    console.log('Register for event:', eventId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Upcoming Events</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AnimatedView delay={0} style={styles.content}>
          <Text style={styles.subtitle}>
            Join us for exclusive events designed to advance your career and expand your network
          </Text>
        </AnimatedView>

        <View style={styles.eventsContainer}>
          {upcomingEvents.map((event, index) => (
            <AnimatedView key={event.id} delay={200 + index * 100}>
              <View style={styles.eventCard}>
                <View style={styles.eventHeader}>
                  <View style={[styles.eventTypeTag, { backgroundColor: getTypeColor(event.type) }]}>
                    <Text style={styles.eventTypeText}>{event.type}</Text>
                  </View>
                </View>

                <Text style={styles.eventTitle}>{event.title}</Text>

                <View style={styles.eventDetails}>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="calendar-outline" size={16} color={Colors.neutral[500]} />
                    <Text style={styles.eventDetailText}>{event.date}</Text>
                  </View>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="time-outline" size={16} color={Colors.neutral[500]} />
                    <Text style={styles.eventDetailText}>{event.time}</Text>
                  </View>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="location-outline" size={16} color={Colors.neutral[500]} />
                    <Text style={styles.eventDetailText}>{event.location}</Text>
                  </View>
                  <View style={styles.eventDetailRow}>
                    <Ionicons name="people-outline" size={16} color={Colors.neutral[500]} />
                    <Text style={styles.eventDetailText}>{event.attendees} attending</Text>
                  </View>
                </View>

                <PremiumButton
                  title="Register"
                  onPress={() => handleRegister(event.id)}
                  style={styles.registerButton}
                />
              </View>
            </AnimatedView>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Conference':
      return Colors.accent[100];
    case 'Networking':
      return Colors.primary[100];
    case 'Workshop':
      return Colors.neutral[100];
    default:
      return Colors.neutral[100];
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.neutral[100],
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
  },
  placeholder: {
    width: 40,
  },
  logoutButton: {
    padding: 8,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    lineHeight: 22,
    textAlign: 'center',
  },
  eventsContainer: {
    paddingHorizontal: 24,
    gap: 20,
    paddingBottom: 32,
  },
  eventCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.neutral[100],
  },
  eventHeader: {
    marginBottom: 12,
  },
  eventTypeTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  eventTypeText: {
    fontSize: 12,
    fontFamily: Fonts.body.semiBold,
    color: Colors.neutral[700],
  },
  eventTitle: {
    fontSize: 20,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginBottom: 16,
    lineHeight: 26,
  },
  eventDetails: {
    gap: 12,
    marginBottom: 20,
  },
  eventDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  eventDetailText: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
  },
  registerButton: {
    marginTop: 8,
  },
});