import * as React from 'react';
import { View, Text, Button } from 'react-native';

export const CorrectExample: React.FunctionComponent = () => (
  <View>
    <Text>This is some text</Text>
    <Button title="A button" onPress={() => {}} />
  </View>
);

CorrectExample.displayName = 'CorrectExample';
