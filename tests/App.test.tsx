import type { FunctionComponent, ReactElement } from 'react';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { InstructionTest } from './Instruction.test';

const white = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const AppTest: FunctionComponent = (): ReactElement => (
  <View style={styles.container}>
    <InstructionTest />
  </View>
);
