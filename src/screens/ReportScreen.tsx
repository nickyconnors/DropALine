// File: src/screens/ReportScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/types';

const ReportScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [reason, setReason] = useState('');
  const [type, setType] = useState('');
  const [who, setWho] = useState('');

  const handleSubmit = () => {
    navigation.navigate('Confirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Reason</Text>
      <Picker selectedValue={reason} onValueChange={setReason} style={styles.input}>
        <Picker.Item label="Select reason..." value="" />
        <Picker.Item label="Racial Discrimination" value="racial" />
        <Picker.Item label="Bullying" value="bullying" />
        <Picker.Item label="Prefer not to say" value="unknown" />
      </Picker>

      <TextInput
        placeholder="Student or Teacher?"
        value={type}
        onChangeText={setType}
        style={styles.input}
      />

      <TextInput
        placeholder="Who?"
        value={who}
        onChangeText={setWho}
        style={styles.input}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
});
