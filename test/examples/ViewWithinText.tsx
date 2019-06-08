import * as React from 'react';
import { View, Text } from 'react-native';

export const ViewWithinText: React.FunctionComponent = () => (
  <Text><View>I cannot do this</View></Text>
);

ViewWithinText.displayName = 'ViewWithinText';
