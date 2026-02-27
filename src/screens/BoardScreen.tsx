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
    name: 'Er. Bheem Rao Jaligama',
    title: 'Chairman',
    phone: '9246502056',
    email: 'cruthidesigns@gmail.com',
  },
  {
    name: 'Er. S Mahender Reddy',
    title: 'Imm. Past Chairman',
    phone: '9246520410',
    email: 'asaconsultants.mahender@gmail.com',
  },
  {
    name: 'Er. C Ramesh',
    title: 'Vice Chairman',
    phone: '9849028573',
    email: 'info@rkengineers.co.in',
  },
  {
    name: 'Er. D S Jaya Prakash',
    title: 'Hon. Secretary',
    phone: '9849039491',
    email: 'primodesigns@rediffmail.com',
  },
  {
    name: 'Er. Rudra Amarnath Babu',
    title: 'Treasurer',
    phone: '9866085165, 9676060154',
    email: 'rudraamar@gmail.com',
  },
  {
    name: 'K. Raj Kumar',
    title: 'Vice President South',
    phone: '9949444442',
    email: 'rajkacharla@gmail.com',
  },
  {
    name: 'Er. A Kashiram',
    title: 'Secretary General (Elect)',
    phone: '9849601428',
    email: 'kashiadepu@gmail.com',
  },
];

const mcMembers = [
  {
    name: 'Er Chiluveru Purushotham',
    title: 'MC MEMBER',
    qualification: 'B.E. (Civil), M.Tech. (Geo-Tech)',
    company: 'M/S Saketha Rama Innovation Pvt Ltd',
    address: 'Plot no 118, Road no 44, CBI COLONY, Jubilee Hills, Hyderabad 500081',
    phone: '8096910234, 7075456321',
    email: 'chpm60@gmail.com',
  },
  {
    name: 'DR. V MALLIKARJUNA REDDY',
    title: 'MC MEMBER',
    qualification: 'M.Tech, Ph.D.',
    company: 'Gokaraju Rangaraju Institute of Engineering and Technology',
    phone: '9440596438',
    email: 'evmreddyin@yahoo.co.in',
  },
  {
    name: 'Er K V Ramanaiah',
    title: 'MC MEMBER',
    qualification: 'M Tech (Structures)',
    company: 'Gowthamy Engineering Service',
    phone: '9848046602',
    email: 'kv_r@yahoo.com',
  },
  {
    name: 'Er Sudhakar Akkala',
    title: 'MC MEMBER',
    qualification: 'B.E Civil (Osm), CCQM (NICMAR)',
    company: 'SAS Developers & Consultants',
    details: 'Building Contracts, Liaisoning, Consultancy services',
    phone: '9108364652, 7892284548',
    email: 'sudhakar.a@sasdev.co.in, info@sasdev.co.in',
  },
  {
    name: 'Er Thirunagari Srikanth',
    title: 'MC MEMBER',
    qualification: 'M. Tech (Structures)',
    company: 'M/s Essen Consultants Civil & Structural Engineers',
    phone: '9849797112',
    email: 'essenmail@gmail.com',
  },
  {
    name: 'Er Archana Kalyala',
    title: 'MC MEMBER',
    qualification: 'B. Tech',
    company: 'Sri Advaya engineering consultants, Structural Engineers',
    phone: '8885507939',
    email: 'archana@saec.in',
  },
];

export default function BoardScreen({ navigation }: BoardScreenProps) {
  const handleBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    // Navigate back to Welcome screen and reset navigation stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Welcome' }],
    });
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
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AnimatedView delay={0} style={styles.content}>
          <Text style={styles.sectionTitle}>Office Bearers of ACCE(I) Hyderabad Centre</Text>
          <Text style={styles.subtitle}>
            Meet the dedicated leaders guiding our association's vision and growth
          </Text>
        </AnimatedView>

        <View style={styles.boardContainer}>
          {boardMembers.map((member, index) => (
            <AnimatedView key={index} delay={200 + index * 100}>
              <View style={styles.memberCard}>
                <View style={styles.avatarContainer}>
                  <Ionicons name="person" size={40} color={Colors.primary[600]} />
                </View>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberTitle}>{member.title}</Text>
                
                {member.phone && (
                  <View style={styles.detailRow}>
                    <Ionicons name="call" size={16} color={Colors.primary[600]} />
                    <Text style={styles.detailText}>{member.phone}</Text>
                  </View>
                )}
                
                <View style={styles.detailRow}>
                  <Ionicons name="mail" size={16} color={Colors.primary[600]} />
                  <Text style={styles.detailText}>{member.email}</Text>
                </View>
              </View>
            </AnimatedView>
          ))}
        </View>

        <AnimatedView delay={0} style={styles.content}>
          <Text style={styles.sectionTitle}>MC Members of ACCE(I) Hyderabad Centre</Text>
        </AnimatedView>

        <View style={styles.boardContainer}>
          {mcMembers.map((member, index) => (
            <AnimatedView key={`mc-${index}`} delay={200 + index * 100}>
              <View style={styles.memberCard}>
                <View style={styles.avatarContainer}>
                  <Ionicons name="person" size={40} color={Colors.primary[600]} />
                </View>
                <Text style={styles.memberName}>{member.name}</Text>
                <Text style={styles.memberTitle}>{member.title}</Text>
                
                {member.qualification && (
                  <Text style={styles.qualificationText}>{member.qualification}</Text>
                )}
                
                {member.company && (
                  <Text style={styles.companyText}>{member.company}</Text>
                )}
                
                {member.address && (
                  <Text style={styles.addressText}>{member.address}</Text>
                )}
                
                {member.details && (
                  <Text style={styles.detailsText}>{member.details}</Text>
                )}
                
                {member.phone && (
                  <View style={styles.detailRow}>
                    <Ionicons name="call" size={16} color={Colors.primary[600]} />
                    <Text style={styles.detailText}>{member.phone}</Text>
                  </View>
                )}
                
                <View style={styles.detailRow}>
                  <Ionicons name="mail" size={16} color={Colors.primary[600]} />
                  <Text style={styles.detailText}>{member.email}</Text>
                </View>
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
                <Text style={styles.infoText}>info@accehyd.org</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="call" size={20} color={Colors.primary[600]} />
                <Text style={styles.infoText}>9849039491</Text>
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
  sectionTitle: {
    fontSize: 20,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    textAlign: 'center',
    marginBottom: 8,
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
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary[50],
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  memberName: {
    fontSize: 18,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginBottom: 6,
    textAlign: 'center',
  },
  memberTitle: {
    fontSize: 14,
    fontFamily: Fonts.body.semiBold,
    color: Colors.primary[600],
    marginBottom: 12,
    textAlign: 'center',
  },
  qualificationText: {
    fontSize: 13,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[700],
    marginBottom: 6,
    textAlign: 'center',
  },
  companyText: {
    fontSize: 13,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    marginBottom: 6,
    textAlign: 'center',
  },
  addressText: {
    fontSize: 12,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[500],
    marginBottom: 6,
    textAlign: 'center',
    lineHeight: 18,
  },
  detailsText: {
    fontSize: 13,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    marginBottom: 6,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  detailText: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[700],
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