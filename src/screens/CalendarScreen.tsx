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
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

type CalendarScreenProps = {
  navigation: StackNavigationProp<any>;
};

const calendarHighlights = [
  {
    date: '15',
    month: 'MAR',
    title: 'Leadership Summit',
    type: 'Conference',
  },
  {
    date: '22',
    month: 'MAR',
    title: 'Networking Mixer',
    type: 'Social',
  },
  {
    date: '05',
    month: 'APR',
    title: 'Workshop Series',
    type: 'Education',
  },
  {
    date: '18',
    month: 'APR',
    title: 'Board Meeting',
    type: 'Meeting',
  },
  {
    date: '02',
    month: 'MAY',
    title: 'Annual Gala',
    type: 'Event',
  },
];

export default function CalendarScreen({ navigation }: CalendarScreenProps) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Calendar</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AnimatedView delay={0} style={styles.content}>
          <Text style={styles.subtitle}>
            Stay updated with important dates and never miss an opportunity
          </Text>
        </AnimatedView>

        <View style={styles.highlightsContainer}>
          <AnimatedView delay={200}>
            <Text style={styles.sectionTitle}>Upcoming Highlights</Text>
          </AnimatedView>

          <View style={styles.highlightsGrid}>
            {calendarHighlights.map((item, index) => (
              <AnimatedView key={index} delay={300 + index * 100}>
                <TouchableOpacity style={styles.highlightCard} activeOpacity={0.8}>
                  <View style={styles.dateContainer}>
                    <Text style={styles.dateNumber}>{item.date}</Text>
                    <Text style={styles.dateMonth}>{item.month}</Text>
                  </View>
                  <View style={styles.highlightContent}>
                    <Text style={styles.highlightTitle}>{item.title}</Text>
                    <View style={[styles.typeTag, { backgroundColor: getTypeColor(item.type) }]}>
                      <Text style={styles.typeText}>{item.type}</Text>
                    </View>
                  </View>
                  <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
                </TouchableOpacity>
              </AnimatedView>
            ))}
          </View>
        </View>

        <AnimatedView delay={800} style={styles.bottomSection}>
          <View style={styles.calendarCard}>
            <View style={styles.calendarHeader}>
              <Ionicons name="calendar" size={24} color={Colors.primary[600]} />
              <Text style={styles.calendarTitle}>Full Calendar</Text>
            </View>
            <Text style={styles.calendarDescription}>
              View all events, meetings, and important dates in our comprehensive calendar
            </Text>
            <TouchableOpacity style={styles.viewCalendarButton}>
              <Text style={styles.viewCalendarText}>View Full Calendar</Text>
              <Ionicons name="arrow-forward" size={16} color={Colors.primary[600]} />
            </TouchableOpacity>
          </View>
        </AnimatedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Conference':
      return Colors.accent[100];
    case 'Social':
      return Colors.primary[100];
    case 'Education':
      return Colors.neutral[100];
    case 'Meeting':
      return Colors.primary[50];
    case 'Event':
      return Colors.accent[50];
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
  highlightsContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginBottom: 20,
    letterSpacing: -0.3,
  },
  highlightsGrid: {
    gap: 16,
  },
  highlightCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 16,
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
  dateContainer: {
    backgroundColor: Colors.primary[50],
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginRight: 16,
    minWidth: 64,
  },
  dateNumber: {
    fontSize: 20,
    fontFamily: Fonts.heading.bold,
    color: Colors.primary[600],
    lineHeight: 24,
  },
  dateMonth: {
    fontSize: 12,
    fontFamily: Fonts.body.semiBold,
    color: Colors.primary[500],
    letterSpacing: 0.5,
  },
  highlightContent: {
    flex: 1,
  },
  highlightTitle: {
    fontSize: 16,
    fontFamily: Fonts.heading.medium,
    color: Colors.neutral[800],
    marginBottom: 8,
  },
  typeTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
    fontFamily: Fonts.body.semiBold,
    color: Colors.neutral[600],
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  calendarCard: {
    backgroundColor: Colors.primary[50],
    borderRadius: 16,
    padding: 24,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  calendarTitle: {
    fontSize: 18,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginLeft: 12,
  },
  calendarDescription: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    lineHeight: 20,
    marginBottom: 16,
  },
  viewCalendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  viewCalendarText: {
    fontSize: 14,
    fontFamily: Fonts.body.semiBold,
    color: Colors.primary[600],
    marginRight: 8,
  },
});