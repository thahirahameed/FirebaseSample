import React from 'react';
import {View, Text, Button, Alert} from 'react-native';

const FirstScreen = () => {
  return (
    <View>
      <Text> Welcome to The App</Text>
      <Button
        onPress={() => {
          Alert.alert('Button Pressed');
        }}
        title=" Click Me"
        color="blue"
      />
    </View>
  );
};

export default FirstScreen;
