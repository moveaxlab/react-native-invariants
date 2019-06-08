import * as React from 'react';
import { Text, Button } from 'react-native';

export const ButtonWithinText: React.FunctionComponent = () => (
  <Text><Button title="Test" onPress={() => {}} /></Text>
);

ButtonWithinText.displayName = 'ButtonWithinText';
