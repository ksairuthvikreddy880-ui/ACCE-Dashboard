import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

import AnimatedView from '../components/ui/AnimatedView';
import PremiumButton from '../components/ui/PremiumButton';
import { Colors } from '../constants/Colors';
import { Fonts } from '../constants/Fonts';

type ContactScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function ContactScreen({ navigation }: ContactScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    Alert.alert('Success', 'Your message has been sent successfully!');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleContactMethod = (method: string) => {
    Alert.alert('Contact', `Opening ${method}...`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color={Colors.neutral[800]} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Us</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <AnimatedView delay={0} style={styles.content}>
          <Text style={styles.subtitle}>
            Have questions or need assistance? We're here to help you make the most of your membership
          </Text>
        </AnimatedView>

        <View style={styles.contactMethodsContainer}>
          <AnimatedView delay={200}>
            <Text style={styles.sectionTitle}>Get in Touch</Text>
          </AnimatedView>

          <View style={styles.contactMethods}>
            <AnimatedView delay={300}>
              <TouchableOpacity
                style={styles.contactMethod}
                onPress={() => handleContactMethod('Email')}
                activeOpacity={0.8}
              >
                <View style={[styles.contactIcon, { backgroundColor: Colors.primary[100] }]}>
                  <Ionicons name="mail" size={24} color={Colors.primary[600]} />
                </View>
                <View style={styles.contactMethodContent}>
                  <Text style={styles.contactMethodTitle}>Email</Text>
                  <Text style={styles.contactMethodText}>info@association.org</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
              </TouchableOpacity>
            </AnimatedView>

            <AnimatedView delay={400}>
              <TouchableOpacity
                style={styles.contactMethod}
                onPress={() => handleContactMethod('Phone')}
                activeOpacity={0.8}
              >
                <View style={[styles.contactIcon, { backgroundColor: Colors.accent[100] }]}>
                  <Ionicons name="call" size={24} color={Colors.accent[600]} />
                </View>
                <View style={styles.contactMethodContent}>
                  <Text style={styles.contactMethodTitle}>Phone</Text>
                  <Text style={styles.contactMethodText}>(555) 123-4567</Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
              </TouchableOpacity>
            </AnimatedView>

            <AnimatedView delay={500}>
              <TouchableOpacity
                style={styles.contactMethod}
                onPress={() => handleContactMethod('Address')}
                activeOpacity={0.8}
              >
                <View style={[styles.contactIcon, { backgroundColor: Colors.neutral[100] }]}>
                  <Ionicons name="location" size={24} color={Colors.neutral[600]} />
                </View>
                <View style={styles.contactMethodContent}>
                  <Text style={styles.contactMethodTitle}>Address</Text>
                  <Text style={styles.contactMethodText}>
                    123 Professional Way{'\n'}Business District, NY 10001
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color={Colors.neutral[400]} />
              </TouchableOpacity>
            </AnimatedView>
          </View>
        </View>

        <AnimatedView delay={600} style={styles.messageFormContainer}>
          <Text style={styles.sectionTitle}>Send a Message</Text>
          
          <View style={styles.messageForm}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Your Name</Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Enter your full name"
                placeholderTextColor={Colors.neutral[400]}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor={Colors.neutral[400]}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Message</Text>
              <TextInput
                style={[styles.textInput, styles.messageInput]}
                value={message}
                onChangeText={setMessage}
                placeholder="Type your message here..."
                placeholderTextColor={Colors.neutral[400]}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <PremiumButton
              title="Send Message"
              onPress={handleSendMessage}
              style={styles.sendButton}
            />
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
  contactMethodsContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: Fonts.heading.semiBold,
    color: Colors.neutral[800],
    marginBottom: 20,
    letterSpacing: -0.3,
  },
  contactMethods: {
    gap: 16,
  },
  contactMethod: {
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
  contactIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  contactMethodContent: {
    flex: 1,
  },
  contactMethodTitle: {
    fontSize: 16,
    fontFamily: Fonts.heading.medium,
    color: Colors.neutral[800],
    marginBottom: 4,
  },
  contactMethodText: {
    fontSize: 14,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[600],
    lineHeight: 18,
  },
  messageFormContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  messageForm: {
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
    borderWidth: 1,
    borderColor: Colors.neutral[100],
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: Fonts.body.semiBold,
    color: Colors.neutral[700],
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: Fonts.body.regular,
    color: Colors.neutral[800],
    backgroundColor: Colors.white,
  },
  messageInput: {
    height: 100,
    paddingTop: 12,
  },
  sendButton: {
    marginTop: 8,
  },
});