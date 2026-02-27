import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import AnimatedView from '../components/ui/AnimatedView';
import PremiumButton from '../components/ui/PremiumButton';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

type HomeScreenProps = {
  navigation: StackNavigationProp<any>;
};

const menuItems = [
  {
    title: 'Upcoming Events',
    subtitle: 'Join exclusive networking events',
    icon: 'calendar',
    screen: 'Events',
    color: Colors.accent[500],
  },
  {
    title: 'Calendar',
    subtitle: 'View important dates',
    icon: 'time',
    screen: 'Calendar',
    color: Colors.primary[500],
  },
  {
    title: 'Board Members',
    subtitle: 'Meet our leadership team',
    icon: 'people',
    screen: 'Board',
    color: Colors.neutral[600],
  },
  {
    title: 'Contact Us',
    subtitle: 'Get in touch with us',
    icon: 'mail',
    screen: 'Contact',
    color: Colors.accent[600],
  },
];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const handleMenuPress = (screen: string) => {
    navigation.navigate(screen);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[Colors.primary[50], Colors.white]}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <AnimatedView delay={0}>
              <Text style={styles.welcomeText}>Welcome back!</Text>
              <Text style={styles.headerTitle}>Professional Association</Text>
            </AnimatedView>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Ionicons name="log-out-outline" size={24} color={Colors.neutral[800]} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <AnimatedView delay={200} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Quick Access</Text>
              <Text style={styles.sectionSubtitle}>
                Explore our features and stay connected
              </Text>
            </AnimatedView>

            <View style={styles.menuGrid}>
              {menuItems.map((item, index) => (
                <AnimatedView key={item.screen} delay={300 + index * 100}>
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => handleMenuPress(item.screen)}
                    activeOpacity={0.8}
                  >
                    <View style={[styles.iconContainer, { backgroundColor: `${item.color}15` }]}>
                      <Ionicons name={item.icon as any} size={28} color={item.color} />
                    </View>
                    <View style={styles.menuTextContainer}>
                      <Text style={styles.menuTitle}>{item.title}</Text>
                      <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                    </View>
                    <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
                  </TouchableOpacity>
                </AnimatedView>
              ))}
            </View>

            <AnimatedView delay={800} style={styles.bottomSection}>
              <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>150+</Text>
                  <Text style={styles.statLabel}>Members</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>25</Text>
                  <Text style={styles.statLabel}>Events</Text>
                </View>
                <View style={styles.statDivider} />
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>5</Text>
                  <Text style={styles.statLabel}>Years</Text>
                </View>
              </View>
            </AnimatedView>
          </View>
        </ScrollView>
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
  scrollView: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  logoutButton: {
    padding: 8,
    marginTop: -8,
  },
  welcomeText: {
    fontSize: 16,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    letterSpacing: -0.5,
  },
  content: {
    paddingHorizontal: 24,
  },
  sectionContainer: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginBottom: 8,
    letterSpacing: -0.3,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    lineHeight: 22,
  },
  menuGrid: {
    gap: 16,
    marginBottom: 32,
  },
  menuItem: {
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
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontFamily: Fonts.heading.medium,
    color: Colors.neutral[800],
    marginBottom: 4,
  },
  menuSubtitle: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[500],
    lineHeight: 18,
  },
  bottomSection: {
    marginBottom: 32,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 16,
    padding: 24,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontFamily: Fonts.heading.bold,
    color: Colors.primary[600],
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
  },
  statDivider: {
    width: 1,
    backgroundColor: Colors.neutral[200],
    marginHorizontal: 16,
  },
});