import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import DraftLogo from '../assets/draft.svg';

// Import the required types from @react-navigation/native-stack
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

const SecondScreen: React.FC<Props> = () => {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  const handleReasonChange = (value: string) => {
    setSelectedReason(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <DraftLogo width={30} height={30} style={styles.logo} />
        <Text style={styles.bannerText}>Drop-A-Line</Text>
      </View>

      {/* Dropdown Menu */}
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          onValueChange={handleReasonChange}
          items={[
            { label: 'I was bullied', value: 'bullied' },
            { label: 'I was assaulted', value: 'assaulted' },
          ]}
          placeholder={{ label: 'Select a reason', value: null }}
          value={selectedReason}
          style={pickerSelectStyles}
        />
      </View>

      {/* Display selected reason */}
      {selectedReason && (
        <Text style={styles.selectedText}>Selected Reason: {selectedReason}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    padding: 20,
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
  dropdownContainer: {
    marginTop: 30,
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  selectedText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3AB795',
    borderRadius: 4,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  inputAndroid: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3AB795',
    borderRadius: 4,
    backgroundColor: 'white',
    textAlign: 'center',
  },
});

export default SecondScreen;
