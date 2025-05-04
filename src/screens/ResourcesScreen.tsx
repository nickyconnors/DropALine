// File: src/screens/ResourcesScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResourcesScreen = () => {
  const categories = ['Hotline', 'Racism', 'Mental Health', 'Bullying'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resources</Text>
      <View style={styles.grid}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ResourcesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    width: '47%',
    marginBottom: 15,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 16,
  },
});
