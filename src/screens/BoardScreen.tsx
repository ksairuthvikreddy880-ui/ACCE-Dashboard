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

type BoardScreenProps = {
  navigation: StackNavigationProp<any>;
};

const boardMembers = [
  {
    name: 'Sarah Johnson',
    title: 'President',
    company: 'Tech Innovations Inc.',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
  },
  {
    name: 'Michael Chen',
    title: 'Vice President',
    company: 'Global Solutions Ltd.',
    email: 'michael.chen@email.com',
    phone: '(555) 234-5678',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Secretary',
    company: 'Strategic Partners',
    email: 'emily.rodriguez@email.com',
    phone: '(555) 345-6789',
  },
  {
    name: 'David Kim',
    title: 'Treasurer',
    company: 'Financial Advisors Co.',
    email: 'david.kim@email.com',
    phone: '(555) 456-7890',
  },
];

export default function BoardScreen({ navigation }: BoardScreenProps) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleContact = (member: any) => {
    // Handle contact action
    console.log('Contact:', member.name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Board of Directors</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AnimatedView delay={0} style={styles.content}>
          <Text style={styles.subtitle}>
            Meet the dedicated leaders guiding our association's vision and growth
          </Text>
        </AnimatedView>

        <View style={styles.boardContainer}>
          {boardMembers.map((member, index) => (
            <AnimatedView key={index} delay={200 + index * 100}>
              <View style={styles.memberCard}>
                <View style={styles.memberHeader}>
                  <View style={styles.avatarContainer}>
                    <Ionicons name="person" size={32} color={Colors.primary[600]} />
                  </View>
                  <View style={styles.memberInfo}>
                    <Text style={styles.memberName}>{member.name}</Text>
                    <Text style={styles.memberTitle}>{member.title}</Text>
                    <Text style={styles.memberCompany}>{member.company}</Text>
                  </View>
                </View>

                <View style={styles.contactInfo}>
                  <View style={styles.contactRow}>
                    <Ionicons name="mail-outline" size={16} color={Colors.neutral[500]} />
                    <Text style={styles.contactText}>{member.email}</Text>
                  </View>
                  <View style={styles.contactRow}>
                    <Ionicons name="call-outline" size={16} color={Colors.neutral[500]} />
                    <Text style={styles.contactText}>{member.phone}</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.contactButton}
                  onPress={() => handleContact(member)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.contactButtonText}>Contact</Text>
                  <Ionicons name="arrow-forward" size={16} color={Colors.primary[600]} />
                </TouchableOpacity>
              </View>
            </AnimatedView>
          ))}
        </View>

        <AnimatedView delay={800} style={styles.bottomSection}>
          <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
              <Ionicons name="information-circle" size={24} color={Colors.primary[600]} />
              <Text style={styles.infoTitle}>Association Information</Text>
            </View>
            <View style={styles.infoContent}>
              <View style={styles.infoRow}>
                <Ionicons name="mail" size={20} color={Colors.primary[600]} />
                <Text style={styles.infoText}>info@association.org</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="call" size={20} color={Colors.primary[600]} />
                <Text style={styles.infoText}>(555) 123-4567</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="location" size={20} color={Colors.primary[600]} />
                <Text style={styles.infoText}>
                  123 Professional Way{'\n'}Business District, NY 10001
                </Text>
              </View>
            </View>
          </View>
        </AnimatedView>
      </ScrollView>
    </SafeAreaView>
  );
}

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
  boardContainer: {
    paddingHorizontal: 24,
    gap: 20,
    paddingBottom: 32,
  },
  memberCard: {
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
  memberHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginBottom: 4,
  },
  memberTitle: {
    fontSize: 14,
    fontFamily: Fonts.body.semiBold,
    color: Colors.primary[600],
    marginBottom: 2,
  },
  memberCompany: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[500],
  },
  contactInfo: {
    gap: 8,
    marginBottom: 16,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary[50],
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  contactButtonText: {
    fontSize: 14,
    fontFamily: Fonts.body.semiBold,
    color: Colors.primary[600],
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  infoCard: {
    backgroundColor: Colors.neutral[50],
    borderRadius: 16,
    padding: 24,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginLeft: 12,
  },
  infoContent: {
    gap: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  infoText: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[700],
    lineHeight: 20,
  },
});