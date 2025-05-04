// File: src/screens/ScheduleScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ScheduleScreen = () => {
  const [staff, setStaff] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSend = () => {
    Alert.alert('Appointment request sent!');
  };

  return (
    <View style={styles.container}>
      <Picker selectedValue={staff} onValueChange={setStaff} style={styles.input}>
        <Picker.Item label="Choose Staff" value="" />
        <Picker.Item label="Ms. Smith" value="smith" />
        <Picker.Item label="Mr. Lee" value="lee" />
      </Picker>

      <TextInput
        placeholder="Choose Date"
        value={date}
        onChangeText={setDate}
        style={styles.input}
      />
      <TextInput
        placeholder="Choose Time"
        value={time}
        onChangeText={setTime}
        style={styles.input}
      />
      <TextInput
        placeholder="Any Notes"
        value={notes}
        onChangeText={setNotes}
        style={styles.input}
      />

      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
});
