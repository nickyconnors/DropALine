import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import DraftLogo from '../assets/draft.svg';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <DraftLogo width={30} height={30} style={styles.logo} />
        <Text style={styles.bannerText}>Drop-A-Line</Text>
      </View>

      {/* Circular Button */}
      <TouchableOpacity
        style={styles.circularButton}
        onPress={() => navigation.navigate('Second')} // Navigate to 'Second' screen when button is pressed
      >
        <Text style={styles.buttonText}>I feel unsafe</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up all available space
    backgroundColor: '#f3f3f3',
    justifyContent: 'space-between', // Space between elements to keep the banner at the top and button centered
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3AB795',
    width: '100%',
    padding: 12,
    justifyContent: 'center',
  },
  logo: {
    marginRight: 8,
  },
  bannerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  circularButton: {
    width: 200, // Diameter of the circle
    height: 200, // Diameter of the circle
    borderRadius: 100, // Half the width and height to make it circular
    backgroundColor: '#3AB795', // Button color (same as banner)
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center', // To center horizontally
    marginBottom: 300, // Space from the bottom of the screen
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
