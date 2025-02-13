import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Drop A Line</Text>
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('Second')} />
    </View>
  );
};

export default HomeScreen;
