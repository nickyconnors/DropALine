import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Second: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

const SecondScreen: React.FC<Props> = () => {
  return (
    <View>
      <Text>This is the second screen</Text>
    </View>
  );
};

export default SecondScreen;
