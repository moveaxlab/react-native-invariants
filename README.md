# React Native Invariants

![Travis (.com)](https://img.shields.io/travis/com/moveaxlab/react-native-invariants.svg)
![Coveralls github](https://img.shields.io/coveralls/github/moveaxlab/react-native-invariants.svg)
![npm](https://img.shields.io/npm/v/react-native-invariants.svg)

This package checks React Native invariants not covered by `react-test-renderer` and friends.

## Motivation

Libraries like `react-test-renderer` and `react-native-testing-library` overlook React Native invariant violations (obviously).
We want to detect this type of errors in unit tests, while waiting for [Enzyme][enzyme-thread] to hopefully catch up.

```jsx
<View>
  <CircularProgress />
  Loading in progress...
</View>
```

The most common mistakes (for us non-native developers) are raw text not inside Text components, and Views inside Text components.
This library detects both.

## Installation

```bash
yarn add --dev react-native-invariants react-test-renderer
```

## Usage

```jsx
import React from 'react';
import renderer from 'react-test-renderer';
import { checkInvariants } from 'react-native-invariants';
import { MyComponent } from '../somewhere';

it('Tests a React Native component', () => {
  const tree = renderer.create(<MyComponent />).toJSON();
  checkInvariants(tree);
});
```

Or redefine a render method to always check invariants.

[enzyme-thread]: https://github.com/airbnb/enzyme/issues/1436
