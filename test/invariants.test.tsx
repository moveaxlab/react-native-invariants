import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ButtonWithinText } from './examples/ButtonWithinText';
import { RawTextWithoutText } from './examples/RawTextWithoutText';
import { ViewWithinText } from './examples/ViewWithinText';
import { CorrectExample } from './examples/CorrectExample';
import { checkInvariants } from '../src';

describe('Test error examples', () => {
  [ButtonWithinText, RawTextWithoutText, ViewWithinText].forEach((Component) => {
    it(`renders ${Component.displayName} without errors`, () => {
      const output = renderer.create(<Component />).toJSON();
      expect(output).toMatchSnapshot();
    });

    it(`invariants fail while rendering ${Component.displayName}`, () => {
      const output = renderer.create(<Component />).toJSON();
      expect(output).not.toBeNull();
      expect(() => checkInvariants(output)).toThrow();
    });
  });
});

describe('Test correct example', () => {
  [CorrectExample].forEach((Component) => {
    it(`renders ${Component.displayName} without errors`, () => {
      const output = renderer.create(<Component />).toJSON();
      expect(output).toMatchSnapshot();
    });

    it(`invariants pass while rendering ${Component.displayName}`, () => {
      const output = renderer.create(<Component />).toJSON();
      expect(output).not.toBeNull();
      expect(() => checkInvariants(output)).not.toThrow();
    });
  });
});
